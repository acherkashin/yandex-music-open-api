const yamljs = require("yamljs");
const resolveRefs = require("json-refs").resolveRefs;

/**
 * Return JSON with resolved references
 * @param {array | object} root - The structure to find JSON References within (Swagger spec)
 * @returns {Promise.<JSON>}
 */
const multiFileSwagger = (root) => {
  const options = {
    filter: ["relative", "remote"],
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

module.exports = async function (rawJson) {
  const json = JSON.parse(rawJson);
  const result = await multiFileSwagger(json);
  return JSON.stringify(result);
};
