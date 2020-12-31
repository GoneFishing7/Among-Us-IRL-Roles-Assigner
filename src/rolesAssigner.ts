import type { Player } from "./types/App.types";
import { range, getRandom } from "./utils";

export function assignRoles(players: Player[], mode = "default"): Player[] {
  let defaultRole;
  let roles: { [role: string]: number[] };
  // For now, only default mode will be implemented
  if (mode === "default") {
    // Consistent with 2 impostor Among Us game
    const numImposters = players.length >= 7 ? 2 : 1;
    defaultRole = "crewmate";
    // Roles is in form {[rolename]: [indexes]}
    roles = {
      impostor: getRandom(range(0, players.length - 1), numImposters),
    };
    return players.map(
      (player, index): Player => {
        return {
          ...player,
          role:
            // For each role
            Object.entries(roles)
              // Filter out each role that doesn't have an index that matches `index`
              .filter(([possibleRole, indexesForPossibleRole]) =>
                indexesForPossibleRole.includes(index)
              )?.[0]?.[0] || defaultRole,
        };
      }
    );
  }
  // Fallback
  return [];
}
