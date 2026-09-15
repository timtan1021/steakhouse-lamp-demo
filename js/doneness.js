var ATTR = 'data-doneness';
var VALID = { rare: 1, medium: 1, well: 1 };

function applyDoneness(doc, value) {
  if (!doc || !doc.documentElement) return false;
  if (!Object.prototype.hasOwnProperty.call(VALID, value)) return false;
  doc.documentElement.setAttribute(ATTR, value);
  return true;
}

function initDoneness(doc) {
  if (!doc || !doc.querySelectorAll) return;
  var inputs = doc.querySelectorAll('input[name="doneness"]');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function (e) {
      applyDoneness(doc, e.target.value);
    });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () { initDoneness(document); });
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { applyDoneness: applyDoneness, initDoneness: initDoneness };
}
