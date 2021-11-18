const products = document.getElementsByClassName("product");
const modal = document.getElementById("product-modal");


modal.querySelector("span.close").onclick = function(){
    modal.style.display = "none";
}

/* Product onclick handler */
for (let prod of products) {
    prod.onclick = function(){
        const content = prod.innerHTML;
        modal.querySelector("div.content").innerHTML = content;
        modal.style.display = "flex";
    }
}
modal.onclick = function(){
    modal.style.display = "none";
}

/* Back to top */
document.getElementById("back-to-top-btn").onclick = function(){
    document.documentElement.scrollTop = 0;
}

