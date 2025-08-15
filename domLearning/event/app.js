// for add a event we have three ways
// 1  onclick props in the tag
//    <img src="" alt="" onclick={} />

// 2 add by select item then apply onclick
//document.getElementById("").onclick=function(){}

// 3 by Adding eventListener
// document.getElementById("photo").addEventListener(
//   "click",
//   function (e) {
//     // timeStamp ,Type,
//     //clientX and CientY
//     //altkKey shiftKey cntrKey,keyCode
//   },
//   false //(event propagation)// for event Bubbling child to parent emans li to ul. true for event capturing parent to child execution by default false hota h
// );

// let solve a problem click onimage and image removed

document.querySelector(".Images").addEventListener("click", function (e) {
  const removeIt = e.target.parentNode;
  removeIt.remove();
});
