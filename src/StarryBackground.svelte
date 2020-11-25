<script lang="ts">
  import { onMount } from "svelte";

  const colors = [
    "black",
    "blue",
    "brown",
    "cyan",
    "green",
    "lime",
    "orange",
    "pink",
    "purple",
    "red",
    "white",
    "yellow",
  ];

  let stars: { x: number; y: number; z: number }[] = new Array(100)
    .fill({ x: 0, y: 0, z: 0 })
    .map((_, i) => {
      return {
        x: Math.random() * 200 - 100,
        y: Math.random() * 100,
        z: 0.1 + Math.random() * 1,
      };
    })
    .sort((a, b) => a.z - b.z);

  let floaters: {
    x: number;
    y: number;
    z: number;
    r: number;
    t: number;
    c: string;
  }[] = new Array(10)
    .fill({ x: 0, y: 0, z: 0, r: 0, t: 0, c: "" })
    .map(() => {
      return {
        x: Math.random() * 200 - 100,
        y: Math.random() * 100,
        z: Math.random() * 2 + 0.1,
        r: Math.random() * 360 - 180,
        t: Math.random() * 90 - 45,
        c: colors[Math.floor(Math.random() * colors.length)],
      };
    })
    .sort((a, b) => a.z - b.z);

  onMount(() => {
    let frame;

    function loop() {
      frame = requestAnimationFrame(loop);

      stars = stars.map((star) => {
        star.x += 0.6 * star.z;
        if (star.x > 120) star.x = -20;
        return star;
      });
      floaters = floaters.map((floater) => {
        floater.x += 0.3 * floater.z;
        floater.r += 0.1 * floater.t;
        if (floater.x > 120) {
          floater = {
            ...floater,
            x: -20,
            y: Math.random() * 100,
            r: Math.random() * 360 - 180,
            t: Math.random() * 90 - 45,
            c: colors[Math.floor(Math.random() * colors.length)],
          };
        }
        return floater;
      });
    }

    loop();

    return () => cancelAnimationFrame(frame);
  });
</script>

<style>
  :global(body) {
    background-color: black;
  }
  div.background {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
    background-color: black;
    width: 100vw;
    height: 100vh;
  }
  span {
    position: absolute;
  }
  span.floater {
    display: block;
    width: 100px;
    height: 100px;
  }
</style>

<div class="background">
  <div class="stars">
    {#each stars as star}
      <span style="left: {star.x}%; top: {star.y}%; transform: scale({star.z})">
        <svg width="10" height="10">
          <circle cx="5" cy="5" r="4" stroke="white" fill="white" />
        </svg>
      </span>
    {/each}
  </div>
  <div class="floaters">
    {#each floaters as floater}
      <span
        class="floater"
        style="
  left: {floater.x}%;
  top: {floater.y}%;
  transform: scale({floater.z}) rotate({floater.r}deg);
  background-image: url(img/players/{floater.c}.png);
  background-size: contain;
  " />
    {/each}
  </div>
</div>
