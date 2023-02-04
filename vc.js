let totalCost = ([
    {
        name: "Dano Milk",
        price: 500
    },
    {
        name: "Taaza Tea",
        price: 200
    },
    {
        name: 'Fresh Sugar',
        price: 300
    }
])

let sum = 0;
for (let i = 0; i < totalCost.length; i++) {
    sum += totalCost[i].price;
}
console.log(sum);