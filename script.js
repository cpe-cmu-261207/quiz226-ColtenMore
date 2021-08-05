const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const ilength = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
  let sn = document.querySelector('#author')
  let sn2 = sn.innerHTML
  let x = sn2.substr(0, 10)
  let l = ilength.value
  calculation.innerHTML = parseInt(x) + parseInt(l)
  var hide = document.getElementById("author");
  if (hide.style.display === "none") {
    hide.style.display = "block";
  } else {
    hide.style.display = "none";
  }

  var hide2 = document.getElementById("calculation");
  if (hide2.style.display === "block") {
    hide2.style.display = "none";
  } else {
    hide2.style.display = "block";
  }

}

// more codes for Search and Reset buttons here
const ptext = document.getElementById("text")
const search = document.getElementById('search')
const newP = document.createElement('p')
newP.setAttribute('id', 'text2')
search.onclick = () => {
  var newArr = document.getElementById('text').innerHTML
  var myArr = newArr.split(" ");
  for(let i=0; i<myArr.length; i++){
    if(myArr[i].length === ilength){
      document.getElementById('text2').innerHTML += ' <span>' + myArr[i] + '</span>'
    }else{
      document.getElementById('text2').innerHTML += ' '+myArr[i]
    }
  }
  const hr = document.querySelector('hr')
  hr.appendChild(newP)

  var hide3 = document.getElementById("text");
  if (hide3.style.display === "none") {
    hide3.style.display = "block";
  } else {
    hide3.style.display = "none";
  }

  var hide4 = document.getElementById("text2");
  if (hide4.style.display === "block") {
    hide4.style.display = "none";
  } else {
    hide4.style.display = "block";
  }
}