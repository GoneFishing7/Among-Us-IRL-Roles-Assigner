<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import isVowel from "is-vowel";
  import { playSound } from "./soundPlayer";

  import Button from "./Button.svelte";
  import { randomColor } from "./utils";

  export let name: string;
  export let role: string;

  let others = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  const othersXMap = [11, 22, 30, 35, 39];
  $: othersWithStyles = others.reduce(
    (a, b, i) => ({
      ...a,
      [b]:
        i % 2 === 0
          ? `
            top: ${50 - (i / 2 + 1)}%; left: ${50 - othersXMap[i / 2]}%; 
            transform: translateX(-50%) translateY(-50%) scale(${
              1 - (i / 2 + 1) / 8
            }); 
            background-image: url(img/players/${randomColor()}.png); 
            filter: brightness(${100 - (i / 2 + 1) * 10}%);
            z-index: ${10 - i};
            `
          : `
            top: ${50 - (i + 1) / 2}%; left: ${
              47 + othersXMap[(i + 1) / 2 - 1]
            }%; 
            transform: translateX(-50%) translateY(-50%) scaleX(-1) scale(${
              1 - (i / 2 + 1) / 8
            }); 
            background-image: url(img/players/${randomColor()}.png); 
            filter: brightness(${100 - ((i + 1) / 2 - 1) * 10}%);
            z-index: ${10 - i};
          `,
    }),
    {}
  );

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
    display: flex;
    flex-direction: column;
    background: 
      /* Fancy black transparent gradient mask turbo encabulator 5000 */ linear-gradient(
          to right,
          rgba(0, 0, 0, 0.6),
          transparent,
          rgba(0, 0, 0, 0.6)
        )
        no-repeat border-box,
      linear-gradient(black 30%, rgb(56, 255, 233), black 70%) no-repeat
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
    font-size: 124px;
  }
  div.role.impostor {
    color: red;
  }
  div.role.crewmate {
    color: #8dfdff;
  }
  .player {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    z-index: 11;

    background-size: contain;
    width: 250px;
    height: 250px;
  }

  .other {
    position: absolute;
    background-size: contain;
    width: 250px;
    height: 250px;
  }

  .player > .name {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<div class="container">
  {#if currentScreen === 'preReveal'}
    <div>
      {#if name}Hello, {name}!{:else}Hello!{/if}
    </div>
    <Button on:click={goToReveal}>Reveal Role</Button>
  {:else if currentScreen === 'reveal'}
    <div class="reveal {role}">
      <div class="role {role}">
        {role.slice(0, 1).toUpperCase() + role.slice(1)}
      </div>
      <div class="player" style="background-image: url(img/players/white.png)">
        <span class="name">
          {#if name}{name}{:else}You{/if}
        </span>
      </div>
      {#each Object.values(othersWithStyles) as s, i}
        <div class="other" style={`${s}`} />
      {/each}
    </div>
    <Button bottomRight on:click={goToNext}>Next player</Button>
  {/if}
</div>
