const products = document.getElementsByClassName("product");
const modal = document.getElementById("product-modal");


const closeModal = () =>{
    modal.querySelector(".card").style.transform = "scale(0.0,0.0)";
    setTimeout(()=> {
        modal.style.display="none";
        modal.querySelector(".card").style.transform = "scale(1,1)";
        },300);
    }

modal.querySelector("span.close").onclick = function(){
    closeModal();
    
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
    closeModal();
}

/* Back to top */
document.getElementById("back-to-top-btn").onclick = function(){
    document.documentElement.scrollTop = 0;
}

