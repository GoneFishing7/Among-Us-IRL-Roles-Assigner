export type AppModeType = "options" | "reveal";
export type GameModeType = "default";
export type Player = string;
export type OptionsType = {
  gameMode?: GameModeType;
  players?: Player[];
};
