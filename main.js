var style,
  sheet,
  rule,
  on = addEventListener,
  $ = function (e) {
    return document.querySelector(e);
  },
  $$ = function (e) {
    return document.querySelectorAll(e);
  },
  $body = document.body,
  $inner = $(".inner"),
  client = (function () {
    var e,
      t,
      n = { browser: "other", browserVersion: 0, os: "other", osVersion: 0 },
      o = navigator.userAgent;
    for (
      e = [
        ["firefox", /Firefox\/([0-9\.]+)/],
        ["edge", /Edge\/([0-9\.]+)/],
        ["safari", /Version\/([0-9\.]+).+Safari/],
        ["chrome", /Chrome\/([0-9\.]+)/],
        ["ie", /Trident\/.+rv:([0-9]+)/],
      ],
        t = 0;
      t < e.length;
      t++
    )
      if (o.match(e[t][1])) {
        (n.browser = e[t][0]), (n.browserVersion = parseFloat(RegExp.$1));
        break;
      }
    for (
      e = [
        [
          "ios",
          /([0-9_]+) like Mac OS X/,
          function (e) {
            return e.replace("_", ".").replace("_", "");
          },
        ],
        [
          "ios",
          /CPU like Mac OS X/,
          function (e) {
            return 0;
          },
        ],
        ["android", /Android ([0-9\.]+)/, null],
        [
          "mac",
          /Macintosh.+Mac OS X ([0-9_]+)/,
          function (e) {
            return e.replace("_", ".").replace("_", "");
          },
        ],
        ["windows", /Windows NT ([0-9\.]+)/, null],
      ],
        t = 0;
      t < e.length;
      t++
    )
      if (o.match(e[t][1])) {
        (n.os = e[t][0]),
          (n.osVersion = parseFloat(e[t][2] ? e[t][2](RegExp.$1) : RegExp.$1));
        break;
      }
    return n;
  })(),
  trigger = function (e) {
    if ("ie" == client.browser) {
      var t = document.createEvent("Event");
      t.initEvent(e, !1, !0), dispatchEvent(t);
    } else dispatchEvent(new Event(e));
  };
on("load", function () {
  setTimeout(function () {
    ($body.className = $body.className.replace(/\bis-loading\b/, "is-playing")),
      setTimeout(function () {
        $body.className = $body.className.replace(/\bis-playing\b/, "is-ready");
      }, 1e3);
  }, 100);
}),
  (style = document.createElement("style")).appendChild(
    document.createTextNode("")
  ),
  document.head.appendChild(style),
  (sheet = style.sheet),
  "android" == client.os
    ? (function () {
        sheet.insertRule("body::after { }", 0), (rule = sheet.cssRules[0]);
        var e = function () {
          rule.style.cssText =
            "height: " + Math.max(screen.width, screen.height) + "px";
        };
        on("load", e), on("orientationchange", e), on("touchmove", e);
      })()
    : "ios" == client.os
    ? (sheet.insertRule("body::after { }", 0),
      ((rule = sheet.cssRules[0]).style.cssText =
        "-webkit-transform: scale(1.0)"),
      sheet.insertRule("body.ios-focus-fix::before { }", 0),
      ((rule = sheet.cssRules[0]).style.cssText = "height: calc(100% + 60px)"),
      on(
        "focus",
        function (e) {
          $body.classList.add("ios-focus-fix");
        },
        !0
      ),
      on(
        "blur",
        function (e) {
          $body.classList.remove("ios-focus-fix");
        },
        !0
      ))
    : "ie" == client.browser &&
      (function () {
        var e, t;
        (t = function () {
          var e, t, n, o, s, i;
          for (
            (s = $("#wrapper")).style.height = "auto",
              s.scrollHeight <= innerHeight && (s.style.height = "100vh"),
              o = $$(".container.full"),
              i = 0;
            i < o.length;
            i++
          )
            (s = o[i]),
              (n = getComputedStyle(s)),
              (s.style.minHeight = ""),
              (s.style.height = ""),
              (e = n.minHeight),
              (s.style.minHeight = 0),
              (s.style.height = ""),
              (t = n.height),
              0 != e && (s.style.height = t > e ? "auto" : e);
        })(),
          on("resize", function () {
            clearTimeout(e), (e = setTimeout(t, 250));
          }),
          on("load", t);
      })();
