const symbols = [
    "/",
    " x "
];

import {listRPersSchizoRIP, listCharsSchizoRIP, listHaukka, listDLCSchizoRIP, listAvACanon, listAvARPOnly} from './lists.js'

let workList;

let selectedChar;

$(document).ready(() => {
    /*
    const slides = $(".slidable");
    let currentSlide = 0;

    slides.hide().eq(0).show();

    function changeSlide(nextIndex) {
        if (nextIndex < 0 || nextIndex >= slides.length) return;

        slides.eq(currentSlide).fadeOut(400, function () {
            slides.eq(nextIndex).fadeIn(400);
            currentSlide = nextIndex;
        });
        console.log("Изменён этап, индекс", nextIndex)
    }
    */

    function frontAct(type) {
        
    }

    $(".std").click(function() {
        if($(this).attr("id").includes("choice")) {

        }
    });
});