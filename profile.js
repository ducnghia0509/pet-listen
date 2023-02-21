var userApi = "/user"




function start(){
    getUserInfo(renderInfos)
}

start()

// function

function getUserInfo(callback){
    fetch(userApi)
        .then(function(respone){
            return respone.json()
        })
        .then(callback)
}


function renderInfos(datas){
    var idUser = localStorage.getItem("idUser")

    var userNameLists = [], classLists=[], studentIDLists=[], imgLists=[]
    datas.forEach(function(data){
        userNameLists.push(data.name)
        classLists.push(data.class)
        studentIDLists.push(data.studentID)
        imgLists.push(data.imgUser)

    })

    if(idUser) {
        var userBlock = document.querySelector(".user-profile")
        userBlock.innerHTML = `
        <div class="user-about">

            <img src="${imgLists[idUser]}" alt="user img" class="user-img"><br>
            <h3 class="user-name">${userNameLists[idUser]}</h3>
        </div>

         <div class="user-infos">
            <p class="user-info">Class:</p>
            <p class="user-title">${classLists[idUser]}</p>
        </div>
        <div class="user-infos">
            <p class="user-info">StudentID:</p>
            <p class="user-title">${studentIDLists[idUser]}</p>
        </div>
        `
    }

    var exitBtn = document.querySelector(".btn-exit")
    exitBtn.onclick = function(){
        localStorage.removeItem("idUser")
    }

}