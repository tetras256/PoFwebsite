
  document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.champion-card');

    cards.forEach(card => {
      const name = card.innerText.toLowerCase();
      card.style.display = name.includes(filter) ? '' : 'none';
    });
  });



  const searchInput = document.getElementById('searchInput');
  const roleFilter = document.getElementById('roleFilter');
  const kanaButtons = document.querySelectorAll('.kana-button');
  const cards = document.querySelectorAll('.champion-card');

  let selectedKana = '';

  function kanaToHira(str) {
    return str.replace(/[\u30a1-\u30f6]/g, (match) =>
      String.fromCharCode(match.charCodeAt(0) - 0x60)
    );
  }

  function normalize(str) {
    const lower = str.toLowerCase();
    const hira = kanaToHira(lower);
    return hira;
  }

  function filterCards() {
    const search = normalize(searchInput.value.trim());
    const role = roleFilter.value;

    cards.forEach(card => {
      const searchData = normalize(card.getAttribute('data-search') || '');
      const cardRole = card.getAttribute('data-role') || '';
      const kana = card.getAttribute('data-kana') || '';

      const matchesSearch = !search || searchData.includes(search);
      const matchesRole = !role || role === cardRole;
      const matchesKana = !selectedKana || kana === selectedKana;

      card.style.display = (matchesSearch && matchesRole && matchesKana) ? '' : 'none';
    });
  }

  searchInput.addEventListener('input', filterCards);
  roleFilter.addEventListener('change', filterCards);
  kanaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedKana = btn.getAttribute('data-kana');
      filterCards();
    });
  });

  function filterChampions(role) {
    const cards = document.querySelectorAll('.champion-card');
    const shownNames = new Set();

    cards.forEach(card => {
      const cardRole = card.dataset.role;
      const name = card.dataset.name;

      // 一旦すべて非表示にする
      card.style.display = "none";

      // ロール一致（または全体）かつ、重複でない場合は表示
      const isRoleMatch = role === "" || cardRole === role;

      // nameがある → 重複チェック。nameがない → チェックせず表示
      if (isRoleMatch) {
        if (!name || !shownNames.has(name)) {
          card.style.display = "block";
          if (name) {
            shownNames.add(name);
          }
        }
      }
    });
  }

  // セレクトボックスと連携
  document.addEventListener("DOMContentLoaded", () => {
    const roleSelect = document.getElementById("roleFilter");
    roleSelect.addEventListener("change", function () {
      filterChampions(this.value);
    });

    // 初期状態でも重複排除して全表示
    filterChampions("");
  });

  document.addEventListener("DOMContentLoaded", function () {
    const championLinks = document.querySelectorAll('.champion-card a');

    championLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // 元のリンクをキャンセル
        window.location.href = 'under-construction.html'; // 工事中ページへリダイレクト
      });
    });
  });
