$(function () {
    kartyaNyito();
    kartyaHover();
    function kartyaNyito() {
        let zarva = false;
        $(".jarmu-card-reszletek").on("click", () => {
            if (zarva) {
                $(".card-block-3,.card-block-5").slideUp(500);
                zarva = false;
            } else if (!zarva) {
                $(".card-block-3,.card-block-5").slideDown(500);
                zarva = true;
            }
        });
    }

    function kartyaHover() {
        $(".jarmu-card").on("mouseenter", () => {
            $(".jarmu-card-img-box img").css("transform", "scale(1.2)");
            $(".jarmu-card-img-box img").css("rotate", "(2deg)");
        });
        $(".jarmu-card").on("mouseleave", () => {
            $(".jarmu-card-img-box img").css("transform", "scale(1.0)");
            $(".jarmu-card-img-box img").css("rotate", "(0deg)");
        });
    }




});