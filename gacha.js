'use strict';

const startImg = document.getElementById('start-img'); //ポチ袋を取得
const resultDivided = document.getElementById('result-area'); //ガチャ結果表示エリアを取得

//ガチャの中身を設定
const config = [
    100000,
    10000,
    5000,
    500
];

//画像をクリックした時の処理
startImg.onclick = () => {
    startImg.classList.add('hidden'); //ポチ袋を画面から消す


    const paragraph = document.createElement('p');
    const img = document.createElement('img');

    //抽選
    const randomNum = Math.floor(Math.random()*100); //1~100の乱数を生成
    if(randomNum<=3){
        paragraph.innerText = config[0].toLocaleString()+'円';
        img.src = './img/ssr.png'; //SSR用の演出に使う画像を設定
        img.className = 'purun'; //SSR用のアニメーションを設定
        paragraph.className = 'ssr';
    }else if(randomNum<=17 +(3)){
        paragraph.innerText = config[1].toLocaleString()+'円';
        img.src = './img/sr.png'; //SR用の演出に使う画像を選択
        img.className = 'poyon'; //SR用のアニメーションを設定
        paragraph.className = 'sr';
    }else if(randomNum<=30 +(3+17)){
        paragraph.innerText = config[2].toLocaleString()+'円';
        paragraph.className = 'r';
    }else if(randomNum<=50 +(3+17+30)){
        paragraph.innerText = config[3].toLocaleString()+'円';
        paragraph.className = 'c';
    }
    img.addEventListener('animationend', ()=>{ //アニメーションが終了した際の処理を設定
        /**ガチャ結果を表示 */
        resultDivided.innerText='';

        const header = document.createElement('h3');
        header.innerText = '🎊ガチャ結果🎊';
        resultDivided.appendChild(header);
    
        resultDivided.appendChild(paragraph);
    
        setTimeout(()=>{
            resultDivided.innerText='';
            startImg.classList.remove('hidden');
        },3000);
    });
    if(img.src){ //高レア演出有りの場合
        resultDivided.appendChild(img);
    }else{ //高レア演出無しの場合
        /**ガチャ結果を表示 */
        resultDivided.innerText='';

        const header = document.createElement('h3');
        header.innerText = '🎊ガチャ結果🎊';
        resultDivided.appendChild(header);
    
        resultDivided.appendChild(paragraph);
    
        setTimeout(()=>{
            resultDivided.innerText='';
            startImg.classList.remove('hidden');
        },3000);
    }
}