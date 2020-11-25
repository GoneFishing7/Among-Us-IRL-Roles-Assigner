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
  div {
    text-align: center;
  }
  div > :global(*) {
    margin-top: 10px;
  }
</style>

<div>
  <StarryBackground />
  <PlayerEditor />
  <Button on:click={submit}>Continue</Button>
</div>
