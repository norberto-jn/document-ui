import { getCard } from "./component/card.js"

var url = "data/data.json"


var xhttp = new XMLHttpRequest()
xhttp.open("GET", url, true)

xhttp.onreadystatechange = async function () {

    if (xhttp.readyState == 4 && xhttp.status == 200) {
        let response = JSON.parse(xhttp.responseText)
        getTheme(response.data)
        getChaptersTitles(response.data)
        getParagraphs(response.data)
    }

}

xhttp.send()

function getTheme(object) {
    for (const data of object) {
        console.log('tema :', data.theme)
    }
}


function getChaptersTitles(object) {
    for (const data of object) {
        for (const chapter of data.chapter) {
            console.log('titulo : ', chapter.title)
        }
    }
}

async function getParagraphs(object) {
    for (const data of object) {
        for (const chapter of data.chapter) {
            for (const paragraph of chapter.paragraphs) {
                const card = await getCard(paragraph.code, paragraph.title, paragraph.content, paragraph.codelink)
                document.getElementById('document').innerHTML += card
                request(paragraph.codelink, `link_${paragraph.code}`)
            }
        }
    }
}


function request(url, id) {

    var http = new XMLHttpRequest()
    http.open("GET", url, true)

    http.onreadystatechange = function () {

        if (http.readyState == 4 && http.status == 200) {
            document.getElementById(id).innerHTML = http.responseText
        }

    }

    http.send()
}