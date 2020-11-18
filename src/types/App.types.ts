export type AppModeType = "options" | "reveal";
export type GameModeType = "default";
export type Player = string;
export type Options = {
  gameMode: GameModeType;
  players: Player[];
};
