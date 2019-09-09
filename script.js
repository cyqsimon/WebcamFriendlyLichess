// ==UserScript==
// @name         Webcam Friendly Lichess
// @namespace    https://github.com/cyqsimon/WebcamFriendlyLichess
// @version      1.0.3.12
// @icon         https://github.com/cyqsimon/WebcamFriendlyLichess/raw/master/icon.ico
// @description  This is a simple script that moves the right-hand-side panel upwards to make space for your webcam.
// @author       cyqsimon
// @license      MIT
// @supportURL   https://github.com/cyqsimon/WebcamFriendlyLichess
// @updateURL    https://github.com/cyqsimon/WebcamFriendlyLichess/raw/master/script.js
// @downloadURL  https://github.com/cyqsimon/WebcamFriendlyLichess/raw/master/script.js
// @match        https://lichess.org/*
// ==/UserScript==

var RHSPanelHeight = "55%";

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
        addGlobalStyle(` .analyse__tools { height: ${RHSPanelHeight} !important; } `);

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
        addGlobalStyle(` .puzzle__tools { height: ${RHSPanelHeight} !important; } `);

        // Move RHS panels
        var puzzleTools = puzzle.getElementsByClassName("puzzle__tools")[0];
        var puzzleControls = puzzle.removeChild(puzzle.getElementsByClassName("puzzle__controls")[0]);
        puzzleTools.appendChild(puzzleControls);
        addGlobalStyle(" .puzzle__controls { margin-top: 0px !important; } ");

        // Reduce feedback padding
        addGlobalStyle(" .puzzle__feedback:not(.after) { padding: 1em 1em !important; } ");

        // Center view solution button
        addGlobalStyle(".puzzle__feedback .view_solution { margin: auto !important; } ");

        // Prevent feedback panel grow and horizontally arrange buttons
        addGlobalStyle(" @media (min-height: 600px) { .puzzle__feedback { flex: 0 40 0rem !important; display: grid; grid-template-rows: min-content min-content; grid-template-columns: 5fr 3fr; } } ");

        // Set vote call grid location and alignment
        addGlobalStyle(" .puzzle__feedback.after .vote_call { grid-row: 1 / 2; grid-column: 1 / 3; text-align: left; } ");

        // Set success & vote grid location
        addGlobalStyle(" .puzzle__feedback.after .half-top { grid-row: 2 / 3; grid-column: 1 / 2; } ");

        // Correctly space success and vote
        addGlobalStyle(" .puzzle__feedback.after .complete { flex: 6 0 !important; } ");
        addGlobalStyle(" .puzzle__feedback.after .vote { flex: 2 0; } ");

        // Set continue button grid location and compact
        addGlobalStyle(" @media (orientation: landscape) { .puzzle__feedback.after .continue { grid-row: 2 / 3; grid-column: 2 / 3; display: grid; grid-template-rows: min-content min-content; justify-items: center; padding: 0px 5px !important; } } ");
        var continueObserver = new MutationObserver(mutations => mutations.forEach(mutation =>
        {
            if(mutation.addedNodes.length != 0 && mutation.addedNodes[0].matches(".puzzle__feedback.after"))
            {
                var puzzleContinue = puzzleTools.getElementsByClassName("continue")[0];

                puzzleContinue.children[0].setAttribute("style", "margin-left: 10px;");

                var puzzleContinueText = Array.from(puzzleContinue.childNodes).filter(node => node.nodeType == Node.TEXT_NODE)[0];
                puzzleContinueText.data = "Continue";
            }
        }));
        continueObserver.observe(puzzleTools, { childList: true });
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
