let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

const ProductsVID = [
	{
		products: kitchenProducts,
		category: `kitchen`
	},
	{
		products: devicesProducts,
		category: `devices`
	},
	{
		products: cosmeticsProducts,
		category: `cosmetics`
	}
];

class Product {
    constructor(category, type, price){
        this.category = category;
        this.type = type;
        this.price = price;
    }   
    render(){
        if(Array.isArray(this.price)){
        return `<tr>
	<td><img src="images/${this.category}/${this.type}.svg" alt="grater" width="50" height="50"></td>
	<td>${this.type}</td>
	<td>${this.price.join(`-`)}<p>USD</p></td>
</tr>`} else {
    return `<tr>
<td><img src="images/${this.category}/${this.type}.svg" alt="grater" width="50" height="50"></td>
<td>${this.type}</td>
<td>${this.price}<p>USD</p></td>
</tr>`

}
    }
};


let Ps = ProductsVID
    .map(function(productsData){
    return productsData.products
        .map(function(product){
            return new Product(productsData.category,product.type,product.price)
        });
})

.map(function(products){
		return products
        .map(function(product){
            return product.render()
        }).join(``);
	})
	.join(``);

console.log(Ps);

console.log(kitchenProducts);

document.write(`<table border = "1">
    <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
    ${Ps} 
</tbody>
</table>`);





