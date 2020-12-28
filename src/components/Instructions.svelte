<script lang="ts">
  import Button from "./basicComponents/Button.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function goBackToMain() {
    dispatch("back");
  }
</script>

<style>
  p {
    margin: 10px;
  }
</style>

<h1>TO USE THIS SITE:</h1>
<div>
  <p>1. Go to the main screen (refresh page if needed)</p>
  <p>2. Press the "PLAY" button</p>
  <p>3. Enter the names of each player in each text box</p>
  <p>
    4. Click on the smaller characters beside each text box to toggle their
    color
  </p>
  <p>5. Click "THEN CONTINUE".</p>
  <p>
    6. Have each person use the computer in the order that you entered their
    names. Each player will click "REVEAL ROLE", and then "NEXT PLAYER" once
    they've memorized their role.
  </p>
</div>

<Button on:click={goBackToMain}>Back to Main Screen</Button>
