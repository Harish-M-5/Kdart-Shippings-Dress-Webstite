var topcard=document.querySelector(".top-card")
var remove=document.getElementById("remove")
remove.addEventListener("click",()=>{
    topcard.style.display="none"
})
//sub-btn Functionality
var btn = document.getElementById("sub-btn");
var input = document.querySelector(".newsinp");

btn.addEventListener("click", () => {
  var inputValue = input.value.trim();
  if (inputValue.length >= 5) {
    alert("We got your letter. Thank you!");
    input.value = "";
  } else {
    alert("Please enter at least 5 characters.");
  }
});
