<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { assignRoles } from "../rolesAssigner";
  import { optionsStore } from "../stores";

  import RevealSinglePlayer from "./RevealSinglePlayer.svelte";

  let playersWithRoles = assignRoles($optionsStore.players, "default");

  const dispatch = createEventDispatcher();

  let mode: "revealing" | "postreveal" = "revealing";
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
      othersColors={playersWithRoles
        .filter(
          (player) =>
            player.color !== playersWithRoles[currentPlayerRevealing].color
        )
        .map((player) => player.color)}
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
