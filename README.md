# Puzzlefy
Generate a puzzle from any image. Made with [p5.js](https://p5js.org/).

![](demo.gif)

|<img src=https://github.com/Rush/Font-Awesome-SVG-PNG/blob/master/black/svg/globe.svg height=14> [Website](https://puzzlefy.netlify.app) | <img src=https://github.com/Rush/Font-Awesome-SVG-PNG/blob/master/black/svg/twitter.svg height=14> [Twitter](https://twitter.com/Puzzle_fy)|
|---|---|

### Usage
`https://puzzlefy.netlify.app/?image=<url>&cols=<number>&rows=<number>`
- **image**: link to an image url `.jpg`, `.png`... and also certain `.gif`s!
- **cols**: width of puzzle in pieces
- **rows**: height of puzzle in pieces

> If the **cols** and **rows** parameters are not specified, the aspect ratio of the image will be used instead

### Examples
- [Abstract processing sketch capture](https://puzzlefy.netlify.app/?image=https://media.discordapp.net/attachments/216616558301151232/902992543376101386/sdfgh3453634.png&cols=5&rows=4)
- [Obama prism](https://puzzlefy.netlify.app/?image=https://c.tenor.com/1g50P-G_JicAAAAC/obama-triangle.gif&cols=4&rows=4)

### Ideas
* `.gif` cors origin fix
* `.gif` load time improvement
* Dynamic loading screen
* Draw placed pieces in separate graphics for performance
* Random image if `image=` url parameter is not set
* Auto solve functionality
* Reset functionality
* Large puzzles do not fully utilize the screen space
* Puzzles with the same exact visuals can be interchanged (usually solid colors)
* Background clip area vs free pieces clip setting
* Customize puzzle pattern (jigsaw shapes and in/out directions)
* Customize settings (feedback when invalid placed, allow preview, ...)
