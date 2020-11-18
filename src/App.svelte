<script lang="ts">
  import type { AppModeType } from "./types/App.types";
  import Options from "./Options.svelte";
  import Reveal from "./Reveal.svelte";

  let mode: AppModeType = "options";

  function handleOptionsSubmit() {
    mode = "reveal";
  }
</script>

<style>
</style>

<main>
  {#if mode === 'options'}
    <Options on:submit={handleOptionsSubmit} />
  {:else}
    <Reveal />
  {/if}
</main>
