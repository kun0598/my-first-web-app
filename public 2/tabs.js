// ここからコードを書いてください

export function setupTabs() {
  const tabItems = document.querySelectorAll("[data-tab]");
  const sections = document.querySelectorAll("section.content-section");

  tabItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.dataset.tab;
      // すべてのセクションをいったん非表示に
      sections.forEach((sec) => sec.classList.add("hidden"));
      // クリックされたタブに対応するセクションだけ表示
      const target = document.getElementById(targetId);
      if (target) target.classList.remove("hidden");
    });
  });
}
