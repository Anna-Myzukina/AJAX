window.onload = function () {
    document.querySelector('#shop_ip').onclick = function() {
        ajaxGet('ip.php');

    }
}

function ajaxGet(url) {
//Объект XMLHttpRequest (или, как его кратко называют, «XHR») дает возможность из JavaScript делать HTTP-запросы к серверу без перезагрузки страницы
    
var request = new XMLHttpRequest();
// константы описывающие состояние запроса - 0 когда строка 7
    //request.readyState // 0 - new
    //request.readyState // 1 - open
    //request.readyState // 2 - send
    //request.readyState // 3 - частично пришел ответ
    //request.readyState // 4 - щтвет пришел полностью
    

    //статус готовности запроса
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            //обрабатываем ответ с сервера
            // innerHTML внутреннее содержимое данного дива с id="myip" мы в него запишем ответ с сервера request.responseText
            document.querySelector('#myip').innerHTML = request.responseText;
        }

    }

    request.open('GET', url);
    request.send();
}