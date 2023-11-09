document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelectorAll(".wp-block-cover-video-cover-video");
    if(container){
        container.forEach((item) => {
          const data = JSON.parse(item.getAttribute("data-settings"));
          const popupBtn = item.querySelector(".cover-video-popup-btn");
          popupBtn.addEventListener("click", () => {
            console.log(data?.url);
            if(Fancybox !== undefined) {
                Fancybox.show([
                    {
                      src: data?.url || "https://www.youtube.com/watch?v=j-FCwkXMfzY",
                      width: '100%',
                      height: '100%',
                    },
                  ]);
            }
        })
        })
    }
})
  