export const yearMap = {
  first: "ပထမနှစ်",
  second: "ဒုတိယနှစ်",
  third: "တတိယနှစ်",
  fourth: "စတုတ္ထနှစ်",
  fifth: "ပဉ္စမနှစ်",
  sixth: "ဆဌမနှစ်",
  others: "ဘွဲ့လွန်",
};

export const yearArray = (() => {
  return mapToArray(yearMap);
})();

export const majorMap = {
  CEIT: "ကွန်ပျူတာအင်ဂျင်နီယာနှင့် သတင်းအချက်အလက်နည်းပညာ",
};

export const majorArray = (() => {
  return mapToArray(majorMap);
})();

function mapToArray(map) {
  let result = [];
  for (const key in map) {
    result.push(map[key]);
  }
  return result;
}
