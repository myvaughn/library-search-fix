// ==UserScript==
// @name         Yale Library Quicksearch Accessibility Fix
// @namespace    https://github.com/myvaughn/library-search-fix
// @version      1.00
// @updateURL    https://raw.githubusercontent.com/myvaughn/library-search-fix/main/quicksearchFix.user.js
// @downloadURL  https://raw.githubusercontent.com/myvaughn/library-search-fix/main/quicksearchFix.user.js
// @description  Fixes accessibility issues in Yale Library Quicksearch (https://search.library.yale.edu)
// @author       Michael Vaughn <michael.vaughn@yale.edu>
// @match        https://search.library.yale.edu/*
// ==/UserScript==

// Adapted from https://github.com/terrill/whova-a11y-fix/blob/main/WhovaA11yFix.user.js - by Terrill Thompson of UW

'use strict';

(function () {

  // document load may already be complete before this userscript is executed
  if (document.readyState == 'complete') {
    // this might be a lie. Better give page a moment to fully load.
    setTimeout(function () {
      init();
    }, 2000);
  }
  else {
    // Wait until page has loaded
    window.addEventListener('load', function () {
      // Content continues to be added after load is fired
      // Better wait a moment.
      setTimeout(function () {
        init();
      }, 2000);
    });
  }
})();

function init() {
  // Modify page h1 to reflect user script in place
  const pageTitle = document.querySelector(".page-title");
  pageTitle.innerHTML = "Quicksearch - with fixes";

  // Change divs with class category_title to H2s
  // const categoryTitles = document.querySelectorAll(".category_title");
  // categoryTitles.forEach(
  //   var newTitle = document.createElement('h2'); //not correct syntax
  //   element => element.
  // )
}