<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import PlayerEditor from "./PlayerEditor.svelte";
  import StarryBackground from "./StarryBackground.svelte";

  const dispatch = createEventDispatcher();

  function submit() {
    dispatch("submit");
  }
</script>

<style>
  div {
    text-align: center;
  }
  div > * {
    margin-top: 10px;
  }
</style>

<div>
  <StarryBackground />
  <PlayerEditor />
  <button class="large" on:click={submit}>Continue</button>
</div>
