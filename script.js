// ==UserScript==
// @name         Webcam Friendly Lichess
// @namespace    https://github.com/cyqsimon/WebcamFriendlyLichess
// @version      1.0.3.8
// @icon         https://github.com/cyqsimon/WebcamFriendlyLichess/raw/master/icon.ico
// @description  This is a simple script that moves the right-hand-side panel upwards to make space for your webcam.
// @author       cyqsimon
// @license      MIT
// @supportURL   https://github.com/cyqsimon/WebcamFriendlyLichess
// @updateURL    https://github.com/cyqsimon/WebcamFriendlyLichess/raw/master/script.js
// @downloadURL  https://github.com/cyqsimon/WebcamFriendlyLichess/raw/master/script.js
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

        // Restrict move panel height
        addGlobalStyle(" .analyse__tools { height: 55% !important; }");

        // Move RHS panels
        var analyseTools = analyse.getElementsByClassName("analyse__tools")[0];
        var analyseControls = analyse.removeChild(analyse.getElementsByClassName("analyse__controls")[0]);
        analyseTools.appendChild(analyseControls);
    }

    // Puzzle Page
    if(document.getElementsByClassName("puzzle")[0] != null)
    {
        var puzzle = document.getElementsByTagName("main")[0];

        // Restrict move panel height
        addGlobalStyle(" .puzzle__tools { height: 55% !important; }");

        // Move RHS panels
        var puzzleTools = puzzle.getElementsByClassName("puzzle__tools")[0];
        var puzzleControls = puzzle.removeChild(puzzle.getElementsByClassName("puzzle__controls")[0]);
        puzzleTools.appendChild(puzzleControls);
        addGlobalStyle(" .puzzle__controls { margin-top: 0px !important; } ");

        // Horizontally arrange buttons
        addGlobalStyle(" @media (min-height: 600px) { .puzzle__feedback { flex: 0 40 11rem !important; display: grid; grid-template-rows: min-content min-content; grid-template-columns: 5fr 3fr; } } ");

        // Compact continue button
        addGlobalStyle(" @media (orientation: landscape) { .puzzle__feedback.after .continue { display: grid; grid-template-rows: min-content min-content; justify-items: center; } } ");
        var continueObserver = new MutationObserver(mutations => mutations.forEach(mutation =>
        {
            if(mutation.addedNodes.length != 0 && mutation.addedNodes[0].matches(".puzzle__feedback.after"))
            {
                var puzzleContinue = puzzleTools.getElementsByClassName("continue")[0];
                var puzzleContinueText = Array.from(puzzleContinue.childNodes).filter(node => node.nodeType == Node.TEXT_NODE)[0];
                puzzleContinueText.data = "Continue";
            }
        }));
        continueObserver.observe(puzzleTools, { childList: true });

        // Fix vote popup
        addGlobalStyle(" .puzzle__feedback.after .vote_call { grid-column: 1 / 3; text-align: left; } ");
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
