const words =  [
    "りんご", "猫", "本", "車", "学校", "電話", "山", "花", "鳥", "海", "空", "魚", "木", "石", "太陽", "月", "星", "風", "砂", "川", "橋", "道", "家", "窓", "ドア", "机", "椅子", "テーブル", "時計", "カレンダー", "写真", "音楽", "絵画", "映画", "テレビ", "ラジオ", "新聞", "雑誌", "本棚", "ベッド", "枕", "タオル", "洗濯機", "冷蔵庫", "料理", "食事", "コーヒー", "お茶", "水", "ビール", "車椅子", "自転車", "犬", "野球", "サッカー", "バスケットボール", "テニス", "ゴルフ", "スイミング", "ランニング", "ハイキング", "旅行", "海外", "冒険", "夢", "笑顔", "涙", "希望", "勇気", "思い出", "友達", "家族", "恋愛", "結婚", "出産", "仕事", "学校", "勉強", "試験", "報告", "プレゼンテーション", "会議", "プロジェクト", "成功", "失敗", "成長", "幸福", "健康", "美容", "自然", "環境", "宇宙", "未来", "過去", "現在", "時間", "年", "月", "日", "週", "季節", "春", "夏", "秋", "冬"
  ];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

const randomWord = getRandomWord();
document.getElementById("random-word").textContent = randomWord;

console.log(randomWord);


function displayCurrentDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('ja-JP', options);
  

  }
  
  // ページ読み込み時に現在の日付を表示する
  window.addEventListener('DOMContentLoaded', displayCurrentDate);

function displayCurrentDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('ja-JP', options);
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
      dateElement.textContent = formattedDate;
    }
    return formattedDate
  }

const key = displayCurrentDate()+randomWord

//1.Save クリックイベント
$("#save").on("click",function(){
    const value = $("#uta").val();
    console.log(value)
    localStorage.setItem(key,value)
});


//2.clear クリックイベント

$("#clear").on("click", function() {
  const clearWord = $("#clear-word").val();
  console.log(clearWord)
  const a = displayCurrentDate() + $("#clear-word").val();
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(key)
    const value = localStorage.getItem(key);
    console.log(value)
    if (key === a) {
      localStorage.removeItem(key);
    }
    console.log(i)
  }
});


//3.ページ読み込み：保存データ取得表示

// for(let i=0 ; i<localStorage.length; i++){
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key)

//     const html = `
//     <tr>
//         <th>${key}</th>
//         <td>${value}</td>
//     </tr>
//     `
//     $("#list").append(html)

// }
  

// // APIエンドポイント
// const apiUrl = 'https://dict.ninjal.ac.jp/api/v1/word/random';

// // ランダムな単語を取得する関数
// async function getRandomWord() {
//   try {
//     // APIからランダムな単語を取得
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     // 単語を表示
//     const word = data.word;
//     console.log(word);
//     // ここで取得した単語を表示するための処理を追加することができます。

//   } catch (error) {
//     console.error('単語の取得に失敗しました', error);
//   }
// }

// // ランダムな単語を取得する関数を呼び出す
// getRandomWord();
