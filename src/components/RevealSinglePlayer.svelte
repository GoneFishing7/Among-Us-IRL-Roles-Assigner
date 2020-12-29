<script lang="ts">
  /*
  z-indexes:
  1-10: others 
  11: Player
  12: Shadow mask
  13: Role and num-impostors, next player button
  */

  import { createEventDispatcher } from "svelte";
  import { playSound } from "../soundPlayer";

  import Button from "./basicComponents/Button.svelte";
  import { colors } from "../utils";
  import type { Player } from "../types/App.types";

  export let name: string;
  export let role: string;
  export let color: number;

  export let others: Player[];
  $: numImpostors = others.filter((o) => o.role === "impostor").length;

  const othersXMap = [11, 22, 30, 35, 39];

  const dispatch = createEventDispatcher();

  let currentScreen: "preReveal" | "reveal" = "preReveal";

  $: {
    if (currentScreen === "reveal") {
      playSound("revealSound");
    }
  }

  function generateCSSForOther(color, index) {
    return index % 2 === 0
      ? `
        top: ${50 - (index / 2 + 1)}%; left: ${50 - othersXMap[index / 2]}%; 
        transform: translateX(-50%) translateY(-50%) scale(${
          1 - (index / 2 + 1) / 8
        }); 
        background-image: url(img/players/${colors[color]}.png); 
        filter: brightness(${100 - (index / 2 + 1) * 10}%);
        z-index: ${10 - index};`
      : `
        top: ${50 - (index + 1) / 2}%; left: ${
          47 + othersXMap[(index + 1) / 2 - 1]
        }%; 
        transform: translateX(-50%) translateY(-50%) scaleX(-1) scale(${
          1 - (index / 2 + 1) / 8
        }); 
        background-image: url(img/players/${colors[color]}.png); 
        filter: brightness(${100 - ((index + 1) / 2 - 1) * 10}%);
        z-index: ${10 - index};`;
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
  div.shadow-mask {
    position: absolute;
    z-index: 12;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        transparent,
        rgba(0, 0, 0, 0.8)
      )
      no-repeat border-box;
  }
  div.reveal {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: linear-gradient(black 35%, rgb(56, 255, 233), black 65%)
      no-repeat border-box;
  }
  div.reveal.impostor {
    background: linear-gradient(black 40%, rgb(173, 0, 0), black 60%) no-repeat
      border-box;
  }
  div.role {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-family: "VCR OSD Mono";
    font-size: 124px;
    z-index: 13;
  }

  .num-impostors {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 32px;
    font-family: "VCR OSD Mono", monospace;
    z-index: 13;
  }

  .impostor {
    font-family: "VCR OSD MONO";
    color: red;
  }
  .crewmate {
    font-family: "VCR OSD MONO";
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

  .name {
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
    <div class="shadow-mask" />
    <div class="reveal {role}">
      <div class="role {role}">
        {role.slice(0, 1).toUpperCase() + role.slice(1)}
      </div>
      {#if role !== 'impostor'}
        <div class="num-impostors">
          There
          {#if numImpostors > 1}
            are
            <span class="impostor">{numImpostors} impostors</span>
          {:else}is <span class="impostor">{numImpostors} impostor</span>{/if}
          among us
        </div>
      {/if}
      <div
        class="player"
        style="background-image: url(img/players/{colors[color]}.png)">
        <span class="name"> {name || 'You'} </span>
      </div>
      {#if role !== 'impostor'}
        {#each others as other, i}
          <div class="other" style={generateCSSForOther(other.color, i)} />
        {/each}
      {:else}
        {#each others.filter((o) => o.role === 'impostor') as imp, i}
          <div class="other" style={generateCSSForOther(imp.color, i)}>
            <span class="name">{imp.name || ''}</span>
          </div>
        {/each}
      {/if}
    </div>
    <Button zIndex={13} bottomRight on:click={goToNext}>Next player</Button>
  {/if}
</div>
