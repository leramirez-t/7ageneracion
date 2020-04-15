var productsArray = [
    {
        name:"Sabritas 340gr",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:60,
        imgUrl:"https://images.rappi.com.mx/products/975004512-1580921567558.png?d=200x200&e=webp"
    },
    {
        name:"Paketaxo verde",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:50,
        imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rappi.com.mx%2Fproducto%2F1306702047_975660166&psig=AOvVaw3YBh8WdC-2_2BJspHGouUd&ust=1584932461382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjg7Y-MregCFQAAAAAdAAAAABAH"
    },
    {
        name:"Sabritas Moradas 170gr",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:45,
        imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rappi.com.mx%2Fproducto%2F1306702047_14255&psig=AOvVaw3YBh8WdC-2_2BJspHGouUd&ust=1584932461382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjg7Y-MregCFQAAAAAdAAAAABAN"
    },
    {
        name:"Coca Cola lata 335ml",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:14,
        imgUrl:"https://constantmotions.files.wordpress.com/2011/08/urban-hifi-coca-cola-8175.png"
    },
    {
        name:"Coca Cola sin azúcar",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:18,
        imgUrl:"https://images.rappi.com.mx/products/975607512-1579282803636.png?d=200x200&e=webp"
    },
    {
        name:"Six pack XX Lager",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:84,
        imgUrl:"https://images.rappi.com.mx/products/15324-1580920453948.png?d=200x200"
    },
    {
        name:"Six Pack Modelo Especial",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:112,
        imgUrl:"https://images.rappi.com.mx/products/7501064193156-1571349064824.png?d=200x200&e=webp"
    },
    {
        name:"Six Pack Negra Modelo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:140,
        imgUrl:"https://images.rappi.com.mx/products/895653002095-1571349176987.png?d=200x200&e=webp"
    },
    {
        name:"Jägermeister",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:270,
        imgUrl:"https://images.freshop.com/00083089660402/d6b255063a4f51e45b72c732690dc109_medium.png"
    },
    {
        name:"Alka-seltzer",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:60,
        imgUrl:"https://images.freshop.com/00016500040118/1b1dc11809542e9a198633e7ee4e53a1_medium.png"
    }
    
]


var productsArrayCards = [];

const saveProduct = () => {
    let productName = document.getElementById("botana-1").value;
    let productDescription = document.getElementById("price_botana").value;
    let productPrice = document.getElementById("cantidad_botana").value;
    
    let productObject = {productName,productDescription,productPrice}
    
    console.log(productObject)

    productsArrayCards.push(productObject);
    printProducts();
}

const printProducts = () => {
    document.getElementById("koders-wrapper").innerHTML = ""
    kodersArray.forEach((koder,index) => {
        let koderFullName = koder.koderName + " " + koder.koderLastName;
        let koderAssistances = koder.koderAssistances;
        let koderDeliveredPractices = koder.koderDeliveredPractices;
        let currentContent = document.getElementById("koders-wrapper").innerHTML;  
        let newContent = `
            <tr id='koder-${index}'>
                <td>${index + 1}</td>
                <td><span class="text-uppercase">${koderFullName}</span></td>
                <td>${koderAssistances}</td>
                <td>${koderDeliveredPractices}</td>
                <td>
                    <div class='btn btn-danger' id='btn-delete'>Eliminar</div>
                </td>
            </tr>
            `
        document.getElementById("koders-wrapper").innerHTML= currentContent + newContent;
    })
}

 
var detailproduct = document.getElementById("details-products");
detailproduct.addEventListener("click",saveProduct);
