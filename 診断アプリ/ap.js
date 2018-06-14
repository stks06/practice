(function(){
    'use strict';
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');

    //連続で結果表示されないようにする//
    function removeAllChildren(element){
        while (element.firstChild){
            //子要素がある限り削除//
            element.removeChild(element.firstChild);
        }

    }


    assessmentButton.onclick = () => {
        const userName = userNameInput.value;
        if(userName.length === 0){
            //名前からの時は終了する//
            return;
    }


    //診断結果を表示させる h3で見出し　表示用にdiv　p段落要素 assess関数で結果の文字列作成　これをpタグ内へ//
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

};



    const answers = [
        '{userName}さんの良いところは声です。{userName}さんの特徴的な声は皆を惹きつけ、印象に残ります。',
        '{userName}さんの良いところは眼差しです。{userName}さんに見つめられると気になってしまうでしょう。',
        '{userName}さんの良いところは情熱です。{userName}さんの情熱に周りの人が感化されるでしょう。',
        '{userName}さんの良いところは知識です。{userName}さんの知識は多くの人を助けます。',
        '{userName}さんの良いところは厳しさです。{userName}さんの厳しさが成功に繋がります。',
        '{userName}さんの良いところはユニークさです。{userName}さんのユニークさを羨ましく感じる人がいます。',
        '{userName}さんの良いところは用心深さです。{userName}さんの用心深さは失敗を減らし、自分だけでなく他人も助けます。',
        '{userName}さんの良いところは決断力です。{userName}さんの決断力を周りの人は頼もしく感じているようです。',
        '{userName}さんの良いところは見た目です。{userName}さんの見た目は周りから一目置かれています。',
        '{userName}さんの良いところは思いやりです。{userName}さんに気に掛けて貰った人がとても感謝しています。',
        '{userName}さんの良いところは感受性です。{userName}さんが感じた事に皆が共感し、わかりあう事ができます。',
        '{userName}さんの良いところは性格です。{userName}さんの性格はまるで神様のようです。',
        '{userName}さんの良いところは節度です。強引すぎない{userName}さんの考えに皆が感謝しています。',
        '{userName}さんの良いところは好奇心です。{userName}さんの好奇心は新しいものを生み出すでしょう。',
        '{userName}さんの良いところは美的センスです。芸術方面に進めば{userName}さんの才能が開花するでしょう。',
        '{userName}さんの良いところはその全てです。ありのままの{userName}さんが素晴らしいです。',
        '{userName}さんの良いところは自制心です。まずいと思った時にしっかりと衝動を抑えられる{userName}さんは周りからの評価が高いです。',
    ];

    function assessment(userName){

        let sumOfcharCode = 0;
        for(let i = 0; i < userName.length; i++){
            //繰り返し行う処理 初期化式 条件式　変化式//
            sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
        }


        const index = sumOfcharCode % answers.length;
        let result = answers[index];
        //名前の合計÷回答数の余り//

        result = result.replace(/{userName}/g, userName);
        return　result;
    }

})();


