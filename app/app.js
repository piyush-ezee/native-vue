import Vue from "nativescript-vue";
import "@nota/nativescript-webview-ext/vue";
import Home from "./components/Home";

Vue.config.silent = false;

new Vue({
  render: (h) => h("frame", [h(Home)]),
}).$start();

global.window = global;