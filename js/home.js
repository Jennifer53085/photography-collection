
// 滑鼠動畫
// 設定micro動畫
let micro = document.querySelectorAll('.micro');
let microDiv = document.querySelector('.micro div');
micro[0].onmouseenter = function () {
    microDiv.classList.add('navDivHover');
    micro[0].classList.add('navTexthover');
    micro[1].classList.add('microAni');
    document.querySelector('.micro img').style.cssText = "display:none";
}

micro[0].onmouseleave = function () {
    microDiv.classList.remove('navDivHover');
    micro[0].classList.remove('navTexthover');
    micro[1].classList.remove('microAni');
    document.querySelector('.micro img').style.display = "block";
}
// console.log(micro[0])
micro[1].onmouseenter = () => {
    microDiv.classList.add('navDivHover');
    micro[0].classList.add('navTexthover');
    micro[1].classList.add('microAni');
    document.querySelector('.micro img').style.cssText = "display:none";
}
micro[1].onmouseleave = function () {
    microDiv.classList.remove('navDivHover');
    micro[0].classList.remove('navTexthover');
    micro[1].classList.remove('microAni');
    document.querySelector('.micro img').style.display = "block";
}


// 設定animal動畫
let animal = document.querySelectorAll('.animal');
let animalDiv = document.querySelector('.animal div');

animal[0].onmouseenter = function () {
    animalDiv.classList.add('navDivHover');
    animal[0].classList.add('navTexthover');
    animal[1].classList.add('animalAni');
    document.querySelector('.animal img').style.cssText = "display:none";
}

animal[0].onmouseleave = function () {
    animalDiv.classList.remove('navDivHover');
    animal[0].classList.remove('navTexthover');
    animal[1].classList.remove('animalAni');
    document.querySelector('.animal img').style.display = "block";
}
animal[1].onmouseenter = function () {
    animalDiv.classList.add('navDivHover');
    animal[0].classList.add('navTexthover');
    animal[1].classList.add('animalAni');
    document.querySelector('.animal img').style.cssText = "display:none";
}

animal[1].onmouseleave = function () {
    animalDiv.classList.remove('navDivHover');
    animal[0].classList.remove('navTexthover');
    animal[1].classList.remove('animalAni');
    document.querySelector('.animal img').style.display = "block";
}
// 設定building動畫
let building = document.querySelectorAll('.building');
let buildingDiv = document.querySelector('.building div');

building[0].onmouseenter = function () {
    buildingDiv.classList.add('navDivHover');
    building[0].classList.add('navTexthover');
    building[1].classList.add('buildingAni');
    document.querySelector('.building img').style.cssText = "display:none";
}

building[0].onmouseleave = function () {
    buildingDiv.classList.remove('navDivHover');
    building[0].classList.remove('navTexthover');
    building[1].classList.remove('buildingAni');
    document.querySelector('.building img').style.display = "block";
}
building[1].onmouseenter = function () {
    buildingDiv.classList.add('navDivHover');
    building[0].classList.add('navTexthover');
    building[1].classList.add('buildingAni');
    document.querySelector('.building img').style.cssText = "display:none";
}

building[1].onmouseleave = function () {
    buildingDiv.classList.remove('navDivHover');
    building[0].classList.remove('navTexthover');
    building[1].classList.remove('buildingAni');
    document.querySelector('.building img').style.display = "block";
}

// 設定food動畫
let food = document.querySelectorAll('.food');
let foodDiv = document.querySelector('.food div');
food[0].onmouseenter = function () {
    foodDiv.classList.add('navDivHover');
    food[0].classList.add('navTexthover');
    food[1].classList.add('foodAni');
    document.querySelector('.food img').style.cssText = "display:none";
}

food[0].onmouseleave = function () {
    foodDiv.classList.remove('navDivHover');
    food[0].classList.remove('navTexthover');
    food[1].classList.remove('foodAni');
    document.querySelector('.food img').style.display = "block";
}
food[1].onmouseenter = function () {
    foodDiv.classList.add('navDivHover');
    food[0].classList.add('navTexthover');
    food[1].classList.add('foodAni');
    document.querySelector('.food img').style.cssText = "display:none";
}

food[1].onmouseleave = function () {
    foodDiv.classList.remove('navDivHover');
    food[0].classList.remove('navTexthover');
    food[1].classList.remove('foodAni');
    document.querySelector('.food img').style.display = "block";
}

// 設定human動畫
let human = document.querySelectorAll('.human');
let humanDiv = document.querySelector('.human div');

human[0].onmouseenter = function () {
    humanDiv.classList.add('navDivHover');
    human[0].classList.add('navTexthover');
    human[1].classList.add('humanAni');
    document.querySelector('.human img').style.cssText = "display:none";
}

