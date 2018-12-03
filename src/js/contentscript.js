'use strict';

function isWeb2018 () {
  var header = document.getElementsByTagName('header');
  if (header[0]) {
    var listClass = header[0].classList;
    return listClass.contains('header');
  }
  return false;
}

function applyTheme () {
  var link = document.createElement('link');
  link.href = chrome.extension.getURL(
    'css/themes/epfl.css'
  );
  link.type = 'text/css';
  link.rel = 'stylesheet';
  document.getElementsByTagName('head')[0].appendChild(link);
}

(function () {
  // ApplyTheme after document load if layout is Web2018
  if (isWeb2018()) {
    applyTheme();
  }
})();
