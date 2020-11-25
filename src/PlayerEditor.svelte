<script lang="ts">
  import { optionsStore } from "./stores";
  import type { OptionsType } from "./types/App.types";

  import Button from "./Button.svelte";
  import Input from "./Input.svelte";

  function addPlayer() {
    if ($optionsStore.players.length >= 10) {
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
</style>

<div class="col">
  <Button center on:click={addPlayer}>Add</Button>
  {#each $optionsStore.players as { name }, i (i)}
    <div class="row">
      <Input small bind:value={name} />
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
