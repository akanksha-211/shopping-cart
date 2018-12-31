class Cart {
    constructor(){

    }
    render() {
        const overLayContainer = document.getElementById("overlayContainer");
        const overlayHeader = document.createElement('div');
        overlayHeader.className = 'overlay-header';
        overlayHeader.innerHTML = '<header><div class="cart-header"><div class="cart-name">My Cart</div><div class="close">X</div></div></header>'
        overLayContainer.appendChild(overlayHeader);
        const overlayContent = document.createElement('div');
        overlayContent.className = 'overlay-content';
        overlayContent.innerHTML = '<div class="cart-empty"><p>No items in your cart</p><p>Your favourite items are just a click away</p></div>'
        const overlayFooter = document.createElement('div');
        overlayFooter.className = 'overlay-footer';
        overlayFooter.innerHTML = '<div class="overlay-button"><button class="checkout" type="button">Start Shopping</button></div>'
        overLayContainer.appendChild(overlayContent);
        overLayContainer.appendChild(overlayFooter);
        document.querySelector(".close").addEventListener('click', _ => {
            document.getElementById("overlay").style.display = "none";
        });
        document.querySelector(".checkout").addEventListener('click', _ => {
            document.getElementById("overlay").style.display = "none";
        });
    }
}

module.exports = Cart;