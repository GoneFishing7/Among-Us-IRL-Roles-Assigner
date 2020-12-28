<script lang="ts">
  import Button from "./basicComponents/Button.svelte";

  export let goToInstructions;
  export let goToPlayerEditor;
</script>

<style>
  img {
    height: 70px;
    width: auto;
  }
  header {
    font-size: 96px;
  }
</style>

<div>
  <header>
    <img src="img/Among Us A.png" alt="Among Us Logo" />mong Us IRL Roles
    Assigner
  </header>
  <div>I know, not the catchiest name</div>
  <Button on:click={goToInstructions}>Instructions</Button>
  <Button on:click={goToPlayerEditor}>Play</Button>
</div>
