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

    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
  }
  main > :global(button) {
    background-color: transparent;
  }
  :global(input),
  :global(button) {
    background: black;
    border-radius: 5px;
    border-width: 3px;
    border-style: solid;
    border-color: white;
    cursor: default;
  }
  :global(button.large) {
    font-family: "In your face, Joffrey!", sans-serif;
    font-size: 74px;
  }
  :global(button.large:hover) {
    color: rgb(0, 173, 0);
  }
  :global(input) {
    border-width: 4px;
    border-style: double;
  }
  :global(input:focus),
  :global(button:focus) {
    outline: none;
    border-color: grey;
  }
  :global(input:hover),
  :global(button:hover) {
    border-color: rgb(0, 173, 0);
  }
  :global(button:hover) {
    cursor: pointer;
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
