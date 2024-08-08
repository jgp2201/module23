const objects = [
    {
        name: "maggi",
        priceDollar: 1,
    },
    {
        name: "soap",
        priceDollar: 3,
    },
    {
        name: "perfume",
        priceDollar: 10,
    },
];

function pricerupee(price){
    return price*80;
}

const indianprice = objects.map((item)=>({

    ...item,
    priceINR: pricerupee(item.priceDollar)

}))
console.log(indianprice);
