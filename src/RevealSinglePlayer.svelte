<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import isVowel from "is-vowel";
  import { playSound } from "./soundPlayer";

  export let name: string;
  export let role: string;

  const dispatch = createEventDispatcher();

  let currentScreen: "preReveal" | "reveal" = "preReveal";

  $: {
    if (currentScreen === "reveal") {
      playSound("revealSound");
    }
  }

  function goToReveal() {
    currentScreen = "reveal";
  }

  function goToNext() {
    currentScreen = "preReveal";
    dispatch("finished");
  }
</script>

<style>
  div.container {
    margin: 0px;
    padding: 0px;
  }
  div.reveal {
    height: 100vh;
    width: 100vw;
    background: 
      /* Fancy black transparent gradient mask turbo encabulator 5000 */ linear-gradient(
          to right,
          rgba(0, 0, 0, 0.9),
          transparent,
          rgba(0, 0, 0, 0.9)
        )
        no-repeat border-box,
      linear-gradient(black 40%, rgb(49, 49, 252), black 60%) no-repeat
        border-box;
  }
  div.reveal.impostor {
    background: 
      /* Fancy black transparent gradient mask turbo encabulator 5000 */ linear-gradient(
          to right,
          rgba(0, 0, 0, 0.9),
          transparent,
          rgba(0, 0, 0, 0.9)
        )
        no-repeat border-box,
      linear-gradient(black 40%, rgb(173, 0, 0), black 60%) no-repeat border-box;
  }
  div.role {
    font-family: "VCR OSD Mono";
    font-size: 100px;
  }
  div.role.impostor {
    color: red;
  }
  div.role.crewmate {
    color: #8dfdff;
  }
  button.next-button {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  span.player {
    transform: scaleX(-1);
    position: absolute;
    top: 40%;
    left: 40%;
    background-size: contain;
    width: 250px;
    height: 250px;
  }
</style>

<div class="container">
  {#if currentScreen === 'preReveal'}
    <div>
      {#if name}Hello, {name}!{:else}Hello!{/if}
    </div>
    <button on:click={goToReveal}>Reveal Role</button>
  {:else if currentScreen === 'reveal'}
    <div class="reveal {role}">
      {#if name}
        {name}
        is
        {#if isVowel(role[0])}an{:else}a{/if}
      {/if}
      <div class="role {role}">
        {role.slice(0, 1).toUpperCase() + role.slice(1)}
      </div>
      <span
        class="player"
        style="background-image: url(img/players/white.png)" />
    </div>
    <button class="next-button" on:click={goToNext}>
      Click this once you have read and memorized your role
    </button>
  {/if}
</div>
