import { createApp } from "vue";
import "./style.css";
import Flutterwave from "../lib/entry.esm";
import App from "./App.vue";

const app = createApp(App);

app.use(Flutterwave, {
  publicKey: "FWPUB-10d02jforif0euebfiofbw3irbr93y89fge378fgy7",
});

app.mount("#app");
