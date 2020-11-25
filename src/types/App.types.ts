export type AppModeType = "options" | "reveal";
export type GameModeType = "default";
export type PossibleRoles = "impostor" | "crewmate";
export type Player = {
  name: string;
  role?: PossibleRoles;
};
export type OptionsType = {
  gameMode?: GameModeType;
  players?: Player[];
};
