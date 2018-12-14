'use strict';

function saveOptions () {
  var theme = document.getElementById('theme').value;
  chrome.storage.local.set({
    colorTheme: theme
  }, function () {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

function restoreOptions () {
  chrome.storage.local.get({
    colorTheme: 'epfl'
  }, function (items) {
    document.getElementById('theme').value = items.colorTheme;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
