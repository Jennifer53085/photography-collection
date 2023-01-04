window.onload = () => {
    function resize() {
        if (window.matchMedia("(max-width: 900px)").matches) {
            /* 窗口小於或等於 900 像素 */

            // 控制input出現及關閉
            let inputD = document.querySelector('.searchmobile input');
            let searchbutton = document.querySelector('.searchmobile button');
            let burger = document.querySelector('.burger');
            const swithburger = { open: "open", close: "close" };
            let btnClass = swithburger.open;
            let switchinput = 0;



            // // 如果按鈕點集之後加入慢動作進場以及解除慢動作關閉
            searchbutton.onclick = function (e) {

                // 如果按鈕點擊之後裡面已經包含.inputDisplay則移除.inputDisplay
                // 移除inputDisplay時進行動畫緩慢關閉
                // 按下按鈕立即執行關閉動畫，並於1秒後執行display:none;

                if (switchinput == 0) {
                    // clearTimeout(inputHidden);
                    // 加入展開動畫，移除關閉動畫
                    inputD.classList.add('inputDisplay');
                    inputD.classList.remove('inputclose');
                    inputD.classList.remove('inputHidden');
                    searchbutton.style.transform = 'rotate(90deg)';
                    setTimeout(() => { inputD.classList.remove('inputDisplay'); }, 200);
                    // console.log(inputD); 
                    e.stopPropagation();
                    // 回傳1
                    return switchinput = 1;
                }

                else {
                    inputD.classList.add('inputclose');
                    searchbutton.style.transform = 'rotate(0deg)';
                    setTimeout(() => {
                        inputD.classList.add('inputHidden');
                        inputD.classList.remove('inputclose');
                        switchinput = 0;
                    }, 195);
                    // console.log(inputD);
                    e.stopPropagation();
                    return switchinput = 0;
                }

            };
            // 點擊除了搜尋按鈕以外的地方時，關閉搜尋列

            window.onclick = function (e) {

                if (!e.target.matches('.searchmobile input')) {
                    if (switchinput == 1) {
                        inputD.classList.add('inputclose');
                        searchbutton.style.transform = 'rotate(0deg)';
                        setTimeout(() => {
                            inputD.classList.add('inputHidden');
                            inputD.classList.remove('inputclose');
                        }, 195);
                        e.stopPropagation();
                        return switchinput = 0;
                    }
                }

            }

            // 點擊漢堡時控制nav出現關起來
            const nav = document.querySelector('nav');
            const li = document.querySelectorAll('nav li');


            // 漢堡動畫
            // let lines = document.querySelectorAll('.line');
            burger.onclick = (e) => {
                // 漢堡動畫
                // 關閉
                if (burger.classList.contains(swithburger.open)) {
                    // 導覽列
                    nav.classList.remove('navDisplay');
                    // 漢堡
                    burger.classList.remove(btnClass);
                    console.log("1")
                    btnClass = swithburger.close;
                    // 搜尋列
                    inputD.classList.add('inputclose');
                    searchbutton.style.transform = 'rotate(0deg)';
                    setTimeout(() => {
                        inputD.classList.add('inputHidden');
                        inputD.classList.remove('inputclose');
                        switchinput = 0;
                    }, 195);
                    e.stopPropagation();
                    // console.log(lines);
                }
                // 開啟
                else if (inputD.classList.contains('inputHidden')) {
                    // 導覽列
                    nav.classList.add('navDisplay');
                    // 漢堡
                    burger.classList.remove(btnClass);
                    btnClass = swithburger.open;
                    // 搜尋列
                    inputD.classList.add('inputDisplay');
                    inputD.classList.remove('inputclose');
                    inputD.classList.remove('inputHidden');
                    searchbutton.style.transform = 'rotate(90deg)';
                    setTimeout(() => { inputD.classList.remove('inputDisplay'); }, 200);
                    e.stopPropagation();

                }
                // 關閉
                else if (!inputD.classList.contains('inputHidden')) {
                    // 導覽列
                    nav.classList.remove('navDisplay');
                    // 漢堡
                    burger.classList.remove(btnClass);
                    btnClass = swithburger.close;
                    // 搜尋列
                    inputD.classList.add('inputclose');
                    searchbutton.style.transform = 'rotate(0deg)';
                    setTimeout(() => {
                        inputD.classList.add('inputHidden');
                        inputD.classList.remove('inputclose');
                        switchinput = 0;
                    }, 195);
                    e.stopPropagation();

                }
                // 開啟
                else if (burger.classList.contains(swithburger.close)) {
                    // 導覽列
                    nav.classList.add('navDisplay');
                    // 漢堡
                    burger.classList.remove(btnClass);
                    btnClass = swithburger.open;
                    // 搜尋列
                    inputD.classList.add('inputDisplay');
                    inputD.classList.remove('inputclose');
                    inputD.classList.remove('inputHidden');
                    searchbutton.style.transform = 'rotate(90deg)';
                    setTimeout(() => { inputD.classList.remove('inputDisplay'); }, 200);
                    e.stopPropagation();
                }
                void burger.offsetWidth;
                burger.classList.add(btnClass);



                setTimeout(() => {
                    li.forEach(li => li.classList.add('liDisplay'))
                }, 100)
                // 如果nav裡面包含navDisplay，則li移除class
                if (nav.classList.contains('navDisplay')) {
                    li.forEach(li => li.classList.remove('liDisplay'));
                }

            }
            // top進入淡出
            const top1 = document.getElementById('top');
            window.onscroll = () => {
                //   top淡入淡出
                let offset = window.pageYOffset / document.documentElement.scrollHeight;
                if (offset > 0) {
                    top1.classList.add('top');
                }
                else {
                    top1.classList.remove('top');
                }
            }

        } else {
            // 網頁版
            const h4 = document.getElementsByTagName('h4');
            const h6 = document.getElementsByTagName('h6');
            const scrollThumb = document.querySelector(".scroll_track");
            const scrollBar = document.querySelector(".scroll_Bar");
            const top1 = document.getElementById('top');
            const textbox = document.getElementsByClassName('text');
           

            window.addEventListener("scroll", function (e) {
                // top
                let offset = window.pageYOffset / document.documentElement.scrollHeight;
                if (offset > 0) {
                    top1.classList.add('top');
                }
                else {
                    top1.classList.remove('top');
                }

                // 滑到什麼變成文字展開
                if (offset >= 0) {
                    h6[0].style.display = 'block';
                    h4[0].style.display = 'block';
                    textbox[0].classList.add('textbox');


                }
                if (offset > 1 / textbox.length * 0.8) {
                    h4[1].style.display = 'block';
                    h6[1].style.display = 'block';
                    textbox[1].classList.add('textbox');


                }
                if (offset > 2 / textbox.length * 0.8) {
                    h4[2].style.display = 'block';
                    h6[2].style.display = 'block';
                    textbox[2].classList.add('textbox');

                }
                if (offset > 3 / textbox.length * 0.8) {
                    h4[3].style.display = 'block';
                    h6[3].style.display = 'block';
                    textbox[3].classList.add('textbox');

                }
                if (offset > 4 / textbox.length * 0.8) {
                    h4[4].style.display = 'block';
                    h6[4].style.display = 'block';
                    textbox[4].classList.add('textbox');

                }
                if (offset > 5 / textbox.length * 0.8) {
                    h4[5].style.display = 'block';
                    h6[5].style.display = 'block';
                    textbox[5].classList.add('textbox');

                }


                // 捲軸
                let winScroll = document.documentElement.scrollTop;
                let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                let scrolled = winScroll / height;
                let ballheight = scrollBar.clientHeight - scrollThumb.offsetHeight;

                scrollThumb.style.top = scrolled * ballheight + "px";
                e.stopPropagation();
            })


            // 滑鼠事件
            // 設定滑鼠及觸控式螢幕設定
            let moveElement = false;

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
            // 點擊後畫面轉跳至該頁面
            scrollBar.addEventListener('click', ((e) => {
                let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
                let winheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                let ballheight = scrollBar.clientHeight - scrollThumb.offsetHeight;
                let ballScroll = newY - (scrollBar.offsetTop + scrollThumb.offsetHeight / 2);

                document.documentElement.scrollTop = winheight / ballheight * ballScroll;
                scrollThumb.style.top = ballScroll + 'px';
                // moveElement = false;

            }))
            scrollThumb.addEventListener(events[deviceType].down, (e) => {
                e.preventDefault();
                startY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
                // 開始動作
                moveElement = true;
                // console.log(startY);
                // console.log(`bar:${document.querySelector('.scroll_Bar').offsetHeight}`);
                // console.log('開頭:' + document.querySelector('.scroll_Bar').offsetTop);
                // console.log('球:' + scrollThumb.offsetTop);

            })
            let Y;
            document.addEventListener(events[deviceType].move, (e) => {

                if (moveElement) {
                    //  卷軸
                    e.preventDefault();
                    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
                    let ballScroll = scrollThumb.offsetTop - (startY - newY);

                    // console.log(ballScroll);

                    startY = newY;

                    // 頁面跟進


                    // 螢幕可滑動距離:球可滑動距離
                    //(srcollHeight-clientHeight):(bar.offsetHeight-ball.offsetHeight)=scrolltop:ball.top

                    let winheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    let ballheight = scrollBar.clientHeight - scrollThumb.offsetHeight;


                    scrollThumb.style.top = ballScroll + 'px';
                    document.documentElement.scrollTop = winheight / ballheight * ballScroll;

                    // 限制球的活動範圍
                    if (ballScroll >= (scrollBar.clientHeight - scrollThumb.offsetHeight)) {
                        scrollThumb.offsetHeight = (scrollBar.offsetHeight - scrollThumb.offsetHeight);
                        moveElement = false;
                    }
                    if (ballScroll <= -3) {
                        scrollThumb.offsetHeight = 0;
                        moveElement = false;
                    }

                    e.stopPropagation();

                }
            }
            )

            document.addEventListener(events[deviceType].up, (stopMovement = (e) => {
                moveElement = false;
                e.stopPropagation();
            })
            )

        }
    }
    resize();
    window.addEventListener('resize', resize, false);
}



