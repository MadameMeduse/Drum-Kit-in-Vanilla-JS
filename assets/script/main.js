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
