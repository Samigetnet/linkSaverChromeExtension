

const inputBtn = document.querySelector("#input-btn");
const input = document.querySelector("#input-el");
const ulDisp = document.querySelector('#ulDisp');

// finally after lot of tryies
//let myUrl = [];


if (JSON.parse(localStorage.getItem('myUrlStored') === null)) {
    let myUrlStored = localStorage.setItem('myUrlStored', JSON.stringify([]))
}
//let myUrlStored=JSON.parse(localStorage.getItem(myUrlStored))

//-------********-----------

let parsedUrl = JSON.parse(localStorage.getItem('myUrlStored'))
//myUrlStored=localStorage.setItem('myUrlStored', JSON.stringify(parsedUrl))

inputBtn.addEventListener('click', function () {
    if (input.value != '' && input.value != null) {
        parsedUrl.push(input.value)
        myUrlStored = localStorage.setItem('myUrlStored', JSON.stringify(parsedUrl))
        input.value = ''
        displayUrl()
        //localStorage.setItem('url', myUrl)

    }
    else {
        displayUrl()
    }

})

function displayUrl() {
    let listUrl = ''
    for (i = 0; i < parsedUrl.length; i++) {
        listUrl +=
            `<li>
   <a target="_blank" href="${parsedUrl[i]}"> ${parsedUrl[i]}</a>
    </li>`
    }
    myUrl = parsedUrl

    myUrlStored = localStorage.setItem('myUrlStored', JSON.stringify(parsedUrl))
    ulDisp.innerHTML = listUrl

}
let saveTab = document.querySelector('#save-btn');
saveTab.addEventListener('click', function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        parsedUrl.push(tabs[0].url)
        myUrlStored = localStorage.setItem('myUrlStored', JSON.stringify(parsedUrl))
        displayUrl()
        console.log("url")

    })
 

})



let deletBtn = document.querySelector('#delete-btn');
deletBtn.addEventListener('click', function () {

    if (confirm("do you really wnat to delelt all??")) {
        localStorage.clear()
        parsedUrl = []
        displayUrl()

    }

})

