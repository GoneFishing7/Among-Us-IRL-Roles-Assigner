<script lang="ts">
  import { optionsStore } from "./stores";
  import type { OptionsType } from "./types/App.types";

  function addPlayer() {
    if ($optionsStore.players.length >= 20) {
      return;
    }
    optionsStore.update((old: OptionsType) => {
      return {
        ...old,
        players: [...old.players, { name: "" }],
      };
    });
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

  $: console.log($optionsStore);
</script>

<style>
  div.row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.col {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  div.col > :global(*) {
    margin-top: 10px;
  }
  button.remove-button {
    border: none;
    font-size: 24px;
    background-color: transparent;
  }
  button.remove-button:hover {
    color: rgb(0, 173, 0);
  }
  button.remove-button:focus {
    outline: auto;
  }
  button.add-player-button {
    width: fit-content;
    margin: 0 auto;
  }
</style>

<div class="col">
  <button class="add-player-button large" on:click={addPlayer}>Add</button>
  {#each $optionsStore.players as { name }, i (i)}
    <div class="row">
      <input type="text" bind:value={name} />
      <button
        on:click={() => {
          removePlayer(i);
        }}
        class="remove-button">X</button>
    </div>
  {/each}
</div>
