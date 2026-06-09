$(document).ready(function () {
  var bgColor = (getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") || "#fff").trim();

  document.querySelectorAll("[data-zoomable]").forEach(function (img) {
    img.addEventListener("click", function () {
      var overlay = document.createElement("div");
      overlay.style.cssText = [
        "position:fixed", "top:0", "left:0", "width:100%", "height:100%",
        "background:" + bgColor + "ee",
        "display:flex", "align-items:center", "justify-content:center",
        "z-index:9999", "cursor:zoom-out",
        "opacity:0", "transition:opacity 0.3s ease"
      ].join(";");

      // Fresh <img> element so Safari decodes at display size, not from a cached GPU texture
      var zoomedImg = document.createElement("img");
      zoomedImg.src = img.src;
      zoomedImg.alt = img.alt;
      zoomedImg.style.cssText = [
        "max-width:90vw", "max-height:90vh",
        "object-fit:contain", "border-radius:4px",
        "box-shadow:0 8px 32px rgba(0,0,0,0.25)"
      ].join(";");

      overlay.appendChild(zoomedImg);
      document.body.appendChild(overlay);

      requestAnimationFrame(function () { overlay.style.opacity = "1"; });

      function close() {
        overlay.style.opacity = "0";
        overlay.addEventListener("transitionend", function () {
          if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
          document.removeEventListener("keydown", onKey);
        }, { once: true });
      }

      function onKey(e) { if (e.key === "Escape") close(); }

      overlay.addEventListener("click", close);
      document.addEventListener("keydown", onKey);
    });
  });

  // Stub so any existing references to medium_zoom don't error
  medium_zoom = { update: function () {}, detach: function () {}, open: function () {}, close: function () {} };
});
