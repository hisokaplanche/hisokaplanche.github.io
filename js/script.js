document.querySelector("#year").textContent = new Date().getFullYear();

const isMobileDevice = () =>
  /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.maxTouchPoints > 1;

const getInstagramUsername = (url) => {
  try {
    const pathParts = new URL(url).pathname.split("/").filter(Boolean);
    return pathParts[0] || "";
  } catch {
    return "";
  }
};

Object.entries(profileLinks).forEach(([key, url]) => {
  document.querySelectorAll(`[data-link="${key}"]`).forEach((element) => {
    const links = element.matches("a") ? [element] : element.querySelectorAll("a");

    links.forEach((link) => {
      link.href = url;

      if (url !== "#") {
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        link.addEventListener("click", (event) => {
          if (!isMobileDevice() || !url.includes("instagram.com")) return;

          event.preventDefault();
          const username = getInstagramUsername(url);
          let appOpened = false;

          const markAppOpened = () => {
            if (document.hidden) appOpened = true;
          };
          document.addEventListener("visibilitychange", markAppOpened, { once: true });

          if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && username) {
            window.location.href = `instagram://user?username=${encodeURIComponent(username)}`;
          } else if (/Android/i.test(navigator.userAgent) && username) {
            window.location.href = `intent://instagram.com/${encodeURIComponent(username)}#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=${encodeURIComponent(url)};end`;
          } else {
            window.open(url, "_blank", "noopener,noreferrer");
            return;
          }

          window.setTimeout(() => {
            if (!appOpened && !document.hidden) {
              window.location.href = url;
            }
          }, 1200);
        });
      }
    });
  });
});

// 写真が未配置の場合は壊れた画像アイコンを表示せず、配置位置だけを表示します。
document.querySelectorAll("img").forEach((img) => {
  const hideBrokenImage = () => {
    img.style.visibility = "hidden";
  };

  img.addEventListener("error", hideBrokenImage);
  if (img.complete && img.naturalWidth === 0) hideBrokenImage();
});
