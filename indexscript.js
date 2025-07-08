 document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
      const slides = slider.querySelector('.slides');
      const images = slides.querySelectorAll('.slide-item')
      const total = images.length;
      let index = 0;

    if (total <= 1) {
      slides.style.transform = `translateX(0)`;
      return;
    }

      const delay = Math.random() * 3000; // ←ここ：スライド開始のランダム遅延

      setTimeout(() => {
        setInterval(() => {
            index = (index + 1) % total;
            slides.style.transform = `translateX(-${index * 100}%)`; // ←ここ：スライド移動
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
    slidesPerView: 2.2,
    coverflowEffect: {
      rotate: -12,
      stretch: 0,
      depth: 350,
      modifier: 1.7,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
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