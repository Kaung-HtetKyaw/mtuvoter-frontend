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

export function setDefaultAuthMetaForRoutes(routes) {
  let result = routes.map((route) => {
    if (!route.meta || !route.meta.auth) {
      route.meta = {
        auth: {
          required: false,
          role: "user",
        },
      };
    }
    return route;
  });
  console.log(result);
  return result;
}
