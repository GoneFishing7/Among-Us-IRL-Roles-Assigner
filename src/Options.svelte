<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { OptionsType } from "./types/App.types";

  import PlayerEditor from "./PlayerEditor.svelte";

  const dispatch = createEventDispatcher();

  let options: OptionsType = {
    gameMode: "default",
    players: [],
  };

  function updatePlayers(event) {
    console.log(event.detail);
    options.players = event.detail;
  }

  function submit() {
    dispatch("submit", options);
  }
</script>

<style>
</style>

<PlayerEditor on:updatePlayers={updatePlayers} />
<button on:click={submit}>Continue</button>
