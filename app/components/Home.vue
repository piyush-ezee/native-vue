<template>
  <Page
    class="page"
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:nota="@nota/nativescript-webview-ext"
  >
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Player"></Label>
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
    return {};
  },
  mounted() {
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
