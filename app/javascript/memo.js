function post (){
    //リクエストを送信する処理
    const form = document.getElementById("form");
    // getElementByIdメゾット　クリック対象となる投稿ボタンの要素を取得できるようになる
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // preventDefault()メソッドとは、既定のイベント（投稿ボタンをクリックするなど）を無効化するメゾッド
        // eとは、イベント発生時の情報を持ったオブジェクト
        const formData = new FormData(form);
        // formDataオブジェクトとは、フォームに入力された値を取得できるオブジェクトのこと
        const XHR = new XMLHttpRequest();
        // XMLHttpRequestオブジェクトとは、JavaScriptを用いてサーバーとHTTP通信行うときに利用するオブジェクト
        XHR.open("POST", "/posts", true);
        // openメゾットとは、リクエストの内容を指定するためのメソッド
        XHR.responseType = "json";
        // responseTypeプロパティとは、レスポンスのデータフォーマット（＝どのような形式のデータにするか）を指定するプロパティ
        // JSONとは、JavaScriptをもとにして構成されたデータフォーマットのこと
        XHR.send(formData);
        // sendメソッドとはリクエストを送信するメソッド
    }); 
};
   
   window.addEventListener('turbo:load', post);
//    addEventListener（アドイベントリスナー）とはイベント発火の際に実行するためのメソッド