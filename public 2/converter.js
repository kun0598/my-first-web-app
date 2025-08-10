// ここからコードを書いてください
// converter.js

// js/converter.js

// 単位変換機能の初期化処理をまとめた関数を定義
export function setupConverter() {
  // 1. DOM 要素を取得
  const converterForm = document.querySelector(".converter-form");
  const inputValue = document.querySelector(".converter-input");
  const fromSelect = document.querySelector(".converter-from");
  const toSelect = document.querySelector(".converter-to");
  const resultEl = document.querySelector(".converter-result");

  // 2. 単位データの配列（name: 表示テキスト, base: メートル換算値）
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  // 3. select 要素を option で埋める
  lengthUnit.forEach((unit) => {
    const optFrom = document.createElement("option");
    optFrom.value = unit.base; // value 属性には base 値
    optFrom.textContent = unit.name; // テキストには name
    fromSelect.appendChild(optFrom);

    const optTo = document.createElement("option");
    optTo.value = unit.base;
    optTo.textContent = unit.name;
    toSelect.appendChild(optTo);
  });

  // 4. 初期選択を設定
  fromSelect.selectedIndex = 0; // meter
  toSelect.selectedIndex = 1; // kilometer

  // 5. 実際の変換処理を行う関数を定義
  function convert() {
    const raw = inputValue.value;
    const value = parseFloat(raw); // 文字列→数値変換
    if (isNaN(value)) {
      // 数値じゃないとき
      resultEl.textContent = "Please enter a valid number";
      return; // ここで処理を終える
    }

    const fromBase = parseFloat(fromSelect.value);
    const toBase = parseFloat(toSelect.value);
    const converted = (value * fromBase) / toBase; // 変換計算

    // 結果を整形して表示（小数点以下3桁）
    const fromName = lengthUnit[fromSelect.selectedIndex].name;
    const toName = lengthUnit[toSelect.selectedIndex].name;
    resultEl.textContent = `${value} ${fromName} = ${converted.toFixed(
      3
    )} ${toName}`;
  }

  // 6. フォームの変化ごとに変換を実行
  converterForm.addEventListener("input", convert);

  // 7. 初期表示用に一度呼び出し
  convert();
}
