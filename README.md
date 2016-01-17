This is a test for using [high level apis](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs),
which means using [jpm](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation) (ie: node.js)
to do the building.

This test extenstion will add a toolbar button using the high-level apis.

```
ln -s ./node_modules/.bin/jpm
./jpm run -b ~/code/firefox/firefox
```
