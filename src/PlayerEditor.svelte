<script lang="ts">
  import { optionsStore } from "./stores";
  import type { OptionsType } from "./types/App.types";

  import Button from "./Button.svelte";
  import Input from "./Input.svelte";
  import ColorChooser from "./ColorChooser.svelte";
  import { colors, range } from "./utils";

  function addPlayer() {
    if ($optionsStore.players.length >= 10) {
      return;
    }
    optionsStore.update(
      (old: OptionsType): OptionsType => {
        return {
          ...old,
          players: [...old.players, { name: "", color: getUnusedColor() || 0 }],
        };
      }
    );
  }

  function removePlayer(playerIndex) {
    if ($optionsStore.players.length <= 3) {
      return;
    }
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

  function getUnusedColor() {
    return getAllUnusedColors()?.[0] || 0;
  }

  function getNextUnusedColor(start: number) {
    return getAllUnusedColors()[
      [...getAllUnusedColors(), start].sort((a, b) => a - b).indexOf(start) %
        getAllUnusedColors().length
    ];
  }

  function getAllUnusedColors() {
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
    margin-top: 10px;
  }
</style>

<div class="col">
  <Button center smallCursive on:click={addPlayer}>Add Player</Button>
  {#each $optionsStore.players as player, i (i)}
    <div class="row">
      <Input small bind:value={player.name} />
      <ColorChooser
        color={player.color}
        on:updateColor={() => {
          updatePlayerColor(i);
        }} />
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
