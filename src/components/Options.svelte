<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import PlayerEditor from "./PlayerEditor.svelte";
  import StarryBackground from "./StarryBackground.svelte";
  import Button from "./basicComponents/Button.svelte";

  const dispatch = createEventDispatcher();

  let optionsScreen: "general" | "players" = "general";

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
  div.playerEditorPage > :global(*) {
    margin-bottom: 10px;
  }
  img {
    height: 70px;
    width: auto;
  }
  header {
    font-size: 96px;
  }
</style>

<div class="main">
  <StarryBackground />
  {#if optionsScreen === 'general'}
    <header>
      <img src="img/Among Us A.png" alt="Among Us Logo" />mong Us IRL Roles
      Assigner
    </header>
    <div>I know, not the catchiest name</div>
    <Button>Instructions</Button>
    <Button on:click={goToPlayerEditor}>Play</Button>
  {:else}
    <div class="playerEditorPage">
      <div>Enter the names of each player here:</div>
      <PlayerEditor />
      <Button on:click={submit}>Then continue</Button>
    </div>
  {/if}
</div>
