'use strict';

// Extension entry point

// After document load
(function () {
  if (refinedEPFL.utils.isWeb2018()) {
    // Retrieve theme from Options
    // epfl is the default theme
    chrome.storage.local.get('colorTheme', function (theme) {
      if (!theme.colorTheme) {
        theme.colorTheme = 'epfl';
      }
      refinedEPFL.themes.applyTheme(theme);
    });
  }

  if (refinedEPFL.utils.isHostService('people.epfl.ch')) {
    refinedEPFL.people.applyLayer();
  }
})();
