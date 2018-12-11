'use strict';

/**
 * people.epfl.ch related stuff
 *
 * @namespace
 */
refinedEPFL.people = {

  /**
   * Retrieve email address on profile
   *
   * @memberOf refinedEPFL.people
   * @method findEmailInPeople
   * @returns {Boolean}
   */
  findEmailInPeople: function () {
    var mails = document.querySelectorAll('a[href^=mailto]');
    if (mails[0]) {
      return mails[0].innerText;
    }
    return false;
  },

  /**
   * Retrieve sciper in url (path)
   *
   * @memberOf refinedEPFL.people
   * @method getSciperInPath
   * @returns {string} sciper
   */
  getSciperInPath: function () {
    var path = document.location.pathname;
    var found = path.match(/\/([0-9]{4,6})/);
    if (found) {
      return found[1];
    }
    return null;
  },

  /**
   * Call people API and retrieve sciper from email address
   *
   * @memberOf refinedEPFL.people
   * @method getPeopleInfo
   * @param {string} email address
   */
  getPeopleInfo: function (email) {
    var url = 'https://search.epfl.ch/json/ws_search.action?q=' + email;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
      var data = JSON.parse(this.responseText);
      if (data[0] && data[0].sciper) {
        refinedEPFL.people.addSciperAfterName(data[0].sciper);
      }
    });
    xhr.open('GET', url);
    xhr.send();
  },

  /**
   * Add sciper after name
   *
   * @memberOf refinedEPFL.people
   * @method addSciperAfterName
   * @param {string} sciper
   */
  addSciperAfterName: function (sciper) {
    var h1s = document.getElementsByTagName('h1');
    var name = h1s[1].innerText;
    h1s[1].innerText = name + ' - ' + sciper;
  },

  /**
   * Apply layer on people.epfl.ch
   *
   * @memberOf refinedEPFL.people
   * @method applyLayer
   */
  applyLayer: function () {
    var email = refinedEPFL.people.findEmailInPeople();
    if (email) {
      refinedEPFL.people.getPeopleInfo(email);
    } else {
      var sciper = refinedEPFL.people.getSciperInPath();
      if (sciper) {
        refinedEPFL.people.addSciperAfterName(sciper);
      }
    }
  }
};
