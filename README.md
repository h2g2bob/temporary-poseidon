Temporary Poseidon
==================

Messing about with high level apis for firefox extensions
---------------------------------------------------------

This is a test for using [high level apis](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs) in a firefox extension.

This means using [jpm](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation) (ie: node.js) to do the building.

```
ln -s ./node_modules/.bin/jpm
./jpm run -b ~/code/firefox/firefox
```
