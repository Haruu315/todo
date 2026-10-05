let todos = [];
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("add");
const resetButton = document.getElementById("reset");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click",() =>{
    const text = taskInput.value;
    todos.push(text);
    const li = document.createElement("li");
    li.textContent = text;
    taskList.appendChild(li);
    });

resetButton.addEventListener("click",() =>{
    todos = [];
    taskList.textContent = "";
    taskInput.value = "";
    });

/* ============================================================
   ↓ 綺麗にした版（AI作成・2026-10-02）
   ※ 全体を「スラッシュ＋アスタリスク」で囲んでコメントにしてあるので、今は動かない。
     上のはるきのコードと同じ名前の const があるため、
     コメントを外すと「同じ名前を2回作った」エラーで全部止まる。
     使うときは、上のコードを消すか、こっちを別ファイルに移す。
   ============================================================

// ---- 1. データ（見えないメモ帳） ----
// アプリを開いた直後は、タスクが1個もないので空の配列から始める。
let todos = [];

// ---- 2. HTMLの部品をつかむ ----
// HTML側の id を名札にして、JSで使う名前を付ける。
// a / b / c のような名前にしないのは、あとで読んで何か分かるようにするため。
const taskInput   = document.getElementById("taskInput"); // 文字を打つ欄
const addButton   = document.getElementById("add");       // 追加ボタン
const resetButton = document.getElementById("reset");     // リセットボタン
const taskList    = document.getElementById("taskList");  // タスクを貼る <ul>（掲示板）

// ---- 3. 追加ボタン：メモ帳に1行書く ＋ 掲示板に1枚貼る ----
addButton.addEventListener("click", () => {
    const text = taskInput.value;   // 入力された文字を、先に変数に取っておく
                                    // （何度も taskInput.value と書かずに済む）

    todos.push(text);               // メモ帳（配列）の最後に書き足す

    const li = document.createElement("li"); // 空の紙（<li>）を1枚作る。まだ画面には出ない
    li.textContent = text;                   // 紙に文字を書く
    taskList.appendChild(li);                // 掲示板（<ul>）に貼る。ここで初めて画面に出る

    taskInput.value = "";           // 入力欄を空の文字で上書きして、次の入力に備える
                                    // （カウンターの count = 0; と同じ「空で上書き」の発想）
});

// ---- 4. リセットボタン：メモ帳も掲示板も白紙に戻す ----
// 追加の「逆」だけど、1個ずつ取り消すのではなく、両方まとめて最初の状態に戻す。
// 片方だけ消すと、メモ帳と画面の中身がずれるので、必ずセットで空にする。
resetButton.addEventListener("click", () => {
    todos = [];                 // メモ帳を白紙に。let を付けないのは、新しく作らず中身を入れ替えるだけだから
    taskList.textContent = "";  // 掲示板の中身を空の文字で上書き → <li> がまとめて消える
});

============================================================ */
