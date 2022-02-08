<template>
  <Page
    class="page"
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:nota="@nota/nativescript-webview-ext"
  >
    <ActionBar class="action-bar">
      <Label class="action-bar-title" :text="'Player' + androidId"></Label>
    </ActionBar>
    <WebViewExt
      src="https://62f2-122-170-119-238.ngrok.io"
      (loadStarted)="onLoadStarted($event)"
      (loadFinished)="onLoadFinished($event)"
    ></WebViewExt>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      androidId: null,
    };
  },
  mounted() {
    // 59+9(random HEX)+8(GMT Unix timestamp)+16(androidID)
    let time = new Date(new Date().toUTCString()).getTime();
    let hex = 0;
    this.androidId = android.provider.Settings.Secure.ANDROID_ID;
    const ANDROID_ID = "59" + time + hex + this.androidId;
    console.log("mounted");
  },
  methods: {
    onLoadStarted(evt) {
      console.log("Load Started", evt);
    },
    onLoadFinished(evt) {
      console.log("Load Finished", evt);
    },
    // window.nsWebViewBridge.emit("'message'", {
    //   message: "Hello from NativeScript"
    // });
  },
};
</script>
