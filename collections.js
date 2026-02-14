//Top Discount Tag Remove
var topcard=document.querySelector(".top-card")
var remove=document.getElementById("remove")
remove.addEventListener("click",()=>{
    topcard.style.display="none"
})
// Input Search funciton
var searchinp = document.getElementById("search");
var productcont = document.getElementById("productcont");
var productlist = productcont.querySelectorAll(".product-container");

searchinp.addEventListener("keyup", (event) => {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productH2 = productlist[count].querySelector("h2");
        
        if (productH2) {
            var productValue = productH2.textContent.toUpperCase();

            if (productValue.indexOf(enteredValue) < 0) {
                productlist[count].style.display = "none";
            } else {
                productlist[count].style.display = "block";
            }
        }
    }
});
//Check box Filteration
var checkboxes = document.getElementsByName("tags");
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        filterProducts();
    });
});
function filterProducts() {
    var checkedValues = Array.from(checkboxes)
        .filter(i => i.checked)
        .map(i => i.value.toUpperCase());
    productlist.forEach((product) => {
        var productTitle = product.querySelector("h2").textContent.toUpperCase();
        if (checkedValues.length === 0) {
            product.style.display = "block";
        } else {
            var matches = checkedValues.some(tag => productTitle.includes(tag));
            product.style.display = matches ? "block" : "none";
        }
    });
}