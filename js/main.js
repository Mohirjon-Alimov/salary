let netBtn = document.querySelector(".net");
let daBtn = document.querySelector(".da");
let text = document.querySelector(".savol");
let buttonsDiv = document.querySelector(".buttons");
let refresh = document.querySelector(".okbtn");
let container = document.querySelector(".big-container");


netBtn.addEventListener("mouseover", function(){
  let x = Math.random().toFixed(2) *100;
  let y = Math.random().toFixed(2) *100;
  let z = Math.random().toFixed(2) *100;
  
  netBtn.style.left = `${x*2}px`;
  netBtn.style.top = `${y*2}px`;
  netBtn.style.right = `${z*3}px`;
});
netBtn.addEventListener("click", function(){
  console.log("hahahahaha");
})


daBtn.addEventListener("click", function(){
  text.textContent = `Мы и не сомневались, 
   что Вы так думаете.`;
  buttonsDiv.innerHTML = null;
  let okBtn = document.createElement("button");
  okBtn.classList.add("okbtn");
  okBtn.textContent = "OK";
  okBtn.setAttribute("onclick", "location.reload()")
  buttonsDiv.append(okBtn);
  container.classList.remove("bg1");
  container.classList.add("bg2");

})
// refresh.addEventListener("click", function(){
//   ;
// })
