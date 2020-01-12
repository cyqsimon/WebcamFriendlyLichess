# Webcam Friendly Lichess
![Tampermonkey v4.8](https://img.shields.io/badge/Tampermonkey-v4.8-brightgreen.svg) ![Chrome x64 v76.0](https://img.shields.io/badge/Chrome%20x64-v76.0-brightgreen.svg) [![Github Repo](https://img.shields.io/badge/Github%20Repo--lightgrey?style=social&logo=github)](https://github.com/cyqsimon/WebcamFriendlyLichess)

A userscript to make Lichess more webcam-friendly for streamers.

## 🛒 Features

This script moves page elements on the right-hand-side of the board upwards to make space for a webcam.

Currently this script works for games underway, analysis board, puzzles, and studies. If you want to see support for other pages, please raise an issue on Github to let me know. I will implement them if there is demand.

### Before

![Before](/screenshots/game-pre.png)

### After

![After](/screenshots/game-post.png)

## 💽 Installation Guide

Please first install a userscript manager for your browser. Tampermonkey is recommended.

[Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/)

[Tampermonkey for Firefox](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/)

Then go to Tampermonkey -> Dashboard -> Utilities. At the bottom find the URL section, paste the following link in the textbox and import.

https://github.com/cyqsimon/WebcamFriendlyLichess/raw/master/script.js

Confirm by clicking install.

And you're all set! Simply refresh Lichess and observe the effects.

## 🗑 Uninstallation

The script runs completely offline and stores no files locally. If you wish to uninstall, simply go to the dashboard of your userscript manager and remove.

## 🧩 Compatibility

This script is developed and tested on Chrome x64 v76.0 running on Windows 10 Professional. Although not tested on other platforms, it should work on any modern browser that supports user script injection.

## 🐞 Known Issues

Please do not use this script if you are using a very narrow screen (width < 800px, e.g. phones & tablets in portrait). This script rearranges some page elements in HTML code, which doesn't play well with Lichess' portrait layout.

Occasionally this script may be confused by Lichess embeds and mess them up. Unfortunately due to technical limitations a complete fix would be very difficult. Please disable the script in those rare cases.