// 已經進行RWD
// 開啟畫廊
const imgGallary = document.querySelectorAll('.imgback2');
const newImgG = Array.from(imgGallary).entries();
const model = document.querySelectorAll('.model');
const close1 = document.querySelectorAll('.contain');

// console.log(imgDisplay.src)
// 迴圈抓取array值進行更改
for (let [x, trigger] of newImgG) {

    const toggleList = function (e) {

        // 每張都取出圖片

        model[x].classList.toggle("showmodel");
        console.log(model[x])
        e.stopPropagation();

    }
    trigger.onclick = toggleList;
    close1[x].onclick = toggleList;

    // 動畫
    (function () {


        let carousel = document.getElementsByClassName('carousel')[x],
            slider = carousel.getElementsByClassName('carousel__slider')[0],
            items = carousel.getElementsByClassName('carousel__slider__item'),
            prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
            nextBtn = carousel.getElementsByClassName('carousel__next')[0];

        let width, height, totalWidth, margin = 20,
            currIndex = 0,
            interval, intervalTime = 4000;

        function init() {
            resize();
            move(Math.floor(items.length / 2));
            bindEvents();

            timer();
        }

        function resize() {
            width = Math.max(window.innerWidth * .25, 275),
                height = window.innerHeight * .5,
                totalWidth = width * items.length;

            slider.style.width = totalWidth + "px";

            for (var i = 0; i < items.length; i++) {
                let item = items[i];
                item.style.width = (width - (margin * 2)) + "px";
                item.style.height = height + "px";
            }
        }

        function move(index) {

            if (index < 1) index = items.length;
            if (index > items.length) index = 1;
            currIndex = index;

            for (var i = 0; i < items.length; i++) {
                let item = items[i],
                    box = item.getElementsByClassName('item__3d-frame')[0];
                if (i == (index - 1)) {
                    item.classList.add('carousel__slider__item--active');
                    box.style.transform = "perspective(1200px)";
                } else {
                    item.classList.remove('carousel__slider__item--active');
                    box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
                }
            }

            slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
        }

        function timer() {
            clearInterval(interval);
            interval = setInterval(() => {
                move(++currIndex);
            }, intervalTime);
        }

        function prev() {
            move(--currIndex);
            timer();
        }

        function next() {
            move(++currIndex);
            timer();
        }



        function bindEvents() {
            window.onresize = resize;
            prevBtn.addEventListener('click', () => { prev(); });
            nextBtn.addEventListener('click', () => { next(); });
        }

        init();

    })();

    // --------------------------------


}