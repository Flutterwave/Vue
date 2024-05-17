import { createApp } from "vue";
import "./style.css";
import Flutterwave from "../lib/entry.esm"
import App from "./App.vue";

const app = createApp(App)

app.use(Flutterwave, {
    publicKey: "FLWPUBK_TEST-c085776c333a632aa0e6556ff32570c7-X",
});

app.mount("#app");
