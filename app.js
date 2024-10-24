const product=[
    {
    id: 1,
    image:'product1.jpg',
    title: 'sun screen',
    price: '12',
},

{
    id: 2,
    image:'pic1.png',
    title: 'Lipstick',
    price: '4',
},

{
    id: 3,
    image:'product2.jpg',
    title: 'Facial Moisturizer',
     price: '15',
},

{
    id: 4,
    image:'product4.jpg',
    title: 'Face Cleanser',
    price: '10',
},
{
    id: 5,
    image:'product5.jpeg',
    title: 'hair conditioner',
     price: '15',
},

{
    id: 6,
    image:'product7.jpeg',
    title: 'Hair Shampoo',
     price: '15',
},

{
    id: 7,
    image:'product8.jpeg',
    title: 'Body Mist',
    price: '8',
},

{
    id: 8,
    image:'product9.jpg',
    title: 'Perfume',
    price: '25',
}
];

const categories = [...new Set(product.map((item) => 
    {return item}))];
    let i = 0;
    document.getElementById('root').innerHTML = categories.map((item)=>
        {
        
    var { image, title, price } = item;
    return (
        `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
        </div>
    <div class='left'>
    <p>${title}</p>
    <h2>$ ${price}.00</h2>`+
    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
    `</div>
    </div>`

    );
}).join('')


var cart =[];


function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(){
    let j = 0, total=0.0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            
            var {image, title, price} = items;
            total+=price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
        
    }


    
}

