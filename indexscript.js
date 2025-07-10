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


 document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "AIzaSyDIr80lvkvFZZsaqUtl2Qw9JIby7SSKd4o"; // APIキー
  const channelId = "UCvNhG0T4FP0B5z7Nbg0gbjA";
  const maxResults = 6;

  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector(".practiceSwiper .swiper-wrapper");
      data.items.forEach(item => {
        const videoId = item.id.videoId;
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
          <div class="youtube-container">
            <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>`;
        container.appendChild(slide);
      });

      // Swiperの初期化（取得後に実行）
      new Swiper(".practiceSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true
      });
    });
});


console.log("videoId:", videoId); // 動画IDが取得できてるか確認
console.log("slide:", slide);     // 要素構築できてるか
  
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