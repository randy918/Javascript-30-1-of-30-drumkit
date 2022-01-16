window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);

  if (!audio) return;
  audio.play();

  console.log(audio);
});
