<script lang="ts">
  import PlayerEditor from "./PlayerEditor.svelte";
  import Button from "./basicComponents/Button.svelte";
  export let submit;
</script>

<style>
  div.playerEditorPage > :global(*) {
    margin-bottom: 10px;
  }
</style>

<div class="playerEditorPage">
  <div>Enter the names of each player here:</div>
  <PlayerEditor />
  <Button on:click={submit}>Then continue</Button>
</div>
