<script lang="ts">
  import { onMount } from "svelte";
  import { randomColor } from "../utils";

  // Generate stars with random positions
  let stars: { x: number; y: number; z: number }[] = new Array(100)
    // Fill with dummy values
    .fill({ x: 0, y: 0, z: 0 })
    // Add random values
    .map((_, i) => {
      return {
        x: Math.random() * 200 - 100,
        y: Math.random() * 100,
        z: 0.1 + Math.random() * 1,
      };
    })
    // Make sure stars are rendered in the correct order
    .sort((a, b) => a.z - b.z);

  // Generate "floaters" (floating characters)
  let floaters: {
    x: number;
    y: number;
    z: number;
    r: number; // Current rotation
    t: number; // Torque/Rotation Velocity
    c: string; // Color
  }[] = new Array(10)
    // Fill with dummy values
    .fill({ x: 0, y: 0, z: 0, r: 0, t: 0, c: "" })
    // Add personal dummy values randomly
    .map(() => {
      return {
        x: Math.random() * 200 - 100,
        y: Math.random() * 100,
        z: Math.random() * 2 + 0.1,
        r: Math.random() * 360 - 180,
        t: Math.random() * 90 - 45,
        c: randomColor(),
      };
    })
    // Render in the correct order
    .sort((a, b) => a.z - b.z);

  // Set animation in motion
  onMount(() => {
    let frame;

    // Function will run every frame
    function loop() {
      // Get current frame
      frame = requestAnimationFrame(loop);

      // Update stars
      stars = stars.map((star) => {
        star.x += 0.6 * star.z;
        // If past the edge of the screen
        if (star.x > 120) star.x = -20;
        return star;
      });
      // Update floaters
      floaters = floaters.map((floater) => {
        floater.x += 0.2 * floater.z;
        floater.r += 0.1 * floater.t;
        // If past the edge
        if (floater.x > 120) {
          floater = {
            ...floater,
            x: -20,
            y: Math.random() * 100,
            r: Math.random() * 360 - 180,
            t: Math.random() * 90 - 45,
            c: randomColor(),
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
    z-index: -100;
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
  <!-- Render Everyting -->
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
