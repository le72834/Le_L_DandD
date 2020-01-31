(() => {
	// set up the puzzle pieces and boards

	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
				puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
				gameBoard = document.querySelector('.puzzle-board');
	const pieceName =["topLeft", "topRight", "bottomLeft", "bottomRight"];
	function changeImageSet () {
		//change all the image elements on the page -> draggable image sources,

		//change the image elements on the left to match the seletecd puzzle
		pieceName.forEach((piece, index) => puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg` );


		//and set the drop zone background image on the puzzle the user selects
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
		//debugger;
	}

	//add event handling here




	//click on the bottom buttons to change the puzzle image we're woking with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet))
	//call the function and pass in the first nav button as a reference
// research call, apply and blind -> look at MDN
	changeImageSet.call(puzzleButtons[0]);
})();
