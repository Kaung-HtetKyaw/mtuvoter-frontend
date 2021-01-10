// This grabs the file contents when the file changes
export function previewImg(file, callback) {
  let previewUrl;
  var reader = new FileReader();
  reader.onload = function() {
    previewUrl = reader.result;
    callback(previewUrl);
  };
  reader.readAsDataURL(file);
}

export function isFile(obj) {
  return obj.toString() === "[object File]";
}

export function getNestedPropertyFromDotString(obj, properties) {
  /* eslint-disable */
  let result = obj;
  properties.forEach((el) => {
    result = result[el];
  });
  return result;
}
