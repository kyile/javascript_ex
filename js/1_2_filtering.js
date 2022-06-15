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
