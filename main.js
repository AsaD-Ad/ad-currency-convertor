import inquirer from "inquirer";
let currencyList = [
    "USD",
    "AFN",
    "BDT",
    "CNY ",
    "INR ",
    "PKR ",
];
const currency = {
    USD: 1,
    AFN: 72.31,
    BDT: 110.02,
    CNY: 7.25,
    INR: 80.43,
    PKR: 279.09,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Select currency from which you want to exchange",
        type: "list",
        choices: ["USD",
            "AFN",
            "BDT",
            "CNY ",
            "INR ",
            "PKR ",],
    },
    {
        name: "to",
        message: "Select currency to which you want to exchange",
        type: "list",
        choices: ["USD",
            "AFN",
            "BDT",
            "CNY ",
            "INR ",
            "PKR ",],
    },
    {
        name: "selectamount",
        message: "Type amount you want to exchange",
        type: "input",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = currency[user_answer.selectamount];
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);