/*
 * Sidebar `top` clamp.
 *
 * The mint theme's footer/sidebar scroll script sets inline
 * `top = headerOffset - (sidebarContentHeight - footerTop)` on #sidebar to
 * slide it up as the footer scrolls into view. On short pages the footer
 * is visible immediately and our sidebar content is thousands of pixels
 * tall, so it writes an absurd offset like `top:-1729px` (normal is
 * ~100px) and the top of the menu becomes unreachable.
 *
 * #sidebar is re-created on every SPA navigation, so the observer watches
 * the document subtree instead of one node — any style write on any
 * current or future #sidebar gets clamped to the navbar's bottom edge.
 */
(function () {
  function clamp(sidebar) {
    var navbar = document.getElementById("navbar");
    if (!sidebar || !navbar) return;
    var minTop = navbar.getBoundingClientRect().bottom;
    var top = parseFloat(sidebar.style.top);
    if (!isNaN(top) && top < minTop - 1) {
      sidebar.style.top = minTop + "px";
    }
  }

  new MutationObserver(function (muts) {
    for (var i = 0; i < muts.length; i++) {
      var t = muts[i].target;
      if (t && t.id === "sidebar") clamp(t);
    }
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["style"],
    subtree: true,
  });

  // Also fix whatever value is already there at load.
  var s = document.getElementById("sidebar");
  if (s) clamp(s);
})();
