<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import StarryBackground from "./StarryBackground.svelte";
  import HomeScreen from "./HomeScreen.svelte";
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
    <HomeScreen {goToInstructions} {goToPlayerEditor} />
  {:else if optionsScreen === 'instructions'}
    <Instructions on:back={goToMain} />
  {:else}
    <PlayerEditorPage {submit} />
  {/if}
</div>
