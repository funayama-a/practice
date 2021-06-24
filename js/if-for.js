'use strict'

// let i = 2;
// if(i === 1){
//     console.log("真です");
// }

// == の場合は、左右を比較して、データ型が
//違っても、一致するデータ型に変換した後に比較
// === の場合は、左右を比較して、データ型が
//違った時、等しくないという判断をする

// let testScore=80;
// if(testScore>=80){
//     document.write("合格です！おめでとうございます！");
//  } else if (testScore>=70){
//     document.write("惜しい！あと少し！");
//  } else {
//     document.write("不合格です！もう少し勉強しましょう");
//  }

// const nameList = ["田中","山田","林"];
// console.log(nameList[0]);
// console.log(nameList[;
// console.log(nameList[2]);

//[]は、配列リテラル。
// 複数の値を一つのデータのようにとりあつかうことが出来る
//↑の例でいうと、[]でくくって並べた田中、山田、林は順に0，1，2と
//番号がつく。[]内の配列は頭から順に、0，1，2……と番号が付くので、
//配列名[配列番号]と記述すれば取り出すことが出来る。
//↑では　nameList[0]で田中を取り出せる。

// const nameList = ["田中","山田","林"];
// for (let i = 0; i < nameList.length; i++){
//     console.log(nameList[i]);
// }

// iは0から、nameList.length(つまり値の入っているところ)までループする。
// nameList.lengthは配列に入っているデータの個数を差している。
// 今回は数字の3と同じ意味。iは0～3未満。つまり、0，1，2。
// i++はiが1ずつ増えていく。つまり、0，1，2と変わっていく。
//構文の条件であるi<nameList.lengthを満たさなくなると終了になる。

//練習問題　上記のループ文を以下のように表示しなさい。
//1.田中
//2.山田
//3.林
//4.佐藤
// ヒント　iの値を利用する
// const nameList=["田中","山田","林","佐藤"];
// for(let i = 0; i < nameList.length ; i++){
//     console.log(`${i+1}.${nameList[i]}`);
// }


//continue文　　↓iが2で割り切れる時だけ処理を行なわない
// for (let i=0; i<10; i++){
//     if(i % 2 === 0)continue;
//     console.log(i);
// }

//break文　↓10より大きくなったらループを抜ける
// for (let i=1; i<1000; i++){
//     if (i>10)break;
//     console.log(i)
// }



function scoreCheck(){
    let testScore=document.getElementById('score').value
    if(testScore>=80){
        document.write("合格です！おめでとうございます！");
     } else if (testScore>=70){
        document.write("惜しい！あと少し！");
     } else {
        document.write("不合格です！もう少し勉強しましょう");
     }
}