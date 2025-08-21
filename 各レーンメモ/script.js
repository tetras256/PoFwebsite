const buttons = document.querySelectorAll(".tab-button");
const lanes = document.querySelectorAll(".lane");

// タブ切り替え処理
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    lanes.forEach(lane => {
      lane.classList.remove("active");
      if (lane.id === target) {
        lane.classList.add("active");
      }
    });
  });
});

// 画像プレビュー（アップロード）処理
document.querySelectorAll(".image-input").forEach(input => {
  input.addEventListener("change", () => {
    const preview = input.closest(".lane").querySelector(".image-preview");
    preview.innerHTML = ""; // 一旦クリア

    const files = input.files;
    if (files.length === 0) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        const img = document.createElement("img");
        img.src = e.target.result;
        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  });
});

// 🔽 メモと画像の外部ファイル読み込みをここにまとめる！
document.addEventListener("DOMContentLoaded", () => {
  const lanes = ["top", "jungle", "mid", "adc", "support"];

  lanes.forEach(lane => {
    // 🔹メモ読み込み
    const textarea = document.querySelector(`#${lane} textarea`);
    fetch(`${lane}.txt`)
      .then(res => res.ok ? res.text() : Promise.reject("メモ読み込み失敗"))
      .then(text => { textarea.value = text; })
      .catch(() => {
        textarea.placeholder += "（※ メモファイルが読み込めませんでした）";
      });

    // 🔹画像一覧読み込み
    const preview = document.querySelector(`#${lane} .image-preview`);
    fetch(`${lane}-images.txt`)
      .then(res => res.ok ? res.text() : Promise.reject("画像読み込み失敗"))
      .then(text => {
        const lines = text.split(/\r?\n/).map(line => line.trim()).filter(line => line !== "");
        lines.forEach(src => {
          const img = document.createElement("img");
          img.src = src;
          preview.appendChild(img);
        });
      })
      .catch(() => {
        // ファイルが無いときは何もしない
      });
  });
});
