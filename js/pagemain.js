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

            // 點擊圖片後可以放大全螢幕
            // 文字
            const EveryText = document.querySelectorAll('.text');
            // 秀出來的文字框
            const textDisplay = document.querySelector('.modeltext');

            // 秀出圖片
            const imgGallary = document.querySelectorAll('.pic>img');
            const newImgG = Array.from(imgGallary).entries();
            const model = document.querySelector('.model');
            const imgDisplay = document.querySelector('.imgDisplay');
            const close1 = document.querySelector('.contain');
            // console.log(imgDisplay.src)
            // 迴圈抓取array值進行更改
            for (let [index, trigger] of newImgG) {


                const toggleList = function (e) {

                    // 每張都取出圖片
                    e.stopPropagation();
                    model.classList.toggle("show");
                    imgDisplay.classList.toggle("imgshow");
                    close1.classList.toggle("Xshow");
                    // 秀出該圖
                    imgDisplay.src = imgGallary[index].src;
                    // 秀出該文字
                    textDisplay.innerHTML = EveryText[index].innerHTML;

                }
                trigger.onclick = toggleList;
                model.onclick = toggleList;

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

        }
        else {

            /*窗口大於 900 像素 */
            const top1 = document.getElementById('top');
            const imgGallary = document.querySelectorAll('.pic>img');
            const scrollThumb = document.querySelector(".scroll_track");
            const h4 = document.getElementsByTagName('h4');
            const h6 = document.getElementsByTagName('h6');
            const textbox = document.getElementsByClassName('text');

            // let switchCtrl=false;

            // console.log(window.innerHeight)



            window.addEventListener("scroll", function () {
                if (moveElement == false) {

                    let offset = window.pageYOffset / document.documentElement.scrollHeight;

                    //   top淡入淡出
                    if (offset > 0) {
                        top1.classList.add('top');
                    }
                    else {
                        top1.classList.remove('top');
                    }

                    // 轉軸滾動後圖片展開
                    if (offset >= 0.05) {
                        imgGallary[0].classList.add('scrollimg');
                        imgGallary[0].style.height = '65vh';
                        h6[0].style.display = 'block';
                        h4[0].style.display = 'block';
                        textbox[0].classList.add('textbox');
                    }
                    if (offset > 1 / imgGallary.length * 0.9) {
                        imgGallary[1].classList.add('scrollimg');
                        imgGallary[1].style.height = '65vh';
                        h4[1].style.display = 'block';
                        h6[1].style.display = 'block';
                        textbox[1].classList.add('textbox');

                    }
                    if (offset > 2 / imgGallary.length * 0.9) {
                        imgGallary[2].classList.add('scrollimg');
                        imgGallary[2].style.height = '65vh';
                        h4[2].style.display = 'block';
                        h6[2].style.display = 'block';
                        textbox[2].classList.add('textbox');
                    }
                    if (offset > 3 / imgGallary.length * 0.9) {
                        imgGallary[3].classList.add('scrollimg');
                        imgGallary[3].style.height = '65vh';
                        h4[3].style.display = 'block';
                        h6[3].style.display = 'block';
                        textbox[3].classList.add('textbox');
                    }
                    if (offset > 4 / imgGallary.length * 0.9) {
                        imgGallary[4].classList.add('scrollimg');
                        imgGallary[4].style.height = '65vh';
                        h4[4].style.display = 'block';
                        h6[4].style.display = 'block';
                        textbox[4].classList.add('textbox');
                    }
                    if (offset > 5 / imgGallary.length * 0.9) {
                        imgGallary[5].classList.add('scrollimg');
                        imgGallary[5].style.height = '65vh';
                        h4[5].style.display = 'block';
                        h6[5].style.display = 'block';
                        textbox[5].classList.add('textbox');
                    }
                    if (offset >= 0.05) {
                        imgGallary[0].classList.add('scrollimg');
                        imgGallary[0].style.height = '65vh';
                        h6[0].style.display = 'block';
                        h4[0].style.display = 'block';
                        textbox[0].classList.add('textbox');


                    }


                    // 卷軸進度條變更

                    let winScroll = document.documentElement.scrollTop;
                    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    let scrolled = winScroll / height;
                    let ballheight = scrollBar.clientHeight - scrollThumb.offsetHeight;


                    scrollThumb.style.top = scrolled * ballheight + "px";
                }

                else if (movement == true) {
                    return;
                }


            });

            // 滑鼠事件
            // 設定滑鼠及觸控式螢幕設定
            let moveElement = false;
            const scrollBar = document.querySelector('.scroll_Bar')

            // 滑鼠點擊後頁面移動至該頁面
            let startY = 0;
            // 點擊後畫面轉跳至該頁面
            scrollBar.addEventListener('click', ((e) => {
                let newY = e.clientY;
                let winheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                let ballheight = scrollBar.clientHeight - scrollThumb.offsetHeight;
                let ballScroll = newY - (scrollBar.offsetTop + scrollThumb.offsetHeight / 2);

                document.documentElement.scrollTop = winheight / ballheight * ballScroll;
                scrollThumb.style.top = ballScroll + 'px';
                // moveElement = false;

            }))
            scrollThumb.addEventListener('mousedown', (e) => {
                e.preventDefault();
                startY = e.clientY;
                // 開始動作
                moveElement = true;
                // console.log(startY);
                // console.log(`bar:${document.querySelector('.scroll_Bar').offsetHeight}`);
                // console.log('開頭:' + document.querySelector('.scroll_Bar').offsetTop);
                // console.log('球:' + scrollThumb.offsetTop);

            })
            let Y;
            document.addEventListener('mousemove', (e) => {

                if (moveElement) {
                    //  卷軸
                    e.preventDefault();
                    let newY = e.clientY;
                    let ballScroll = scrollThumb.offsetTop - (startY - newY);

                    // console.log(ballScroll);

                    startY = newY;

                    // 頁面跟進


                    // 螢幕可滑動距離:球可滑動距離
                    //(srcollHeight-clientHeight):(bar.offsetHeight-ball.offsetHeight)=scrolltop:ball.top

                    let winheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    let ballheight = scrollBar.clientHeight - scrollThumb.offsetHeight;
                    // console.log('ballheight:'+ballheight);
                    // console.log('winheight:'+winheight);

                    scrollThumb.style.top = ballScroll + 'px';
                    document.documentElement.scrollTop = winheight / ballheight * ballScroll;
                    // console.log(document.documentElement.scrollTop);

                    // console.log('ballScroll:'+ballScroll);



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
            document.addEventListener('mouseup', (stopMovement = (e) => {
                moveElement = false;
                e.stopPropagation();
            })
            )

            // 點擊圖片後可以放大全螢幕
            const newImgG = Array.from(imgGallary).entries();
            const model = document.querySelector('.model');
            const imgDisplay = document.querySelector('.imgDisplay');
            const close1 = document.querySelector('.contain');

            // console.log(imgDisplay.src)
            // 迴圈抓取array值進行更改
            for (let [index, trigger] of newImgG) {
                const toggleList = function (e) {

                    e.stopPropagation();
                    model.classList.toggle("show");
                    imgDisplay.classList.toggle("imgshow");
                    close1.classList.toggle("Xshow");
                    imgDisplay.src = imgGallary[index].src;


                };

                trigger.onclick = toggleList;
                model.onclick = toggleList;

            }

        }
    }
    resize();
    window.addEventListener('resize', resize, false);
}