var indent = function (len) {
  var numIndents = 5 - len;
  return new Array(numIndents + 1).join(' ');
};

var formatErrs = function (errs) {
  var numErrs = errs.length + ' error' + (errs.length !== 1 ? 's' : '');
  if (errs.length) {
    var str = errs.map(function (result) {
      var e = result.error;
      var whitespace = indent((e.line + e.character.toString()).length);
      return whitespace + ' ' + e.line + ',' + e.character + ':' + ' ' + e.reason;
    }).join('\n');
    return str + '\n\n✗ ' + numErrs + ', [F4] for next, [shift-F4] for previous.\n';
  }
  return '✓ ' + numErrs + ', [esc] to hide.\n';
};

exports.reporter = function (errors, results) {
  console.log('[JSHint: ' + results[0].file + ']\n\n' + formatErrs(errors));
};
