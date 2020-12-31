<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import StarryBackground from "./StarryBackground.svelte";
  import Home from "./Home.svelte";
  import Instructions from "./Instructions.svelte";
  import PlayerEditorPage from "./PlayerEditorPage.svelte";

  const dispatch = createEventDispatcher();

  let optionsScreen: "general" | "instructions" | "players" = "general";

  function goToMain() {
    optionsScreen = "general";
  }

  function goToInstructions() {
    optionsScreen = "instructions";
  }

  function goToPlayerEditor() {
    optionsScreen = "players";
  }

  // Submit options and go to reveal
  function submit() {
    dispatch("submit");
  }
</script>

<style>
  div.main {
    text-align: center;
  }
</style>

<div class="main">
  <StarryBackground />
  {#if optionsScreen === 'general'}
    <!-- Home Screen -->
    <Home {goToInstructions} {goToPlayerEditor} />
  {:else if optionsScreen === 'instructions'}
    <!-- Instructions -->
    <Instructions on:back={goToMain} />
  {:else}
    <!-- Player Editor -->
    <PlayerEditorPage {submit} />
  {/if}
</div>
