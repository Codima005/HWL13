// let kitchenProducts = [
// 	{
// 		type: 'grater',
// 		price: 10
// 	},
// 	{
// 		type: 'pastry-bag',
// 		price: 25
// 	},
// 	{
// 		type: 'scale',
// 		price: 5
// 	},
// 	{
// 		type: 'whisk',
// 		price: 15
// 	}
// ];

// let devicesProducts = [
// 	{
// 		type: 'desktop',
// 		price: [100,1000]
// 	},
// 	{
// 		type: 'laptop',
// 		price: [50,1500]
// 	},
// 	{
// 		type: 'smartphone',
// 		price: [80,2000]
// 	},
// 	{
// 		type: 'tablet',
// 		price: [20,1300]
// 	}
// ];

// let cosmeticsProducts = [
// 	{
// 		type: 'blush',
// 		price: 100
// 	},
// 	{
// 		type: 'eyeshadow',
// 		price: 50
// 	},
// 	{
// 		type: 'lipstick',
// 		price: 80
// 	},
// 	{
// 		type: 'nail-polish',
// 		price: 200
// 	},
// 	{
// 		type: 'perfume',
// 		price: 300,
// 	}
// ];

class Product {
    constructor(category, type, price){
        this.category = category;
        this.type = type;
        this.price = price;
    }
    render(){
        return document.write(
            `<tr>
	<td><img src="images/${this.category}/${this.type}.svg" alt="grater" width="50" height="50"></td>
	<td>${this.type}</td>
	<td>${this.price}</td>
</tr>`
        )
    }
};

let grater = new Product (`kitchen`, `grater`, 10);

let PastryBag = new Product(`kitchen`, `pastry-bag`, 25);

let scale = new Product (`kitchen`, `scale`, 5);

let whisk = new Product (`kitchen`, `whisk`, 15);

let desktop = new Product (`devices`, `desktop`, `100-1000`);

let laptop = new Product (`devices`, `laptop`, `50-1500`);

let smartphone = new Product (`devices`, `smartphone`, `80-2000`);

let tablet = new Product (`devices`, `tablet`, `20-1300`);

let blush = new Product (`cosmetics`, `blush`, 100);

let eyeshadow = new Product (`cosmetics`, `eyeshadow`, 50);

let lipstick = new Product (`cosmetics`, `lipstick`, 80);

let nailPolish = new Product (`cosmetics`, `nail-polish`, 200);

// let perfume = new Product (`cosmetics`, `perfume`, 300);

function sposob2Product (category, type, price){
    this.category = category;
    this.type = type;
    this.price = price;
}

sposob2Product.prototype.render = function(){
    return document.write(
        `<tr>
<td><img src="images/${this.category}/${this.type}.svg" alt="grater" width="50" height="50"></td>
<td>${this.type}</td>
<td>${this.price}</td>
</tr>`
    )
};

let perfume = new sposob2Product(`cosmetics`, `perfume`, 300);


document.write(`<table border = "1">
    <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>`)
grater.render();
PastryBag.render();
scale.render();
whisk.render();
desktop.render();
laptop.render();
smartphone.render();
tablet.render();
blush.render();
eyeshadow.render();
lipstick.render();
nailPolish.render();
perfume.render();
document.write(`
</tbody>
</table>`)





