<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { OptionsType } from "./types/App.types";

  import PlayerEditor from "./PlayerEditor.svelte";

  const dispatch = createEventDispatcher();

  export let initialOptions: OptionsType = {
    gameMode: "default",
    players: [],
  };

  let options: OptionsType = initialOptions;

  function updatePlayers(event) {
    console.log(event.detail);
    options.players = event.detail;
  }

  function submit() {
    dispatch("submit", options);
  }
</script>

<style>
  div {
    height: 100%;
    background-image: url("../img/background.jpg");
    background-size: 50%;
    background-repeat: repeat;
    text-align: center;
  }
  div > * {
    margin-top: 10px;
  }
</style>

<div>
  <PlayerEditor on:updatePlayers={updatePlayers} />
  <button on:click={submit}>Continue</button>
</div>
