const yamljs = require("yamljs");
const resolveRefs = require("json-refs").resolveRefs;
const sp = require('synchronized-promise')
const path = require('path');

/**
 * Return JSON with resolved references
 * @param {array | object} root - The structure to find JSON References within (Swagger spec)
 * @returns {Promise.<JSON>}
 */
const multiFileSwagger = (root) => {
  const options = {
    filter: ["relative"],
    location: path.join(__dirname, "..", "src", "yandex-music.yaml"),
    loaderOptions: {
      processContent: function (res, callback) {
        callback(null, yamljs.parse(res.text));
      },
    },
  };

  return resolveRefs(root, options).then(
    function (results) {
      return results.resolved;
    },
    function (err) {
      console.log(err.stack);
    }
  );
};

module.exports = function (rawJson) {
  //TODO: need to figure out how to write async webpack loaders
  const json = JSON.parse(rawJson);
  const result = sp(multiFileSwagger)(json);
  return JSON.stringify(result);
};
