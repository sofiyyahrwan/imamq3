let imamList = []
let currentIndex = -1

function addImam(){

let name = document.getElementById("imamInput").value

if(name === "") return

imamList.push(name)

document.getElementById("imamInput").value = ""

displayList()
}

function displayList(){

let list = document.getElementById("imamList")

list.innerHTML = ""

imamList.forEach((imam)=>{
let li = document.createElement("li")
li.innerText = imam
list.appendChild(li)
})

}

function rotateImam(){

if(imamList.length === 0){
alert("Tambah imam dulu")
return
}

currentIndex++

if(currentIndex >= imamList.length){
currentIndex = 0
}

let today = imamList[currentIndex]

let nextIndex = currentIndex + 1

if(nextIndex >= imamList.length){
nextIndex = 0
}

let next = imamList[nextIndex]

document.getElementById("todayImam").innerText = today
document.getElementById("nextImam").innerText = next

}
