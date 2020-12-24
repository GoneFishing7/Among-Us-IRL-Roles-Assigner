<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { colors } from "../.../../utils";

  const dispatch = createEventDispatcher();

  export let color: number = 0;

  function updateColor() {
    dispatch("updateColor");
  }
</script>

<style>
  button.color-chooser {
    height: 42px;
    width: 42px;
    border: 1px solid white;
    border-radius: 5px;
    background-size: contain;
    background-color: transparent;
  }
  button.color-chooser:hover {
    cursor: pointer;
  }
  button.color-chooser:focus {
    outline: none;
    border-color: green;
  }
</style>

<button
  class="color-chooser"
  style={`background-image: url(img/players/${colors[color]}.png)`}
  on:click={() => {
    updateColor();
  }} />
