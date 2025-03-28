/*
 * AUTHOR: toydotgame
 * CREATED ON: 2024-01-01
 * Code to add an image popup modal on click. 
 */

document.querySelector("#content").innerHTML += '<div id="modaldim" style="display:none;"></div>';
let overlay = document.querySelector("#modaldim");
overlay.addEventListener("click", onClick);

let imgs = document.querySelectorAll("#content img");
for(let i = 0; i < imgs.length; i++)
	imgs[i].addEventListener("click", onClick);

overlay.innerHTML = '<img id="modalimg">';
let img = document.querySelector("#modalimg");

function onClick(e) {
	img.src = e.target.src;
	if(overlay.style.display == "none") {
		overlay.style.display = "block";
		return;
	}
	overlay.style.display = "none";
}
