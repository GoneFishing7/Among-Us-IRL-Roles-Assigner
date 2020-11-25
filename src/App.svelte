<script lang="ts">
  import type { AppModeType } from "./types/App.types";
  import Options from "./Options.svelte";
  import Reveal from "./Reveal.svelte";

  let mode: AppModeType = "options";
</script>

<style>
  :global(html),
  :global(body) {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  main {
    height: 100%;
  }
  main :global(*) {
    color: white;

    font-family: "In your face, Joffrey!", cursive;
    font-size: 48px;
  }
</style>

<main>
  {#if mode === 'options'}
    <Options
      on:submit={() => {
        mode = 'reveal';
      }} />
  {:else}
    <Reveal
      on:finished={() => {
        mode = 'options';
      }} />
  {/if}
</main>
