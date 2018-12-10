'use strict';

// Extension entry point

// After document load
(function () {
  if (refinedEPFL.utils.isWeb2018()) {
    refinedEPFL.themes.applyTheme();
  }
})();
