import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";
import { replaceBy } from "@/utils/utils.js";

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
  async updateCandidates({ commit }, electionId, positionId, candidate) {
    // update to DB
    const updatedCandidate = await axios()
      .patch(
        `elections/${electionId}/postions/${positionId}/candidates/${candidate._id}`
      )
      .then(() => {
        commit("UPDATE_CANDIDATE", candidate);
      })
      .catch(() => showNoti("error", "Error updating candidate."));
    return updatedCandidate;
    // update in local
  },
};
export const getters = {
  getCandidatesByPosition: (state) => (position) => {
    let desiredPosition = state.election.position.find(
      (el) => el._id === position
    );
    return state.election.candidates.filter(
      (el) => el._post === desiredPosition
    );
  },
};
