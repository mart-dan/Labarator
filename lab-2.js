// #1
var test = 'foo';

function testScope() {
	  var test = 'baz';
  	console.log(test);     
}

testScope(); // Виводить в консоль 'baz', по причині створення тимчасової змінної з таким значенням. Змінна "Існує" тільки внутрі функції.
console.log(test); // Виводить в консоль 'foo', по причині того що йде виклик змінной яка оголошенна не внутрі функції.



// #2
var test = 'foo';

function testScope() {
	  test = 'baz';
  	console.log(test);     
}

console.log(test); // Виводить в консоль 'foo', так як команда виконується перед функцієй зміни змінної яка і несе таке значення
testScope(); // Виводить в консоль 'baz', так як функція виводить зміненну змінну test яка була же зміннена в цій же функції
console.log(test); // Виводить в консоль 'baz', так як команда викликає зміненну змінну test



// #3
var test;
test = 'foo';
var test = 'baz';

console.log(test); // Виводить в консоль 'baz', так як команда викликає змінну test. На почадку була оголошенна test и присвоєна їй значення 'baz'. Но потім змінну перестворили 
                   // зі значенням 'baz'

// #4
function foo() {
  console.log(1);
} 

var foo;

foo = function() {
  console.log(2);
};

foo(); // Виводить в консоль "2", по причині що змінній foo надали зміст команди с виводом "2" в консоль. А так як існує функція з таким же іменем то її замінила змінна-команда Foo


// #5
var test = 'foo';
function foo() {
    return test;
}
function baz(callback) {
    return callback();
}
baz(foo); // Виводить в консоль foo, так як через baz викликає функції foo.  А функція foo викликає змінну test в якії же вписан 'foo'


// #6
var test = 'foo';
function foo() {
    return test;
}
function baz(callback) {
    var test = 'baz';
    return callback();
}
baz(foo); // Виводить в консоль foo, так як команда baz викликає функції foo яка використовує змінну test яка була оголошенна не в функції а глобально. Із-за чого і foo


// #7
var test = 'foo';
function foo() {
    return test;
}
function baz(callback) {
    this.test = 'baz';
    var binded = callback.bind(this);
    return binded();
}
baz(foo); // Виводить в консоль baz. Із-за привязки к значенням this, яка була створення через .bind


// #8
var test = 'foo';
var foo = function () {
    return test;
};
var baz = function (callback) {
    var test = 'baz';
    return callback();
};
baz(foo); // Виводить в консоль foo. Так як foo який передаєтся в baz, колбеком, посилається на глобальний об'єкт test а не на функцію.


// #9
var test = 'qwerty';
var a = 4;

function foo() {
    if (a === 4) {
      	var test = 'bazinga';
    }
  	console.log(test);
}

foo(); // Виводить в консоль foo так як при строгому зрівнянні вернулось значення true і виконалась дія оголошення змінної в функції. Використовуєтся змінная що в функції

// #10
var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x); 
})(); // Перша .log  нічого не виводить undefined але друга 10. Так виводить по причині що var оголошення змінной зміщується а присвоєння ні. Команда викликаєтся сразу після написання 

// #11
(function() {
   var a = b = 5;
})();
console.log(b);// Змінна a це є локальна змінна функції із-за чого вона існує опять же тільки в ній, змінна b оголошуєтся як глобальна. Із-за чого команда викликає 5

// #12
function test() {
   console.log(a); // undefined, із-за того что хоть оголошення перетаскується вверх але присвоєння осталось на місці. 
   console.log(foo()); // 2, із-за того що при функція foo повертає значення 2.
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();

