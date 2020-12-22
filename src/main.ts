import App from "./App.svelte";
import { colors } from "./utils";

console.log(colors);

const app = new App({
  target: document.body,
});

export default app;
