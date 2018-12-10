'use strict';

/**
 * Global variable for the whole extension.
 * Load this file first in manifest.json.
 *
 * @namespace
 */
var refinedEPFL = { };

/**
 * A bunch of utils.
 *
 * @namespace
 */
refinedEPFL.utils = {
  /**
   * Check if template is Web2018
   *
   * @memberOf refinedEPFL.utils
   * @method isWeb2018
   * @returns {Boolean}
   */
  isWeb2018: function () {
    // Find something like '<header class="header ...">'
    var header = document.getElementsByTagName('header');
    if (header[0]) {
      var listClass = header[0].classList;
      return listClass.contains('header');
    }
    return false;
  }
};
