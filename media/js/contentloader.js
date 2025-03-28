/*
 * AUTHOR: toydotgame
 * CREATED ON: 2025-03-28
 * Adaptation of toydotgame.net's contentloader.js
 */

document.querySelector("#nav").innerHTML = `
<img src="/media/images/bg_stars.gif" id="navlogo">
<div id="navspacer">|</div>
<a class="navbutton" href="/">Home</a>
<a class="navbutton" href="#">Button 2</a>
<a class="navbutton" href="#">Button 3</a>
<a class="navbutton" href="#">Button 4</a>

`;

import {} from "/media/js/imgmodal.js";

var badges = `
<a href="https://toydotgame.net/"><img src="/media/images/badges/toydotgame.gif" width="88"></a>
`;
//export { badges };

var footer = `
<br>
<p>Website ⓒ 2025 starryteacat</p>
`;

document.querySelector("#footer").innerHTML = badges + footer;
