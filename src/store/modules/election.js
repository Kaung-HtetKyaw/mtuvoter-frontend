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
  UPDATE_CANDIDATE(state, candidate) {
    replaceBy(state.election.candidates, candidate, "_id");
  },
  ADD_CANDIDATES(state, candidates) {
    state.election.candidates = state.election.candidates.concat(candidates);
  },
  DELETE_CANDIDATE(state, candidateId) {
    removeBy(state.election.candidates, candidateId, "_id");
  },
  UPDATE_POSITION(state, position) {
    replaceBy(state.election.positions, position, "_id");
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
    console.log(electionId, positionId, candidates);
    const newCandidates = await Promise.all(
      candidates.map((el) => createCandidate(electionId, positionId, el))
    ).then((res) => {
      commit("ADD_CANDIDATES", res);
      return res;
    });
    return newCandidates;
  },
  async removeCandidate({ commit, getters }, { candidateId }) {
    console.log(candidateId);
    const { _election, _position } = getters.getCandidatesById(candidateId);
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
      console.log(e);
      showNoti("error", "Error creating new candidates.");
    });
}
export const getters = {
  getCandidatesByPosition: (state) => (position) => {
    let desiredPosition = state.election.position.find(
      (el) => el._id === position
    );
    return state.election.candidates.filter(
      (el) => el._post === desiredPosition
    );
  },
  getCandidatesById: (state) => (id) => {
    return state.election.candidates.find((el) => el._id === id);
  },
};
