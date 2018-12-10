'use strict';

/**
 * Themes related stuff.
 *
 * @namespace
 */
refinedEPFL.themes = {
  /**
   * Apply epfl.css theme.
   *
   * @memberOf refinedEPFL.themes
   * @method applyTheme
   */
  applyTheme: function () {
    var link = document.createElement('link');
    link.href = chrome.extension.getURL(
      'css/themes/epfl.css'
    );
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
};
