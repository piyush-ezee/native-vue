<template>
  <Page
    class="page"
    actionBarHidden="true"
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:nota="@nota/nativescript-webview-ext"
  >
    <WebViewExt
      :src="playerUrl"
      @loaded="onLoaded($event)"
      @webConsole="webConsole($event)"
      @requestKey="requestKey($event)"
    ></WebViewExt>
  </Page>
</template>

<script>
import { Application } from "@nativescript/core";
let webview;

export default {
  data() {
    return {
      androidId: null,
      playerUrl: "https://smooth-panda-61.loca.lt",
    };
  },
  mounted() {
    // let time = new Date(new Date().toUTCString()).getTime();
    // let hex = [...Array(9)]
    //   .map(() => Math.floor(Math.random() * 16).toString(16))
    //   .join("");

    // this.androidId =
    //   "59" + hex + time + android.provider.Settings.Secure.ANDROID_ID;

    //19 0's + androidId - same as old android code
    let ANDROID_ID = android.provider.Settings.Secure.getString(
      Application.android.context.getContentResolver(),
      android.provider.Settings.Secure.ANDROID_ID
    );
    this.androidId = `0000000000000000000${ANDROID_ID}`;
  },
  methods: {
    onLoaded(evt) {
      webview = evt.object;
    },
    webConsole(evt) {
      console.log("Web Console", evt.data);
    },
    requestKey() {
      console.log("Requesting Key");
      webview.emitToWebView("uniqueKey", { uniqueKey: this.androidId });
    },
  },
};
</script>
