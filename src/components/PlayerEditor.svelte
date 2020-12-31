<script lang="ts">
  import { optionsStore } from "../stores";
  import type { OptionsType } from "../types/App.types";

  import Button from "./basicComponents/Button.svelte";
  import Input from "./basicComponents/Input.svelte";
  import ColorChooser from "./ColorChooser.svelte";
  import { colors, range } from "../utils";

  function addPlayer() {
    // Make sure we're not already at the max
    if ($optionsStore.players.length >= 10) {
      return;
    }
    // Update the options store with a new player
    optionsStore.update(
      (old: OptionsType): OptionsType => {
        return {
          ...old,
          players: [...old.players, { name: "", color: getUnusedColor() || 0 }],
        };
      }
    );
  }

  // Remove player at index
  function removePlayer(playerIndex) {
    // Make sure we're not at the minimum
    if ($optionsStore.players.length <= 3) {
      return;
    }
    // Update options store without chosen player
    optionsStore.update((old: OptionsType) => {
      return {
        ...old,
        players: [
          ...old.players.slice(0, playerIndex),
          ...old.players.slice(playerIndex + 1),
        ],
      };
    });
  }

  // Update player color at index
  function updatePlayerColor(playerIndex) {
    optionsStore.update((old: OptionsType) => {
      return {
        ...old,
        players: [
          ...old.players.slice(0, playerIndex),
          {
            ...old.players[playerIndex],
            color:
              getAllUnusedColors().length > 2
                ? getNextUnusedColor(old.players[playerIndex].color)
                : old.players[playerIndex].color,
          },
          ...old.players.slice(playerIndex + 1),
        ],
      };
    });
  }

  // Get the first unused color
  function getUnusedColor() {
    return getAllUnusedColors()?.[0] || 0;
  }

  // Function to get next unused color after start
  function getNextUnusedColor(start: number) {
    // Get the next unused color, starting from `start`

    // First get all unused colors, including the starting number, just to find the index easier
    const unusedColorsIncludingStart = [...getAllUnusedColors(), start].sort(
      (a, b) => a - b
    );

    // Calculate the next unused color
    let nextUnusedColor =
      // Take the unused colors, including start, and the one after start,
      // but wrap it around.
      unusedColorsIncludingStart[
        (unusedColorsIncludingStart.indexOf(start) + 1) %
          (unusedColorsIncludingStart.length - 1)
      ];
    return nextUnusedColor;
  }

  // Function to get ALL unused colors
  function getAllUnusedColors() {
    // Go through each number which represents each color, and filter
    // out the ones which are currently in use.
    return range(0, colors.length).filter(
      (c) => !$optionsStore.players.map((player) => player.color).includes(c)
    );
  }
</script>

<style>
  div.row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.row > :global(*) {
    margin: 5px;
  }

  div.col {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  div.col > :global(*) {
    margin-top: 4px;
  }
</style>

<div class="col">
  <!-- Add player button -->
  <Button center smallCursive on:click={addPlayer}>Add Player</Button>
  <!-- Render a row for each player -->
  {#each $optionsStore.players as player, i (i)}
    <div class="row">
      <!-- Player input -->
      <Input small bind:value={player.name} />
      <!-- Color chooser -->
      <ColorChooser
        color={player.color}
        on:updateColor={() => {
          updatePlayerColor(i);
        }} />
      <!-- Remove player button -->
      <Button
        on:click={() => {
          removePlayer(i);
        }}
        noOutline
        smallCursive>
        X
      </Button>
    </div>
  {/each}
</div>
