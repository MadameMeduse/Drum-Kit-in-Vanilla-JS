console.log('it works!');
const keys = document.querySelector('.keys');
const key = keys.querySelectorAll('.key');

window.addEventListener('keydown', function(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}]"`);
	if (!audio) return;
	audio.play();
});
// function handleKeyDown(e) {
// 	console.log(e.keyCode);
// }
// key.forEach((key) => {
// 	key.addEventListener('keydown', handleKeyDown);
// });
