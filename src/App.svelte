<script lang="ts">
  import type { AppModeType, OptionsType } from "./types/App.types";
  import Options from "./Options.svelte";
  import Reveal from "./Reveal.svelte";

  let mode: AppModeType = "options";
  let options: OptionsType = {};

  function handleOptionsSubmit(event) {
    options = event.detail;
    mode = "reveal";
  }
</script>

<style>
</style>

<main>
  {#if mode === 'options'}
    <Options on:submit={handleOptionsSubmit} />
  {:else}
    <Reveal {options} />
  {/if}
</main>
