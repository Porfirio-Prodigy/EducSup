

        //// FALTA TERMINAR ESSA FUNÇÃO
function resolution() {

            let altura = window.screen.height;
            let largura = window.screen.width;
            let video_resolution = document.getElementsByTagName("iframe")


            if (largura <= 320) {
                $( video_resolution ).attr("width", "270");
                $( video_resolution ).attr("height", "180");                
            }

            if (largura> 700 && largura <= 768) {
                $( video_resolution ).attr("width", "730");
                $( video_resolution ).attr("height", "420");                
    }
}