(() => {
	// set up the puzzle pieces and boards

	const puzzleButtons = document.querySelectorAll('#buttonHolder img');

	function changeImageSet () {
		//change all the image elements on the page -> draggable image sources,
		//and set the drop zone background
		debugger;
	}

	//add event handling here




	//click on the bottom buttons to change the puzzle image we're woking with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet))

})();
