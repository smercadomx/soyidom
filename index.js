var child_process = require('child-process-promise');
var path = require('path');

module.exports.compile = function (options) {
  var command = 'java -jar ' + path.join(__dirname, './SoyToIncrementalDomSrcCompiler.jar'),
    key;

  for (key in options) {
    if (options.hasOwnProperty(key)) {
      command += ' --' + key + ' ' + options[key];
    }
  }

  return child_process.exec(command);
};
