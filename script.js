const bd = "<header id=\"title\"><h1>Markdown Previewer</h1></header><section id=\"tab\"><section class=\"row\"><section class=\"col\"><header><h3>Markdown</h3></header><textarea id=\"editor\"></textarea><section class=\"btn\"><button id=\"reset\">Reset</button><button id=\"big\">Bigger</button></section></section><section class=\"col\"><header><h3>Previewer</h3></header><div id=\"preview\"></div></section></section></section><footer>Made by <a href=\"https://www.linkedin.com/in/maciej-browarski\" target=\"_blank\">Maciej Browarski</a></footer>";
document.body.innerHTML = bd;

$(document).ready(function() {
	let btn = 0;
	$("#big").click(function() {
		if (btn == 0){
			$(".row").css({"width": "100%"});
			$("#big").text("Smaller");
			btn++;
			}
		else{
			$(".row").css({"width": "66%"});
			$("#big").text("Bigger");
			btn--;
			}
	});
});

document.getElementById("editor").value = "# H1 size," + "\n---\n" + "## H2 size," + "\n" + "[links](https://github.com/coder36459)" + "\n" + "```" + "\n" + "function inline() {\ncode\n}" + "\n" + "```" + "\n" + "`<b></b>` a code block," + "\n" + "- a list item," + "\n" + "  - a list item," + "\n" + "  - a list item," + "\n" + "- a list item," + "\n" + "  - a list item," + "\n" + "  - a list item," + "\n\n" + "> a blockquote," + "\n\n" + "![img](image.jpg)" + "\n\n" + "**bolded** text." + "\n";
const a = document.getElementById("editor");
const b = document.getElementById("preview");
marked.setOptions( {
	breaks: true
	});
b.innerHTML = marked.parse(a.value);
a.oninput = function () {
	b.innerHTML = marked.parse(a.value);
	}
document.getElementById("reset").onclick = function () {
	if (a.value !== "") {
		a.value = "";
		b.innerHTML = "";
	}
	};
