<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import PlayerEditor from "./PlayerEditor.svelte";
  import StarryBackground from "./StarryBackground.svelte";
  import Button from "./Button.svelte";

  const dispatch = createEventDispatcher();

  function submit() {
    dispatch("submit");
  }
</script>

<style>
  div.main {
    text-align: center;
  }
  div.main > :global(*) {
    margin-bottom: 10px;
  }
</style>

<div class="main">
  <div>Enter the names of each player here:</div>
  <StarryBackground />
  <PlayerEditor />
  <Button on:click={submit}>Then continue</Button>
</div>
