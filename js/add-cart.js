
//  Add Product In 
(function(){
    const add_cart = document.querySelectorAll('.add-cart');

    add_cart.forEach(function(btn) {
        btn.addEventListener('click', function (even) {

            if (even.target.classList.contains("add-cart")) {

                // Get Src Image
                let fullPath = even.target.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos);


                const item = {};

                // Push src image For Product in item
                item.img = `./img${partPath}`;

                // Get Name For Product
                let name = even.target.parentElement.nextElementSibling.children[0].textContent;

                // Push name For Product in item 
                item.name = name;

                // Get price for product 
                let price = even.target.parentElement.nextElementSibling.children[1].textContent;
                let finalPrice = price.slice(1).trim();

                // Push price For Product in item
                item.price = finalPrice;


                // Create Parent Push details Product 
                // Push in Show menu
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




                // Create Parent Push details Product
                // Push In Page cart
                const cartPage = document.createElement('tr');
                cartPage.innerHTML = `
                    <td class="thumbnail-img"><img src="${item.img}" alt="image Product"></td>
                    <td class="number-pr">${item.name}</td>
                    <td class="price-pr">$ ${item.price}</td>
                    <td class="quantity-box"><input type="number" value="1"></td>
                    <td class="total-pr">$ ${item.price}</td>
                    <td class="remove-pr"><i class="fas fa-times cur"></i></td>
                `;


                const tbodyCart = document.getElementById('tbody');
                tbodyCart.insertBefore(cartPage ,tbodyCart.childNodes[5]);


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

        
        //  calculator price for all products
        const totalMoney = total.reduce(function(total, item) {
            total += item;
            return total;
        }, 0)
        const finalMoney = totalMoney.toFixed(2)

        document.getElementById('total-price').textContent = finalMoney;

        document.getElementById('all-price').textContent = finalMoney;

    }

})();
