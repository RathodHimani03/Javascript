//take a data 


//create a class 

class Product {

    //  title = "DEFAULT";
    //  imageurl;
    //  description;
    //  price


     constructor (title,image,price,description){

        this.title = title;
        this.imageurl = image;
        this.price = price;
        this.description = description;
     }

}

class ElementAttribute {

    constructor(attrName,attrValue){
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {

constructor(renderHookId){
    this.hookId = renderHookId;
}

    createRootElement(tag,cssClasses,attributes){

        const rootElement = document.createElement(tag);
        if(cssClasses){
            rootElement.className = cssClasses;
        }
        if(attributes && attributes.length>0){
            for(const attr of attributes){
                rootElement.setAttribute(attr.name,attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
        
    }
}


//using inheritance
class ShoppingCart extends Component {

   items = [];

    set cartItems(value){
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total:\$${this.totalAmount.toFixed(2)}</h2>`;

    }

   get totalAmount() {
    const sum = this.items.reduce(
        (prevlue,curItem) => prevlue + curItem.price,
        0
    );
    return sum;
   }
    
   constructor(renderHookId){

    super(renderHookId);
   }
   addProduct(product){
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

   render(){
    const cartEl  =  this.createRootElement('section','cart');
    cartEl.innerHTML = `
    <h2>Total : \$${0}</h2>
    <button>Order Now! </button>` ;
    cartEl.className='cart';
    this.totalOutput = cartEl.querySelector('h2');     return cartEl;
   }
}
//create class for individule item 

class ProductItem {

  constructor (product){
    this.product = product;
  }

   addToCart() {

       App.addProductToCart(this.product);
   }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
    
    <div>
        <img src="${this.product.imageurl}" alt=${this.product.title}>
        <div class= "product-item__content">
            <h2>${this.product.title}</h2>
            <h3>${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart </button>
        </div>
    </div>
    
    
    `;

     const addCarButton = prodEl.querySelector('button');
     addCarButton.addEventListener('click',this.addToCart.bind(this))
return prodEl;
  }

}
class ProductList {
    products= [

        new Product(
          "A pillow",
          "https://m.media-amazon.com/images/I/61y6iRvb-WL.jpg",
          19.99,
          "A soft pillow"
        ),
        
        new Product(
            "A Carpet",
            "https://m.media-amazon.com/images/I/81W6An71HSL._AC_UF894,1000_QL80_.jpg",
             89.99,
             "A carpet which you might like-or not"
        
        )
        

    ];

    constructor (){}

    render() {
        const prodList = document.createElement('ul');
        prodList.className = 'product-list ';
        
        for (const prod of this.products){
            
             const productItem = new ProductItem(prod);
             const prodEl = productItem.render(); 
            prodList.append(prodEl)
        }
        return prodList;
    }

}

 
class Shop{
    render(){
        const renderHook = document.getElementById('app');
        
        //getting both cart and productlist in same page
        this.cart= new ShoppingCart('app'); //now it's a property of class
    
       this.cart.render();
        const productList = new ProductList();
        const prodList =productList.render();

        
        renderHook.append(prodList)
    }
}


class App{
    static init(){
        const shop= new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}


App.init()  //this will execute this init method directly on the class itself.
