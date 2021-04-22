function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const circleProgress1 = document.getElementsByClassName("psr_circle_progress")[0];
const circleProgress2 = document.getElementsByClassName("psr_circle_progress")[1];
const circleProgress3 = document.getElementsByClassName("psr_circle_progress")[2];
const circleProgress4 = document.getElementsByClassName("psr_circle_progress")[3];
const circleProgress5 = document.getElementsByClassName("psr_circle_progress")[4];
const circleProgress6 = document.getElementsByClassName("psr_circle_progress")[5];
const circleProgress7 = document.getElementsByClassName("psr_circle_progress")[6];

const shivPath = document.getElementsByClassName("shiv_animation_start")[0];

document.addEventListener('scroll', function () {
    for (let i = 0; i < 12; i++) {
        if(isInViewport(document.getElementsByClassName("progress-bar")[i])){
            document.getElementsByClassName("progress-bar")[i].classList.add("psr_progress_width");
        }
    }

    if(isInViewport(circleProgress1)){
        document.getElementsByClassName("psr_stroke_50")[0].classList.add("psr_s_50");
    }
    if(isInViewport(circleProgress2)){
        document.getElementsByClassName("psr_stroke_50")[1].classList.add("psr_s_90");
    }
    if(isInViewport(circleProgress3)){
        document.getElementsByClassName("psr_stroke_50")[2].classList.add("psr_s_40");
    }
    if(isInViewport(circleProgress4)){
        document.getElementsByClassName("psr_stroke_50")[3].classList.add("psr_s_50");
    }
    if(isInViewport(circleProgress5)){
        document.getElementsByClassName("psr_stroke_50")[4].classList.add("psr_s_90");
    }
    if(isInViewport(circleProgress6)){
        document.getElementsByClassName("psr_stroke_50")[5].classList.add("psr_s_50");
    }
    if(isInViewport(circleProgress7)){
        document.getElementsByClassName("psr_stroke_50")[6].classList.add("psr_s_10");
    }
    if(isInViewport(shivPath)){
        document.getElementsByClassName("shiv_svg_animation")[0].classList.add("shiv_svg_path");
        document.getElementsByClassName("shiv_svg_animation")[1].classList.add("shiv_svg_path");
    }

}, {
    passive: true
});