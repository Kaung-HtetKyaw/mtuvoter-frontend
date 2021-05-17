import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
import { replaceBy, removeBy } from "@/utils/utils.js";

export const namespaced = true;
export const state = {
  elections: [],
  election: null,
  latest_raced_election: null,
  latest_results: null,
  page: 1,
  limit: 5,
  end: false
};
export const mutations = {
  FETCH_ELECTIONS(state, elections) {
    state.elections = state.elections.concat(elections);
    if (state.elections.length > 0 && elections.length == 0) state.end = true;
  },
  FETCH_ELECTION(state, election) {
    state.election = election;
  },
  FETCH_LATEST_RACED_ELECTION(state, election) {
    state.latest_raced_election = election;
  },
  FETCH_LATEST_RESULT(state, result) {
    state.latest_results = result;
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
  CHANGE_PUBLISHED_FLAG(state, election) {
    if (state.elections.length > 0) {
      replaceBy(state.elections, election, "_id");
    }
    if (state.election._id === election._id) {
      state.election.published = election.published;
    }
  },
  CLEAR_ELECTIONS(state) {
    state.end = false;
    state.page = 1;
    state.elections = [];
  },
  INCREMENT_PAGE(state) {
    state.page++;
  }
};

export const actions = {
  async getElections({ commit, state }, qurey = "") {
    const elections = await axios()
      .get(`/elections?page=${state.page}&limit=${state.limit}&${qurey}`)
      .then(res => {
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
      .then(res => {
        commit("FETCH_ELECTION", res.data.data);
        return res.data.data;
      })
      .catch(e => {
        showNoti("error", e.response.data.message);
      });
    return election;
  },
  async getLatestRacedElection({ commit }) {
    const latest_election = await axios()
      .get("/elections/latest-raced-election")
      .then(res => {
        commit("FETCH_LATEST_RACED_ELECTION", res.data.data);
        return res.data.data;
      })
      .catch(e => {
        console.log(e);
        showNoti("error", "Error loading the latest raced election");
      });
    return latest_election;
  },
  async createElection({ commit }, { election }) {
    return axios()
      .post(`/elections`, election)
      .then(res => {
        commit("CREATE_ELECTION", res.data.data);
        return res.data.data;
      })
      .catch(e => {
        showNoti("error", e.response.message);
      });
  },
  async updateElection({ commit }, { election }) {
    await axios()
      .patch(`/elections/${election._id}`, election)
      .then(res => {
        commit("UPDATE_ELECTION", res.data.data);
        return res.data.data;
      })
      .catch(e => {
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
      .catch(e => showNoti(e.response.message));
  },
  async updateCandidate(
    { commit },
    { electionId, positionId, formData, candidate }
  ) {
    const updatedCandidate = await axios()
      .patch(
        `/elections/${electionId}/positions/${positionId}/candidates/${candidate._id}`,
        formData,
        {
          withCredentials: true
        }
      )
      .then(res => {
        commit("UPDATE_CANDIDATE", res.data.data);
        return res.data.data;
      })
      .catch(e => {
        console.log(e.response);
        showNoti("error", e.response.data.message);
      });
    return updatedCandidate;
    // update in local
  },
  async addCandidates({ commit }, { electionId, positionId, candidates }) {
    const newCandidates = await Promise.all(
      candidates.map(el => createCandidate(electionId, positionId, el))
    )
      .then(res => {
        commit("ADD_CANDIDATES", res);
        return res;
      })
      .catch(() => {
        showNoti("error", "Error creating new candidates");
      });

    return newCandidates;
  },
  async removeCandidate({ commit, getters }, { candidateId }) {
    const { _election, _position } = getters.getCandidateById(candidateId);
    await axios()
      .delete(
        `/elections/${_election}/positions/${_position}/candidates/${candidateId}`
      )
      .then(() => {
        commit("DELETE_CANDIDATE");
      })
      .catch(e => showNoti("error", e.response.message));
  },
  // position
  async addPosition({ commit }, { position }) {
    const newPosition = await axios()
      .post(`/elections/${position._election}/positions`, position)
      .then(res => {
        commit("ADD_POSITION", res.data.data);
        return res.data.data;
      })
      .catch(e => {
        showNoti("error", e.response.message);
      });
    return newPosition;
  },
  async updatePosition({ commit }, { position }) {
    const updatedPosition = await axios()
      .patch(
        `/elections/${position._election}/positions/${position._id}`,
        position
      )
      .then(res => {
        commit("UPDATE_POSITION", res.data.data);
        return res.data.data;
      })
      .catch(e => showNoti("error", e.response.message));
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
        candidates.forEach(el => {
          commit("DELETE_CANDIDATE", el._id);
        });
      })
      .catch(e => {
        console.log(e);
        showNoti("error", e.response.message);
      });
  },
  // results
  async getLatestResults({ commit, state, dispatch }) {
    await dispatch("getLatestRacedElection");
    const latest_result = await Promise.all(
      state.latest_raced_election.positions.map(el =>
        getLatestRacedElectionResult(state.latest_raced_election._id, el._id)
      )
    );
    commit("FETCH_LATEST_RESULT", latest_result);
    return latest_result;
  },
  // change published flag to true if it was false previously and vice versa
  async changePublishedFlag({ state, commit }, { electionId }) {
    let wasPublished = state.election.published;
    let route = `/elections/${electionId}/${
      wasPublished ? "unpublish" : "publish"
    }`;
    return axios()
      .patch(route)
      .then(res => {
        commit("CHANGE_PUBLISHED_FLAG", res.data.data);
        return res.data.data;
      })
      .catch(e => {
        if (e.response.data.message) {
          showNoti("error", e.response.data.message);
        } else {
          showNoti("error", "Something went wrong");
        }
      });
  },
  clearElections({ commit }) {
    commit("CLEAR_ELECTIONS");
  }
};

async function createCandidate(electionId, positionId, candidate) {
  return await axios()
    .post(
      `/elections/${electionId}/positions/${positionId}/candidates`,
      candidate,
      { withCredentials: true }
    )
    .then(res => {
      return res.data.data;
    })
    .catch(() => {
      showNoti("error", "Error creating candidate");
    });
}
async function getLatestRacedElectionResult(electionId, positionId) {
  return await axios()
    .get(`/ballots/elections/${electionId}/positions/${positionId}`)
    .then(res => res.data.data)
    .catch(e => {
      console.log(e.response);
      showNoti("error", "Error creating candidate");
    });
}
export const getters = {
  getCandidatesByPosition: state => position => {
    let desiredPosition = state.election.positions.find(
      el => el._id === position
    );
    return state.election.candidates.filter(el => el._post === desiredPosition);
  },
  getCandidateById: state => id => {
    return state.election.candidates.find(el => el._id === id);
  },
  getPositionById: state => id => {
    return state.election.positions.find(el => el._id === id);
  },
  getElectionById: state => id => {
    return state.elections.find(el => el._id === id);
  }
};
