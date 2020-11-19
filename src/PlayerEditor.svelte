<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import type { Player } from "./types/App.types";

  const dispatch = createEventDispatcher();

  let players: Player[] = Array(5)
    .fill({ name: "Player" })
    .map(({ name }, i) => {
      return { name: name + " #" + (i + 1) };
    });

  $: updatePlayers(players);

  onMount(async () => {
    updatePlayers(players);
  });

  function addPlayer() {
    players =
      players.length > 20
        ? players
        : [...players, { name: `Player #${players.length + 1}` }];
  }

  function removePlayer(index: number) {
    players =
      players.length < 4
        ? players
        : [...players.slice(0, index), ...players.slice(index + 1)];
  }

  function updatePlayers(players) {
    dispatch("updatePlayers", players);
  }
</script>

<style>
</style>

<button on:click={addPlayer}>Add</button>
{#each players as { name }, i}
  <p>
    <input placeholder={name} type="text" bind:value={name} />
    <button
      on:click={() => {
        removePlayer(i);
      }}>❌</button>
  </p>
{/each}
