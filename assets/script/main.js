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
        - ma zmienną audio dopasowuje sciezke dzwiekowa do kliknietego klawisza
        - jesli nie ma audio stopuje dzialanie
        - dodaje klase playing do klaiwsza
3. do kazdego klawisza event listener ktory nasluchuje konca transition i odpala funkcje removeTransition();
4. removeTransition() 
        - nie uruchamia sie jesli tranzycja nie dotyczy wlasciwosci 'transform'
        - usuwa klase 'playing' z klikniętego klawisza */
