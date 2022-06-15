//1-1
function addMaker(a) {//a 는 불변한 상수이다.
    return function (b) {
        return console.log(a + b);
    }
}

addMaker(5)(10);
/*
    addMaker(10)  결과는 function(b) {return 10 + b} 와 같고 함수다.
    (function(b) {return 10 + b; }) (5)와 같으므로 15가 된다.
 */

//1-2
var add5 = addMaker(5);
add5(3);//8
add5(4);//9
//1-3 값으로서의 함수

//1-3
var v1 = 100; //v1은 100을 담고 있다.
var v2 = function () { }; //변수에 함수를 담고 있다.
function f1() { return 100; } //f1 함수는 100을 리턴
function f2() { return function () { }; } //f2 함수는 함수를 리턴

//1-4
var add3 = addMaker(3);
add3(3); //6
add3(4); //7
