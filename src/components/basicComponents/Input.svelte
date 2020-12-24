<script lang="ts">
  export let small: boolean = false;
  export let value;
</script>

<style>
  input {
    background: black;
    border-radius: 5px;
    border-width: 4px;
    border-style: double;
    border-color: white;
    cursor: default;
  }
  input:focus {
    outline: none;
    border-color: grey;
  }
  input:hover {
    border-color: rgb(0, 173, 0);
  }
  input.small {
    font-size: 32px;
  }
</style>

<input bind:value class:small type="text" />
