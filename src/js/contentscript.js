'use strict';

// Extension entry point

// After document load
(function () {
  if (refinedEPFL.utils.isWeb2018()) {
    refinedEPFL.themes.applyTheme();
  }

  if (refinedEPFL.utils.isHostService('people.epfl.ch')) {
    refinedEPFL.people.applyLayer();
  }
})();
