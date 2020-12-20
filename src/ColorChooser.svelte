<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { colors } from "./utils";

  const dispatch = createEventDispatcher();

  export let color: number = 0;

  function updateColor() {
    dispatch("updateColor");
  }
</script>

<style>
  button.color-chooser {
    height: 48px;
    width: 48px;
    border: 1px solid white;
    background-size: contain;
    background-color: transparent;
  }
</style>

<button
  class="color-chooser"
  style={`background-image: url(img/players/${colors[color]}.png)`}
  on:click={() => {
    updateColor();
  }} />
