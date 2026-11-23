document.querySelector("#year").textContent = new Date().getFullYear();

Object.entries(profileLinks).forEach(([key, url]) => {
  document.querySelectorAll(`[data-link="${key}"]`).forEach((element) => {
    const links = element.matches("a") ? [element] : element.querySelectorAll("a");

    links.forEach((link) => {
      link.href = url;

      if (url !== "#") {
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        link.addEventListener("click", (event) => {
          event.preventDefault();
          window.open(url, "_blank", "noopener,noreferrer");
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
