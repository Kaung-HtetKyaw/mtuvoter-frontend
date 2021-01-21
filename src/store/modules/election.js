import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
import { replaceBy, removeBy } from "@/utils/utils.js";

export const namespaced = true;
export const state = {
  elections: [],
  election: null,
  page: 1,
  limit: 5,
  end: false,
};
export const mutations = {
  FETCH_ELECTIONS(state, elections) {
    state.elections = state.elections.concat(elections);
    if (state.elections.length > 0 && elections.length == 0) state.end = true;
  },
  FETCH_ELECTION(state, election) {
    state.election = election;
  },
  CREATE_ELECTION(state, election) {
    state.election = election;
    state.elections.push(election);
  },
  UPDATE_ELECTION(state, election) {
    replaceBy(state.elections, election, "_id");
  },
  DELETE_ELECTION(state, electionId) {
    removeBy(state.elections, electionId, "_id");
  },
  UPDATE_CANDIDATE(state, candidate) {
    replaceBy(state.election.candidates, candidate, "_id");
  },
  ADD_CANDIDATES(state, candidates) {
    state.election.candidates = state.election.candidates.concat(candidates);
  },
  DELETE_CANDIDATE(state, candidateId) {
    removeBy(state.election.candidates, candidateId, "_id");
  },
  ADD_POSITION(state, position) {
    state.election.positions.push(position);
  },
  UPDATE_POSITION(state, position) {
    replaceBy(state.election.positions, position, "_id");
  },
  DELETE_POSITION(state, positionId) {
    removeBy(state.election.positions, positionId, "_id");
  },
  INCREMENT_PAGE(state) {
    state.page++;
  },
};

export const actions = {
  async getElections({ commit, state }, qurey = "") {
    const elections = await axios()
      .get(`/elections?page=${state.page}&limit=${state.limit}&${qurey}`)
      .then((res) => {
        commit("FETCH_ELECTIONS", res.data.data);
        commit("INCREMENT_PAGE");
        return res.data.data;
      })
      .catch(() => {
        showNoti(
          "error",
          "Error loading election. Please reload and try again."
        );
      });

    return elections;
  },
  async getElection({ commit }, id) {
    const election = await axios()
      .get(`/elections/${id}`)
      .then((res) => {
        commit("FETCH_ELECTION", res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        showNoti("error", e.response.data.message);
      });
    return election;
  },
  async createElection({ commit }, { election }) {
    await axios()
      .post(`/elections`, election)
      .then((res) => {
        commit("CREATE_ELECTION", res.data.data);
        console.log(res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        console.log(e.response);
        showNoti("error", e.response.message);
      });
  },
  async updateElection({ commit }, { election }) {
    console.log(election);
    await axios()
      .patch(`/elections/${election._id}`, election)
      .then((res) => {
        commit("UPDATE_ELECTION", res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        console.log(e.response);
        showNoti("error", e.response.message);
      });
  },
  async deleteElection({ commit }, { electionId }) {
    await axios()
      .delete(`/elections/${electionId}`)
      .then(() => {
        commit("DELETE_ELECTION", electionId);
      })
      .catch((e) => showNoti(e.response.message));
  },
  async updateCandidate(
    { commit },
    { electionId, positionId, formData, candidate }
  ) {
    console.log(electionId, positionId, candidate);
    const updatedCandidate = await axios()
      .patch(
        `/elections/${electionId}/positions/${positionId}/candidates/${candidate._id}`,
        formData,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        commit("UPDATE_CANDIDATE", res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        console.log(e.response);
        showNoti("error", e.response.data.message);
      });
    return updatedCandidate;
    // update in local
  },
  async addCandidates({ commit }, { electionId, positionId, candidates }) {
    const newCandidates = await Promise.all(
      candidates.map((el) => createCandidate(electionId, positionId, el))
    )
      .then((res) => {
        commit("ADD_CANDIDATES", res);
        return res;
      })
      .catch(() => {
        showNoti("error", "Error creating new candidates");
      });

    return newCandidates;
  },
  async removeCandidate({ commit, getters }, { candidateId }) {
    console.log(candidateId);
    const { _election, _position } = getters.getCandidateById(candidateId);
    await axios()
      .delete(
        `/elections/${_election}/positions/${_position}/candidates/${candidateId}`
      )
      .then(() => {
        commit("DELETE_CANDIDATE");
      })
      .catch((e) => showNoti("error", e.response.message));
  },
  // position
  async addPosition({ commit }, { position }) {
    const newPosition = await axios()
      .post(`/elections/${position._election}/positions`, position)
      .then((res) => {
        commit("ADD_POSITION", res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        showNoti("error", e.response.message);
      });
    console.log(newPosition);
    return newPosition;
  },
  async updatePosition({ commit }, { position }) {
    const updatedPosition = await axios()
      .patch(
        `/elections/${position._election}/positions/${position._id}`,
        position
      )
      .then((res) => {
        console.log(res.data.data);
        commit("UPDATE_POSITION", res.data.data);
        return res.data.data;
      })
      .catch((e) => showNoti("error", e.response.message));
    return updatedPosition;
  },
  async removePosition({ commit, getters }, { positionId }) {
    const position = getters.getPositionById(positionId);
    await axios()
      .delete(`/elections/${position._election}/positions/${position._id}`)
      .then(() => {
        commit("DELETE_POSITION", positionId);
        //* remove related candidates(still deciding which is better between deleteing all candidates or just delete it from the local store)
        const candidates = getters.getCandidatesByPosition(positionId);
        candidates.forEach((el) => {
          commit("DELETE_CANDIDATE", el._id);
        });
      })
      .catch((e) => {
        console.log(e);
        showNoti("error", e.response.message);
      });
  },
};

async function createCandidate(electionId, positionId, candidate) {
  return await axios()
    .post(
      `/elections/${electionId}/positions/${positionId}/candidates`,
      candidate,
      { withCredentials: true }
    )
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((e) => {
      console.log(e.response);
      showNoti("error", "Error creating candidate");
    });
}
export const getters = {
  getCandidatesByPosition: (state) => (position) => {
    let desiredPosition = state.election.positions.find(
      (el) => el._id === position
    );
    return state.election.candidates.filter(
      (el) => el._post === desiredPosition
    );
  },
  getCandidateById: (state) => (id) => {
    return state.election.candidates.find((el) => el._id === id);
  },
  getPositionById: (state) => (id) => {
    return state.election.positions.find((el) => el._id === id);
  },
};
