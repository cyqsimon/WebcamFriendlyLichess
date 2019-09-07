# Webcam Friendly Lichess
![TamperMonkey v4.8](https://img.shields.io/badge/tamperMonkey-v4.8-brightgreen.svg) ![Chrome x64 v76.0](https://img.shields.io/badge/chrome%20x64-v76.0-brightgreen.svg) [![Github Repo](https://img.shields.io/badge/Github%20Repo--lightgrey?style=social&logo=github)](https://github.com/cyqsimon/WebcamFriendlyLichess)

A userscript to make Lichess more webcam-friendly for streamers.

## 🛒 Features

This script moves page elements on the right-hand-side of the board upwards to make space for a webcam.

Currently this script works for games in play and analysis board. If you want to see support for other pages (e.g. study, training) please raise an issue on Github to let me know. I will implement them if there is demand.

### Before

![Before](https://raw.githubusercontent.com/cyqsimon/WebcamFriendlyLichess/master/screenshots/game-pre.png)

### After

![After](https://raw.githubusercontent.com/cyqsimon/WebcamFriendlyLichess/master/screenshots/game-post.png)

## 💽 Installation Guide

Please first install a userscript manager for your browser. Tampermonkey is recommended.

[Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/)

[Tampermonkey for Firefox](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/)

Then go to Dashboard -> Utilities. Paste the following link in the URL textbox and import.

https://raw.githubusercontent.com/cyqsimon/WebcamFriendlyLichess/master/script.js

## 🧩 Compatibility

This script is developed and tested on Chrome x64 v76.0 running on Windows 10 Professional. Although not tested, it should work on any modern browser that supports user script injection.
