//1 
let fruits = ["Яблука", "Груша", "Апельсин"];

// додаємо нове значення в "копію"
let shoppingCart = fruits;
shoppingCart.push ("Банан");

// що в fruits і чому?
alert (fruits.length); //4, тому що скопіював "Яблука", "Груша", "Апельсин" і добавив за допомогою push в масив ще один елемент "Банан"

//2

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length/2)]="Классика";
styles.shift();
styles.unshift("Реп","Реггі");

//3
let arr = ["a", "b"];

arr.push (function () {
   alert (this);
})

arr [2] (); //Виведеться "a", "b" та код який був добавлений через push

//4
    function sumInput()
    {
        var result=0,sum=0,temp;
        do{
        result = prompt("Введи число", ' ');
        temp = parseInt(result,10);
        alert(result);
        if (Number.isInteger(temp)) sum+=temp;
        } while(result != null && temp != NaN  && Number.isInteger(temp));
        alert(sum);
    }
//5 
function SumNumb(){
        
}