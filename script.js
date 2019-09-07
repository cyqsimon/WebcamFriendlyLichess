// ==UserScript==
// @name         Webcam Friendly Lichess
// @namespace    https://github.com/cyqsimon/WebcamFriendlyLichess
// @version      1.0.1
// @icon         https://raw.githubusercontent.com/cyqsimon/WebcamFriendlyLichess/master/icon.ico
// @description  This is a simple script that moves the right-hand-side panel upwards to make space for your webcam.
// @author       cyqsimon
// @license      MIT
// @supportURL   https://github.com/cyqsimon/WebcamFriendlyLichess
// @updateURL    https://raw.githubusercontent.com/cyqsimon/WebcamFriendlyLichess/master/script.js
// @downloadURL  https://raw.githubusercontent.com/cyqsimon/WebcamFriendlyLichess/master/script.js
// @match        https://lichess.org/*
// ==/UserScript==

(function() {
    "use strict";

    // Playing Page
    if(document.getElementsByClassName("round")[0] != null)
    {
        // Remove top padding
        addGlobalStyle(" @media (min-width: 800px), (orientation: landscape) { .round__app { grid-template-rows: 0fr auto auto min-content auto auto auto auto min-content auto auto 1fr !important; } } ");

        // Align give time to left
        addGlobalStyle(" @media (min-width: 800px), (orientation: landscape) { .rclock { justify-content: start; } } ");

        // Compact material indicator
        addGlobalStyle(" .material-top { grid-area: clock-top !important; justify-self: end; } ");
        addGlobalStyle(" .material-bottom { grid-area: clock-bot !important; justify-self: end; } ");
    }

    // Analysis Page
    if(document.getElementsByClassName("analyse")[0] != null)
    {
        var analyse = document.getElementsByClassName("analyse")[0];

        // Create container
        var spacerContainer = document.createElement("div");
        var containerAttrib = document.createAttribute("class");
        containerAttrib.value = "spacer_container";
        spacerContainer.setAttributeNode(containerAttrib);
        addGlobalStyle(" .spacer_container { grid-area: tools; } ");
        analyse.appendChild(spacerContainer);

        // Move RHS panels
        var tools = analyse.removeChild(analyse.getElementsByClassName("analyse__tools")[0]);
        var controls = analyse.removeChild(analyse.getElementsByClassName("analyse__controls")[0]);
        spacerContainer.appendChild(tools);
        spacerContainer.appendChild(controls);

        // Restrict move panel height
        addGlobalStyle(".analyse__tools { height: 50% !important; }");
    }
})();

// CSS injection code by mb
// https://somethingididnotknow.wordpress.com/2013/07/01/change-page-styles-with-greasemonkeytampermonkey/
function addGlobalStyle(css)
{
    var head, style;
    head = document.getElementsByTagName("head")[0];
    if (!head) { return; }
    style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = css;
    head.appendChild(style);
}
