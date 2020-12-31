import { writable } from "svelte/store";
import type { OptionsType } from "./types/App.types";
import { range } from "./utils";

export const optionsStore = writable<OptionsType>({
  players: range(0, 6).map((i) => ({ name: "", color: i })),
  gameMode: "default",
});
