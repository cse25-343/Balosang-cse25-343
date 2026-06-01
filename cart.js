function addToCart(name, price) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");
}

function displayCart() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let output = "";

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        output +=
            "<p>" +
            cart[i].name +
            " - P" +
            cart[i].price +
            "</p>";

        total += cart[i].price;
    }

    if (cart.length === 0) {
        output = "<p>Your cart is empty.</p>";
    }

    document.getElementById("cart-items").innerHTML =
        output;

    document.getElementById("total").innerHTML =
        "Total: P" + total;
}

function clearCart() {

    localStorage.removeItem("cart");

    displayCart();
}
