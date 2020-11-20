<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import isVowel from "is-vowel";

  export let name: string;
  export let role: string;

  const dispatch = createEventDispatcher();

  let currentScreen: "preReveal" | "reveal" = "preReveal";

  function goToReveal() {
    currentScreen = "reveal";
  }

  function goToNext() {
    currentScreen = "preReveal";
    dispatch("finished");
  }
</script>

<style>
</style>

<div>
  {#if currentScreen === 'preReveal'}
    <div>Hello, {name}!</div>
    <button on:click={goToReveal}>Reveal Role</button>
  {:else if currentScreen === 'reveal'}
    <div>You are {isVowel(role[0]) ? 'an' : 'a'} {role}, {name}!</div>
    <button on:click={goToNext}>
      Click this once you have read and memorized your role
    </button>
  {/if}
</div>
