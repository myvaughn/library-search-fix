// ==UserScript==
// @name         Yale Library Quicksearch Accessibility Fix
// @namespace    https://github.com/myvaughn/library-search-fix
// @version      1.01
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
  const pageH1 = document.querySelector(".page-title");
  pageH1.innerHTML = pageH1.innerHTML + " - with fixes";

  // Add heading attributes to divs with class category_title
  const categoryTitles = document.querySelectorAll(".category_title");
  categoryTitles.forEach((element) => {
    element.setAttribute("role", "heading");
    element.setAttribute("aria-level", "2");
  });
}