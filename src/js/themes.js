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
   * @param {string} theme name
   */
  applyTheme: function (theme) {
    var link = document.createElement('link');
    link.href = chrome.extension.getURL(
      'css/themes/' + theme.colorTheme + '.css'
    );
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(link);
  }

};
