document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-zoomable]").forEach(function (img) {
    img.addEventListener("click", function () {
      var bg = getComputedStyle(document.documentElement)
        .getPropertyValue("--global-bg-color").trim() || "#fff";

      var overlay = document.createElement("div");
      overlay.className = "lb-overlay";
      overlay.style.background = bg + "ee";

      var zoomedImg = document.createElement("img");
      zoomedImg.className = "lb-img";
      zoomedImg.src = img.src;
      zoomedImg.alt = img.alt;

      overlay.appendChild(zoomedImg);
      document.body.appendChild(overlay);
      document.body.style.overflow = "hidden";

      requestAnimationFrame(function () {
        overlay.classList.add("lb-open");
      });

      function close() {
        overlay.classList.remove("lb-open");
        overlay.addEventListener("transitionend", function () {
          overlay.remove();
          document.body.style.overflow = "";
          document.removeEventListener("keydown", onKey);
        }, { once: true });
      }

      function onKey(e) {
        if (e.key === "Escape") close();
      }

      overlay.addEventListener("click", close);
      document.addEventListener("keydown", onKey);
    });
  });

  // theme.js checks `typeof medium_zoom` on every dark/light toggle — keep as stub
  window.medium_zoom = { update: function () {} };
});
