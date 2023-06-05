let optionsButtons = document.querySelectorAll(".option-button")
let advOptionButtons = document.querySelectorAll(".adv-option-button")
let fontName = document.getElementById("fontName")
let fontSize = document.getElementById("fontSize")
let writingArea = document.getElementById("textInput")
let linkButton = document.getElementById("createLink")
let alignButtons = document.querySelectorAll(".align")
let spacingButtons = document.querySelectorAll(".spacing")
let formatButtons = document.querySelectorAll(".format")
let scriptButtons = document.querySelectorAll(".script")

// List of fonts
let fontList = [
	"Arial",
	"Verdana",
	"Times New Roman",
	"Garamond",
	"Georgia",
	"Courier New",
	"cursive",
]

// Initial settings
const initializer = () => {
	// function calls for hightlighting buttons
	// No highlights for link, unlink, lists, undo, redo since they are one time operation
	highlighter(alignButtons, true)
	highlighter(spacingButtons, true)
	highlighter(formatButtons, false)
	highlighter(scriptButtons, true)
}

// Highlight clicked button
const highlighter = (classname, needsRemoval) => {
	classname.forEach((button) => {
		button.addEventListener("click", () => {
			// needsRemoval = true means only one button should be highligh and other would be normal
			if (needsRemoval) {
				let alreadyActive = false

				// if currently clicked button is already active
				if (button.classList.contains("active")) {
					alreadyActive = true
				}

				highlighterRemover(classname)
				if (!alreadyActive) {
					// highlight clicked button
					button.classList.add("active")
				}
			} else {
				// if other buttons can be highlighted
				button.classList.toggle("active")
			}
		})
	})
}

const highlighterRemover = (classname) => {
	classname.forEach((button) => {
		button.classList.remove("active")
	})
}
window.onload = initializer()
