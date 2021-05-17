export function convertInitialElectionDataToResult(positions, candidates) {
  return positions.map(position => convertDataToResult(position, candidates));
}

export function convertDataToResult(position, candidates) {
  let result = {};
  result.position = position._id;
  // filter out for the candidates who represent the position
  let matched_candidates = candidates.filter(el => el._post === position._id);
  // convert data to initial result
  result.result = matched_candidates.map(candidate => {
    let candidate_result = {};
    candidate_result.vote_count = 0;
    candidate_result.candidate = [{ ...candidate }];
    return candidate_result;
  });
  return result;
}

export function updateResults(initialResults, results) {
  let updated_results = [];
  // merge the position result
  initialResults.forEach(initialResult => {
    let result = results.find(el => {
      return el.position === initialResult.position;
    });
    if (result) {
      updated_results.push(
        updateCandidateResults(initialResult.position, initialResult, result)
      );
    }
  });
  return updated_results;
}

function updateCandidateResults(position, initialResults, results) {
  let candidate_results = { position: "", result: [] };
  candidate_results.position = position;

  // merge initial result and updated result (updated result first priority)
  initialResults.result.forEach(initial_result => {
    let new_result = results.result.find(el => {
      return el.candidate[0]._id === initial_result.candidate[0]._id;
    });
    if (new_result) {
      initial_result.vote_count = new_result.vote_count;
    }
    candidate_results.result.push(initial_result);
  });
  return candidate_results;
}

// example
// const sample = {
//   position: "alo",
//   result: [
//     {
//       vote_count: 0,
//       candidate: [
//         {
//           _election: "alo",
//           _post: "alo",
//           _id: "alo",
//           name: "Kgsama",
//         },
//       ],
//     },
//   ],
// };
