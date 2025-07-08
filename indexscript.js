 document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
      const slides = slider.querySelector('.slides');
      const images = slides.querySelectorAll('img');
      const total = images.length;
      let index = 0;

      const delay = Math.random() * 3000; // ←ここ：スライド開始のランダム遅延

      setTimeout(() => {
        setInterval(() => {
          slides.style.opacity = '0'; // ←ここ：フェードアウト開始

          setTimeout(() => {
            index = (index + 1) % total;
            slides.style.transform = `translateX(-${index * 100}%)`; // ←ここ：スライド移動
            slides.style.opacity = '1'; // ←ここ：フェードイン
          }, 200); // ←ここ：ブリンク間隔（速さ）
        }, 5000); // ←ここ：切り替え間隔（秒数）
      }, delay);
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".practiceSwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 50,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 3 }
    }
  });
});


   // チャンピオンリンクを一時的に工事中ページに差し替える
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.flow-track a');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // 元のリンクをキャンセル
        window.location.href = 'construction.html'; // 工事中ページへリダイレクト
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach((slider) => {
    const slides = slider.querySelector('.slides');
    const items = slides.querySelectorAll('.slide-item');
    const total = items.length;

    let index = 0;

    const delay = Math.random() * 3000;

    setTimeout(() => {
      setInterval(() => {

        setTimeout(() => {
          index = (index + 1) % total;
          slides.style.transform = `translateX(-${index * 100}%)`;
        }, 200);
      }, 5000);
    }, delay);
  });
});