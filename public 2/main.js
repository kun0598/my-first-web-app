// ここからコードを書いてください
/// main.js

import { setupTabs } from "./js/tabs.js";
import { setupConverter } from "./js/converter.js";

document.addEventListener("DOMContentLoaded", () => {
  setupTabs(); // タブ切り替え機能の初期化
  setupConverter(); // 単位変換機能の初期化
});
