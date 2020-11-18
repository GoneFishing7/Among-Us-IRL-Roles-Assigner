<script lang="ts">
  import type { OptionsType } from "./types/App.types";

  export let options: OptionsType;
</script>

<style>
</style>

<div>{JSON.stringify(options)}</div>
