<script lang="ts">
  export let small: boolean = false;
  export let noOutline: boolean = false;
  export let center: boolean = false;
  export let bottomRight: boolean = false;
  export let smallCursive: boolean = false;
</script>

<style>
  button {
    font-family: "In your face, Joffrey!", sans-serif;
    font-size: 74px;
    background: black;
    border-radius: 5px;
    border-width: 3px;
    border-style: solid;
    border-color: white;
    cursor: default;
    width: fit-content;
  }
  button:hover {
    color: rgb(0, 173, 0);
    border-color: rgb(0, 173, 0);
  }
  button:focus {
    outline: none;
    border-color: grey;
  }
  button.center {
    margin: 0 auto;
  }
  button.bottom-right {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  button.small {
    font-size: unset;
    font-family: Arial, Helvetica, sans-serif;
  }
  button.small-cursive {
    font-size: 32px;
  }
  button.small:hover {
    border-color: white;
  }
  button.no-outline {
    border: none;
    background-color: transparent;
  }
  button.no-outline:hover {
    color: rgb(0, 173, 0);
  }
  button.no-outline:focus {
    outline: auto;
  }
</style>

<button
  on:click
  on:mouseenter
  class:center
  class:small
  class:no-outline={noOutline}
  class:bottom-right={bottomRight}
  class:small-cursive={smallCursive}>
  <slot />
</button>
