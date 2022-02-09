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
      src="https://9cbc-122-170-119-238.ngrok.io"
      @loadStarted="onLoadStarted($event)"
      @loadFinished="onLoadFinished($event)"
      @loaded="onLoaded($event)"
      @webConsole="webConsole($event)"
    ></WebViewExt>
  </Page>
</template>

<script>
let webview;

export default {
  data() {
    return {
      androidId: null,
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
    this.androidId = `0000000000000000000${android.provider.Settings.Secure.ANDROID_ID}`
  },
  methods: {
    onLoadStarted(evt) {
      console.log("Load Started", evt.eventName);
    },
    onLoadFinished(evt) {
      console.log("Load Finished", evt.eventName);
      webview = evt.object;
      webview.executeJavaScript(console.log("Execute JS"));
      webview.on("getId", (res) => {
        console.log("getId", res.url, res.data);
        this.androidId.toString().toLowerCase();
        webview.emitToWebView("id", { aid: this.androidId });
      });

      setInterval(() => {
        webview.emitToWebView("id", {
          message: "Hello from NativeScript",
        });
        this.androidId.toString().toUpperCase();
      }, 5000);
    },
    onLoaded(evt) {
      console.log("Loaded", evt.eventName);
    },
    webConsole(evt) {
      console.log("Web Console", evt.data);
    },
    getUniqueId() {
      return this.androidId;
    },
  },
};
</script>

<!-- In Player

setTimeout(() => {
        window.nsWebViewBridge.on('id', {}, (res) => {
          console.log('PLAYER getDeviceUniqueKey')
        })
        setInterval(() => {
          window.nsWebViewBridge.emit('getId', { getId: 'PLAYER getID' }, () => {
            console.log('PLAYER getId')
          })
        }, 5000)
      }, 5000) -->