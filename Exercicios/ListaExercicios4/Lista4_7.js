//Cenário 1:
var list1 = [1, 2, 3] [4, 5, 6];
list1.concat(list1);
console.log(list1);
//Saída Esperada: [1, 2, 3, 4, 5, 6]


//Cenário 2:
var list2 = ["a", "b"] ["c", "d"];
list2.concat(list2);
console.log(list2);
//Saída Esperada: ["a", "b", "c", "d"]


//Cenário 3:
var list3 = [] [1, 2, 3];
list3.concat(list3);
console.log(list3);
//Saída Esperada: [1, 2, 3]


//Cenário 4:
var list4 = [1, 2, 3] [];
list4.concat(list4);
console.log(list4);
//Saída Esperada: [1, 2, 3]


//Cenário 5:
var list5 = [] [];
list5.concat(list5);
console.log(list5);
//Saída Esperada: []