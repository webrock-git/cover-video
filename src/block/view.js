document.addEventListener("DOMContentLoaded", () => {
    const popupBtn = document.querySelector(".cover-video-popup-btn");
    popupBtn.addEventListener("click", () => {
        if(Fancybox !== undefined) {
            Fancybox.show([
                {
                  src: "https://www.youtube.com/watch?v=z2X2HaTvkl8",
                  width: '100%',
                  height: '100%',
                },
              ]);
        }
    })
})
  