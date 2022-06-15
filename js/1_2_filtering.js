//1-2.1 회원목록 중 여러명 찾기
var users = [
    { id: 1, name: "ID", age: 32 },
    { id: 2, name: "HA", age: 25 },
    { id: 3, name: "BJ", age: 32 },
    { id: 4, name: "PJ", age: 28 },
    { id: 5, name: "JE", age: 27 },
    { id: 6, name: "JM", age: 32 },
    { id: 7, name: "HI", age: 24 },
];


// 1 //나이가 30보다 작은 사람의수
temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if (users[i].age < 30) temp_users.push(users[i]);
}
console.log(temp_users.length);//4

//2 //30보다 작은 나이 리스트
var ages = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
    ages.push(temp_users[i].age);
}
console.log(ages);//[25,28,27,24]

//3 //30보다 크거나 같은 사람의 수
var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if (users[i].age >= 30) temp_users.push(users[i]);
}
console.log(temp_users.length);

//4 //30보다 크거나 같은 사람의 이름
var names = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
    names.push(temp_users[i].name);
}
console.log(names);
/* 위가 기존 코드 */

//1-2.2 for에서 filter로, if에서 predicate로
//1-6 filter
/* 바꾼 코드 */
function filter(list, predicate) {
    var new_list = []; //함수형 프로그래밍적인 관점에서 new를 붙이는 것은 매우 상징적인의미이다.
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) new_list.push(list[i]);//predicate 가 참일때만, 해당문구를 실행 
    }
    return new_list;
}

//1-7
//30 보다 작은 나이의 사람수
var users_under_30 = filter(users, function (user) { return user.age < 30 });
console.log(users_under_30.length);

//두번째 인자 predicate - 익명함수
//30 보다 작은 나이의 리스트
var ages = [];
for (var i = 0, len = users_under_30.length; i < len; i++) {
    ages.push(users_under_30[i].age);
}
console.log(ages);

//두번째 인자 predicate - 익명함수
//30보다 크거나 같은 사람수
var users_over_30 = filter(users, function (user) { return user.age >= 30 });
console.log(users_over_30.length);

//30보다 크거나같은 사람의 이름
var names = [];
for (var i = 0, len = users_over_30.length; i < len; i++) {
    names.push(users_over_30[i].name);
}
console.log(names);
