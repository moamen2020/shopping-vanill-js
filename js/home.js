
//  This is Code For Product Box


//  Fillter When Click Button 

const button_group = document.getElementById('button-group'),
      button_child = button_group.children,
      product = document.getElementById('product');
    

button_group.onclick = function (e) {

    button_child[0].setAttribute('class', '');
    button_child[1].setAttribute('class', '');
    button_child[2].setAttribute('class', '');

    e.target.classList.add('active');


    if (button_child[0].classList[0] == 'active') {
        product.children[0].classList.remove('active', 'hide');
        product.children[1].classList.remove('active', 'hide');
        product.children[2].classList.remove('active', 'hide');
        product.children[3].classList.remove('active', 'hide');
        product.children[0].classList.add('active');
        product.children[1].classList.add('active');
        product.children[2].classList.add('active');
        product.children[3].classList.add('active');



    } else if (button_child[1].classList[0] == 'active') {

        product.children[0].classList.remove('active', 'hide');
        product.children[1].classList.remove('active', 'hide');
        product.children[2].classList.remove('active', 'hide');
        product.children[3].classList.remove('active', 'hide');
        product.children[0].classList.add('active');
        product.children[1].classList.add('hide');
        product.children[2].classList.add('active');
        product.children[3].classList.add('hide');


    } else if (button_child[2].classList[0] == 'active') {

        product.children[0].classList.remove('active', 'hide');
        product.children[1].classList.remove('active', 'hide');
        product.children[2].classList.remove('active', 'hide');
        product.children[3].classList.remove('active', 'hide');
        product.children[0].classList.add('active');
        product.children[1].classList.add('hide');
        product.children[2].classList.add('active');
        product.children[3].classList.add('active');

    }
};





// =============================================================

//  Add Product In 
(function(){
    const add_cart = document.querySelectorAll('.add-cart');

    add_cart.forEach(function(btn) {
        btn.addEventListener('click', function (even) {

            if (even.target.classList.contains("add-cart")) {
                let fullPath = even.target.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos);


                const item = {};
                item.img = `./img${partPath}`;


                let name = even.target.parentElement.nextElementSibling.children[0].textContent;
                item.name = name;

                let price = even.target.parentElement.nextElementSibling.children[1].textContent;
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;


                const cartItem = document.createElement('div');

                cartItem.classList.add("cart-item");

                cartItem.innerHTML = `
                    <img src="${item.img}" alt="">
                    <h6>${item.name}</h6>
                    <p>1x - $<span class="price" id="price-cart">${item.price}</span></p>
                `;

                // select cart 
                const cart = document.getElementById('list');
                const padge = document.getElementById('badge');

                cart.insertBefore(cartItem, cart.childNodes[5]);
                padge.innerHTML = cart.children.length -1
                alert(item.name + 'added to the cart');
                showTotal();
            }
        });
    });

    function showTotal() {
        const total = [];
        const items = document.querySelectorAll('#price-cart');

        items.forEach((item) => {
            total.push(parseFloat(item.textContent))
        });

        

        const totalMoney = total.reduce(function(total, item) {
            total += item;
            return total;
        }, 0)
        const finalMoney = totalMoney.toFixed(2)

        document.getElementById('total-price').textContent = finalMoney;

    }
})();







