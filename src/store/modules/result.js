import axios from "@/services/axios.js";
import { showNoti } from "@/utils/noti.js";

export const namespaced = true;
export const state = {
  result_by_position: null,
  result_by_student: null,
  candidate_result: null,
};
export const mutations = {
  FETCH_RESULT_BY_POSITIONS(state, results) {
    state.result_by_position = results;
  },
  FETCH_RESULT_BY_STUDENT(state, result) {
    state.result_by_student = result;
  },
  FETCH_CANDIDATE_RESULT_BY_STUDENT(state, result) {
    state.candidate_result = result;
  },
  INCREMENT_PAGE(state) {
    state.page++;
  },
};

export const actions = {
  async getElectionResultsByPositions({ commit }, { election }) {
    let positionIds = election.positions.map((el) => el._id);
    const results = await Promise.all(
      positionIds.map((el) => getElectionResultByPosition(election._id, el))
    )
      .then((res) => {
        commit("FETCH_RESULT_BY_POSITIONS", res);
      })
      .catch((e) => {
        console.error(e.response);
        showNoti("error", e.response.message);
      });
    return results;
  },
  async getElectionResultByStudentType({ commit }, { electionId }) {
    return await axios()
      .get(`/ballots/election-vote-by-student/elections/${electionId}`)
      .then((res) => {
        commit("FETCH_RESULT_BY_STUDENT", res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        console.log(e.response);
        showNoti("error", "Error Loading the results");
      });
  },
  async getCandidateResultByStudentType(
    { commit },
    { electionId, positionId, candidateId }
  ) {
    await axios()
      .get(
        `ballots/candidate-vote-by-student/elections/${electionId}/positions/${positionId}/candidates/${candidateId}`
      )
      .then((res) => {
        commit("FETCH_CANDIDATE_RESULT_BY_STUDENT", res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        showNoti("error", e.response.message);
      });
  },
};
export const getters = {};

async function getElectionResultByPosition(electionId, positionId) {
  return await axios()
    .get(`/ballots/elections/${electionId}/positions/${positionId}`)
    .then((res) => res.data.data)
    .catch((e) => {
      console.log(e.response);
      showNoti("error", "Error loading result");
    });
}
