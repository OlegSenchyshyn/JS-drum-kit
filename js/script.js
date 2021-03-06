function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); //selecting an audio element
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); //selecting the corresponding key (.key -> html class="key")
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; //revind to the start
  audio.play();
  key.classList.add('playing'); // JQUERY -> key.addClass('playing')
}
function removeTransition(event) {
  if (event.propertyName !== 'transform') return; // skip if it`s not a transform
  event.target.classList.remove('playing');
}
const keys = document.querySelectorAll('.key'); // or const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //each key gets an EventListener added to it('transitionend'), when transition is ended, we're removing it

window.addEventListener('keydown', playSound);
