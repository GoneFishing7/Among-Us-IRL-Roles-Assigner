export function playSound(sound: "revealSound") {
  const audio = new Audio(`audio/${sound}.mp3`);
  audio.play();
}
