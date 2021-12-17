if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("sw.js")
      .then(res => console.log("service worker registrado"))
      .catch(err => console.log("service worker no registrado", err));
  });
}