type possibleSounds = "revealSound" | "buttonSound";
export function playSound(sound: possibleSounds) {
  const audio = new Audio(`audio/${sound}.mp3`);
  audio.play();
}
