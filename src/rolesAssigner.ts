import type { Player } from "./types/App.types";

export function assignRoles(players: Player[], mode = "default"): Player[] {
  let defaultRole;
  if (mode === "default") {
    let imposter = Math.floor(Math.random() * players.length);
    defaultRole = "crewmate";
    return players.map((player, index) => {
      return {
        name: player.name,
        role: index === imposter ? "imposter" : defaultRole,
      };
    });
  }
  return [];
}
