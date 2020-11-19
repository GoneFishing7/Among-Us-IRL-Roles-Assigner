<script lang="ts">
  import type { OptionsType } from "./types/App.types";

  import { assignRoles } from "./rolesAssigner";

  import RevealSinglePlayer from "./RevealSinglePlayer.svelte";

  export let options: OptionsType;
  $: optionsWithRoles = assignRoles(options.players, "default");

  let mode: "revealing" | "postreveal" = "revealing";
  let currentPlayerRevealing = 0;
</script>

<style>
</style>

{#if mode === 'revealing'}
  <RevealSinglePlayer
    name={optionsWithRoles[currentPlayerRevealing].name}
    role={optionsWithRoles[currentPlayerRevealing].role}
    on:finished={() => {
      if (currentPlayerRevealing >= optionsWithRoles.length - 1) {
        mode = 'postreveal';
        return;
      }
      currentPlayerRevealing++;
    }} />
{:else}
  <p>finished revealing</p>
{/if}
