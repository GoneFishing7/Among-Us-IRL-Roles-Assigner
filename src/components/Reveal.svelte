<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { assignRoles } from "../rolesAssigner";
  import { optionsStore } from "../stores";

  import RevealSinglePlayer from "./RevealSinglePlayer.svelte";

  let playersWithRoles = assignRoles($optionsStore.players, "default");

  const dispatch = createEventDispatcher();

  // Revealing means in the process of showing people their roles,
  // postreveal means finished revealing, and loading main menu (usually too fast to see).
  let mode: "revealing" | "postreveal" = "revealing";

  // Index of player who is currently being shown their role
  let currentPlayerRevealing = 0;

  $: if (mode === "postreveal") {
    dispatch("finished");
  }
</script>

<style>
  div {
    height: 100%;
    text-align: center;
  }
  div > * {
    margin-top: 10px;
  }
</style>

<div>
  {#if mode === 'revealing'}
    <RevealSinglePlayer
      {...playersWithRoles[currentPlayerRevealing]}
      others={playersWithRoles.filter((player) => player.color !== playersWithRoles[currentPlayerRevealing].color)}
      on:finished={() => {
        if (currentPlayerRevealing >= playersWithRoles.length - 1) {
          mode = 'postreveal';
          return;
        }
        currentPlayerRevealing++;
      }} />
  {:else}
    <p>Loading...</p>
  {/if}
</div>
