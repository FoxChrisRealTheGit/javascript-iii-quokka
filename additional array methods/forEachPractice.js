var numbers = [3, 6, 9, 12, 15];

numbers.forEach((x, i, arr)=>arr[i]+=1);
numbers;
//forEach over numbers and add 1 to each number
//update the original array

var employees = [
    { name: "aaron", pay: 12 },
    { name: "b-bron", pay: 18 },
    { name: "c-ron", pay: 20 },
    { name: "le-bron", pay: 21 },
]

//forEach over employees and give each employee a bump in pay by 3
employees.forEach((x, i, arr)=> x.pay +=3);
employees;