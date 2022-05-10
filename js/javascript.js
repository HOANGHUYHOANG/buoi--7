// function sub() {
//     var arr = document.getElementsByTagName('input')
//     var username = arr[0].value;
//     var password = arr[1].value;
//     if (username == "" || password == "") {
//         alert("fill information ");
//         return;
//     }
// }
let count = 0;

function myFunction() {
    if (count >= 3) {
        // document.getElementById("btn").addEventListener("click", function() {
        //     return;
        // });
        document.getElementById("btn").onclick = doSomeThing;
    } else {

        let text;
        let username = prompt("Enter your Username :")
        if (username == null || username == '') {
            text = "Username is False";
            count++;

        } else {
            text = username;
        }
        document.getElementById("demo").innerHTML = text;

    }

    function doSomeThing() {
        return;
    }


}