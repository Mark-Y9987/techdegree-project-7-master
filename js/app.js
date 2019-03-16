document.addEventListener('DOMContentLoaded', () => {
	const qwerty = document.getElementById('qwerty');
	const phrase = document.getElementById('phrase');
	const missed = 0;
	const startButton = document.querySelector('a');
	const ul = phrase.firstElementChild;

	const phrases = [
		'So say we all',
		'Time And Relative Dimension In Space',
		'Undomesticated equines could not keep me away',
		'These are not the Droids you are looking for',
		'There is nothing permanent except change',
		'A man can be destroyed but not defeated',
		'Learning never exhausts the mind',
		'There is no charm equal to tenderness of heart',
		'Being entirely honest with oneself is a good exercise',
		'Honesty is the first chapter in the book of wisdom',
		'Not all who wander are lost'
	];

	// Take a given array and split it's string into a new array of individual characters

	function getRandomPhraseAsArray(arr) {
		const rand = arr[Math.floor(Math.random() * arr.length)];
		const arrayOfCharacters = rand.split('');
		console.log(arrayOfCharacters);
		return arrayOfCharacters;
	}

	// Take the array and spit each word into a li and add it to the DOM

	function addPhraseToDisplay(arr) {
		for (let i = 0; i < arr.length; i++) {
			const char = arr[i];
			const li = document.createElement('li');
			li.textContent = char;
			if (li.textContent === ' ') {
				li.className = 'space';
			} else {
				li.className = 'letter';
			}
			ul.appendChild(li);
		}
	}

	// Check the user's button press against the given phrase. Reveal the letter if correct, return null if incorrect

	// function contains(array, element) {
	// 	for (let i = 0; i < array.length; i++) {
	// 		if (array[i] === element) {
	// 			return true;
	// 		}
	// 	}
	// 	return false;
	// }

	// function checkLetter(clickedButton) {
	// 	const letters = document.getElementsByClassName('letter');
	// 	const includes = letters.contains(letters, clickedButton);
	// 	console.log(includes);
	// 	if (includes) {
	// 		console.log('it worked');
	// 		// let matchedLetters = letters.filter(filterLetters);
	// 		// matchedLetters.className = 'show';
	// 		// return matchedLetters;
	// 	} else {
	// 		console.log('no match');
	// 	}
	// }

	// function checkLetter(clickedButton) {
	// 	const letters = document.getElementsByClassName('letter');
	// 	const matchedLetter = letters.filter(clickedButton);
	// 	console.log(letters);
	// 	console.log(matchedLetter);
	// }

	function checkLetter(clickedButton) {
		const letters = document.getElementsByClassName('letter');
		for (let i = 0; i < letters.length; i++) {
			if (clickedButton === letters[i].textContent.toLowerCase()) {
				letters[i].className = 'show';
				let matchedLetter = clickedButton.textContent;
			}
		}
	}

	// Hide the start screen when 'Start Game' is clicked

	startButton.addEventListener('click', () => {
		const startScreen = document.getElementById('overlay');
		if (startScreen.style.display === 'none') {
			startScreen.style.display = 'block';
		} else {
			startScreen.style.display = 'none';
		}
	});

	//  Randomly select an Array, then add the phrase from the array to the DOM

	const phraseArray = getRandomPhraseAsArray(phrases);
	addPhraseToDisplay(phraseArray);

	// Listen to the user's key presses

	qwerty.addEventListener('click', (e) => {
		const button = e.target.textContent;
		checkLetter(button);
	});
});