human[0].onmouseleave = function () {
    humanDiv.classList.remove('navDivHover');
    human[0].classList.remove('navTexthover');
    human[1].classList.remove('humanAni');
    document.querySelector('.human img').style.display = "block";
}
human[1].onmouseenter = function () {
    humanDiv.classList.add('navDivHover');
    human[0].classList.add('navTexthover');
    human[1].classList.add('humanAni');
    document.querySelector('.human img').style.cssText = "display:none";
}

human[1].onmouseleave = function () {
    humanDiv.classList.remove('navDivHover');
    human[0].classList.remove('navTexthover');
    human[1].classList.remove('humanAni');
    document.querySelector('.human img').style.display = "block";
}

// 設定nature動畫
let nature = document.querySelectorAll('.nature');
let natureDiv = document.querySelector('.nature div');
nature[0].onmouseenter = function () {
    natureDiv.classList.add('navDivHover');
    nature[0].classList.add('navTexthover');
    nature[1].classList.add('natureAni');
    document.querySelector('.nature img').style.cssText = "display:none";
}

nature[0].onmouseleave = function () {
    natureDiv.classList.remove('navDivHover');
    nature[0].classList.remove('navTexthover');
    nature[1].classList.remove('natureAni');
    document.querySelector('.nature img').style.display = "block";
}
nature[1].onmouseenter = function () {
    natureDiv.classList.add('navDivHover');
    nature[0].classList.add('navTexthover');
    nature[1].classList.add('natureAni');
    document.querySelector('.nature img').style.cssText = "display:none";
}

nature[1].onmouseleave = function () {
    natureDiv.classList.remove('navDivHover');
    nature[0].classList.remove('navTexthover');
    nature[1].classList.remove('natureAni');
    document.querySelector('.nature img').style.display = "block";
}


// 設定手機板

// 11/16測試調整
// 滑鼠事件
// 設定滑鼠及觸控式螢幕設定
let moveElement = false;

let carousel = document.querySelector('.carousel');
let cells = carousel.querySelectorAll('.carousel_page');
let selectedIndex = 0;
let cellHeight = carousel.offsetHeight;

// 算出轉動的角度值
let theta = 60;
let card = document.getElementsByClassName('card')
let i = 0;
let count_i = i % cells.length;


function rotateCarousel() {
    let angle = theta * selectedIndex * -1;
    carousel.style.transform = `translateZ(0px) rotateX(${angle}deg)`
    //  console.log(carousel.style.transform = `translateZ(0px) rotateX(${angle}deg)`)
}

// 自動輪播
// console.log(carousel.style.transform.rotateX)
// 成功，但效果不好
// function Timer() {
//     if (moveElement == false || moveclick==0) {
//         setInterval(function auto() {
//             selectedIndex--;
//             i--;
//             rotateCarousel();
//         }, 2000)
//     }
//     else {
//         clearInterval(auto);
//     }
// }

// Timer();



//   按上鍵顯示頁面往上滾動
let arrowTop = document.querySelector('.mediaArrowtop');

arrowTop.onclick = function () {
    if (moveElement == false) {

        selectedIndex--;
        i--;
        rotateCarousel();

        return theta;
    }
    else {
        return;
    }
}




// 按下鍵顯示頁面往下滾動
let arrowDown = document.querySelector('.mediaArrowdown');
arrowDown.onclick = function () {
    if (moveElement == false) {

        selectedIndex++;
        i++;
        rotateCarousel();

        return theta;
    }
    else {
        return;
    }
};


// 滑鼠事件判斷滾輪

const events = {
    mouse: {
        down: 'mousedown',
        move: 'mousemove',
        up: 'mouseup'
    },
    touch: {
        down: 'touchstart',
        move: 'touchmove',
        up: 'touchend'
    }
};
let deviceType = '';
// 判斷是否是觸控裝置
const isTouchDevice = () => {
    try {
        document.createEvent('TouchEvent');
        deviceType = 'touch';
        return true;
    }
    catch (e) {
        deviceType = 'mouse';
        return false;
    }
};
isTouchDevice();

// 滑鼠點擊後頁面移動至該頁面
let startY = 0;

window.addEventListener(events[deviceType].down, (e) => {
    startY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    // 開始動作
    moveElement = true;

})
window.addEventListener(events[deviceType].move, (e) => {

    if (moveElement) {
        setTimeout(() => {
            let NewY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
            if (startY - NewY > 0) {
                // 往上加
                selectedIndex--;
                i--;
                rotateCarousel();
                // console.log(deltaY);
                e.stopPropagation();

            }
            else {
                selectedIndex++;
                i++;
                rotateCarousel();
            }

        }, 100)


    }
}
)
window.addEventListener(events[deviceType].up, (stopMovement = (e) => {
    moveElement = false;
    e.stopPropagation();
})
)

// 鍵盤事件keydown點擊往上


