document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
      const slides = slider.querySelector('.slides');
      const images = slides.querySelectorAll('.slide-item')
      const total = images.length;
      let index = 0;
      let intervalId = null;

    if (total <= 1) {
      slides.style.transform = `translateX(0)`;
      return;
    }

      const delay = Math.random() * 3000; // ←ここ：スライド開始のランダム遅延

    function startSliding() {
      if (intervalId) return;
      intervalId = setInterval(() => {
        index = (index + 1) % total;
        slides.style.transform = `translateX(-${index * 100}%)`;
      }, 5000);
    }

    function stopSliding() {
      clearInterval(intervalId);
      intervalId = null;
    }

      setTimeout(() => {
      //  setInterval(() => {
      //      index = (index + 1) % total;
     //       slides.style.transform = `translateX(-${index * 100}%)`; // ←ここ：スライド移動
      //  }, 5000); // ←ここ：切り替え間隔（秒数）
      startSliding();
      }, delay);

      slider.addEventListener('mouseenter', () => {
      clearInterval(intervalId);  // ⇒ 止める
       intervalId = null;  // これを必ずセットして停止を明示
      });

      slider.addEventListener('mouseleave', () => {
      startSliding();             // ⇒ 再開する
      });
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

  