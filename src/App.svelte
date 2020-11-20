<script lang="ts">
  import type { AppModeType, OptionsType } from "./types/App.types";
  import Options from "./Options.svelte";
  import Reveal from "./Reveal.svelte";

  let mode: AppModeType = "options";
  let options: OptionsType = {};
</script>

<style>
  :global(html),
  :global(body) {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  main {
    height: 100%;
  }
  main :global(*) {
    font-size: 32px;
  }
  main > :global(button) {
    background-color: transparent;
  }
  :global(input),
  :global(button) {
    background: black;
    color: white;
    font-family: arial;
    border-radius: 5px;
    border-width: 2px;
    border-style: solid;
    border-color: white;
    cursor: default;
  }
  :global(input) {
    border-width: 4px;
    border-style: double;
  }
  :global(input:focus),
  :global(button:focus) {
    outline: none;
    border-color: blue;
  }
  :global(button:hover) {
    cursor: pointer;
  }
</style>

<main>
  {#if mode === 'options'}
    <Options
      initialOptions={{}}
      on:submit={(event) => {
        options = event.detail;
        mode = 'reveal';
      }} />
  {:else}
    <Reveal
      {options}
      on:finished={() => {
        mode = 'options';
      }} />
  {/if}
</main>
