window.addEventListener("DOMContentLoaded", function (e) {
    const orderButtons = document.querySelectorAll("button[data-order]");
    orderButtons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            const button = e.currentTarget;
            const container = button.parentNode;
            const order = {
                id: button.getAttribute("data-order"),
                title: container.querySelector(".title").innerText,
                quantity: container.querySelector(".quantity").innerText,
                price: container.querySelector(".price").innerText,
                contact: container.querySelector(".contact").innerText
            };
            localStorage.setItem("order", JSON.stringify(order));
            const url = window.location.href.replace("buynow.html", "order.html");
            window.location.href = url;
        });
    });
});