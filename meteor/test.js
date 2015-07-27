Tinytest.add('Remodal', function (test) {
  'use strict';
  var $div = $(document.createElement('div'));
  test.isNotNull($div.remodal(), 'Remodal instantiated properly.');
  test.equal($div.data('remodal'), 0, 'Remodal index is correct.');
});
