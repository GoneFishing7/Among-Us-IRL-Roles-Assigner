import type { Player } from "./types/App.types";
import { range, getRandom } from "./utils";

export function assignRoles(players: Player[], mode = "default"): Player[] {
  let defaultRole;
  let roles: { [role: string]: number[] };
  if (mode === "default") {
    const numImposters = players.length >= 7 ? 2 : 1;
    defaultRole = "crewmate";
    roles = {
      impostor: getRandom(range(0, players.length - 1), numImposters),
    };
    return players.map(
      (player, index): Player => {
        return {
          ...player,
          role:
            Object.entries(
              roles
            ).filter(([possibleRole, indexesForPossibleRole]) =>
              indexesForPossibleRole.includes(index)
            )?.[0]?.[0] || defaultRole,
        };
      }
    );
  }
  return [];
}
