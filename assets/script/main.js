const keys = Array.from(document.querySelectorAll('.key'));

function handleKeyDown(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) return; //stop the function if there is no audio

	audio.currentTime = 0; //rewind to the start
	audio.play();
	key.classList.add('playing');
}

keys.forEach((key) => {
	key.addEventListener('transitionend', removeTransition);
});

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	e.currentTarget.classList.remove('playing');
}
window.addEventListener('keydown', handleKeyDown);

/* Logic

1. event listener na window który odpala funkcje handleKeyDown;
2. funkcja handleKeyDown() 
        - ma zmienną audio dopasowuje sciezkę dzwiękową do klikniętego klawisza
        - jeśli nie ma audio stopuje dzialanie
        - dodaje klasę playing do klawisza
3. do każdego klawisza event listener który nasłuchuje końca transition i odpala funkcje removeTransition();
4. removeTransition() 
        - nie uruchamia się jeśli tranzycja nie dotyczy właściwości 'transform'
        - usuwa klasę 'playing' z klikniętego klawisza */
