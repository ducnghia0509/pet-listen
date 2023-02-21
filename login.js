var userApi = "/user"
var testPetApi = "/PETtest"

console.log()




function start(){
    getUserInfo(checkLogIn)
}

start()
// function

function getUserInfo(callback){
    fetch(userApi)
        .then(function(respone){
            // console.log(respone.json())
            return respone.json()
        })
        .then(callback)
}

var inputCheck 

function checkLogIn(datas) {
    var userNameLists = [], passWdLists=[]
    datas.forEach(function(data){
        userNameLists.push(data.userName)
        passWdLists.push(data.password)
    })

    // Check userName and password--after user enter btn Login
    var btnLogIn = document.querySelector('.login-btn')

    var i
    
    btnLogIn.onclick = function (checkClick){
        var passWdListLength = passWdLists.length
        
        i = 0;


        for ( ; i<passWdListLength; ++i){
            var passWdLogIn = document.querySelector('input[name="password"]').value
            var userNameLogIn = document.querySelector('input[name="name"]').value       
            inputCheck = ((passWdLists[i] == passWdLogIn) && (userNameLists[i] == userNameLogIn))
            if (inputCheck) {
                localStorage.setItem("idUser" , i)
                return 0
            }
        }
        var messageElement = document.querySelector(".error-message")
        messageElement.innerHTML = `
            <p class="error-title">Bạn đã nhập sai User Name hoặc Password, hãy nhập lại!!!<p>
        `
        checkClick.preventDefault()
    }
}