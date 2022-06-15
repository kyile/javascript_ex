//map 함수
//리팩터링의 핵심은 중복을 제거하고, 의도를 드러내는것이다.
//1-2.4 회원목록 중 여러명 찾기
var users = [
    { id: 1, name: "ID", age: 32 },
    { id: 2, name: "HA", age: 25 },
    { id: 3, name: "BJ", age: 32 },
    { id: 4, name: "PJ", age: 28 },
    { id: 5, name: "JE", age: 27 },
    { id: 6, name: "JM", age: 32 },
    { id: 7, name: "HI", age: 24 },
];

//ex_filter
function filter(list, predicate) {
    var new_list = []; //함수형 프로그래밍적인 관점에서 new를 붙이는 것은 매우 상징적인의미이다.
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) new_list.push(list[i]);//predicate 가 참일때만, 해당문구를 실행 
    }
    return new_list;
}

//ex_filter
var users_under_30 = filter(users, function (user) { return user.age < 30 });

//ex_filter
var users_over_30 = filter(users, function (user) { return user.age >= 30 });

//30 보다 작은 나이
var ages = [];
for (var i = 0, len = users_under_30.length; i < len; i++) {
    ages.push(users_under_30[i].age);
}
console.log(ages);

//30보다크거나 같은 나이의 사람이름
var names = [];
for (var i = 0, len = users_over_30.length; i < len; i++) {
    names.push(users_over_30[i].name);
}
console.log(names);

//바꾼 코드 map  코드
function map(list, iteretee) {
    var new_list = [];
    for (var i = 0, len = list.length; i < len; i++) {
        new_list.push(list[i]);
    }
    return new_list;
}

//1-9 map 사용
var ages = map(users_under_30, function (user) { return user.age; });
console.log(ages);