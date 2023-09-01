//take a data 


//create a class 

class Product {

    //  title = "DEFAULT";
    //  imageurl;
    //  description;
    //  price


    constructor(title, image, price, description) {

        this.title = title;
        this.imageurl = image;
        this.price = price;
        this.description = description;
    }

}

class ElementAttribute {

    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {

    constructor(renderHookId,shouldRender = true)
    {
        this.hookId = renderHookId;
        if(shouldRender){
            this.render();
        }
        
    }


    //method overriding

    render() { }
    createRootElement(tag, cssClasses, attributes) {

        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;

    }
}


//using inheritance
class ShoppingCart extends Component {

    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total:\$${this.totalAmount.toFixed(2)}</h2>`;

    }

    get totalAmount() {
        const sum = this.items.reduce(
            (prevlue, curItem) => prevlue + curItem.price,
            0
        );
        return sum;
    }

    constructor(renderHookId) {

        super(renderHookId);
    }
    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
    <h2>Total : \$${0}</h2>
    <button>Order Now! </button>` ;
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2'); return cartEl;
    }
}
//create class for individule item 

class ProductItem extends Component {

    constructor(product, renderHookId) {
        super(renderHookId, false);
        this.product = product;
        this.render();
    }

    addToCart() {

        App.addProductToCart(this.product);
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item');
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
        addCarButton.addEventListener('click', this.addToCart.bind(this))

    }

}
class ProductList extends Component {
    products = [];


    constructor(renderHookId) {

        super(renderHookId);
        this.fetchProducts();

    }

    fetchProducts() {
        this.products = [
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
        this.renderProducts();
         
    }

    renderProducts(){
        for (const prod of this.products) {

            new ProductItem(prod, 'prod-list');


        }

    }
    render() {
        const prodList = this.createRootElement('ul', 'product-list',
            [new ElementAttribute('id', 'prod-list')])

            if(this.products && this.products.length > 0){
                this.renderProducts();
            }

       
    }

}


class Shop  {

    constructor() {
        
        this.render();
    }

    render() {

        //getting both cart and productlist in same page
        this.cart = new ShoppingCart('app'); //now it's a property of class


        new ProductList('app');




    }
}


class App {
    static init() {
        const shop = new Shop();

        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}


App.init()  //this will execute this init method directly on the class itself.
