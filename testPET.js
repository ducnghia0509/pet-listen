var testPetApi = "/PETtest"
var historyApi = "/history"
        
function start(){
    getApiCourse(getCourse);
    checkClickBox();
    // handleData()
}


start()




// get data from api
function getApiCourse(callback){
    fetch(testPetApi)
        .then(function(respone){
            return respone.json()
        })
        .then(callback)
}
function createHistory(data, callback){
    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(historyApi, options)
        .then(function(res){
            return res.json();
        })
        .then(callback)
    
}
//function 



function getCourse(datas){

    var classWebDiv = document.querySelector("#web div").className

    datas.forEach(function(data){
        if (`testPET${data.id}` === classWebDiv) {
            localStorage.setItem("nameTest", data.name)
            localStorage.setItem("link", data.link)
            
                // start checkTestTF
                var courseElements = document.querySelector(`.testPET${data.id}`);

                var btnSubmit = document.querySelector(".btn-submit")
            
                btnSubmit.onclick = function(){
                    var disNElement = document.querySelector(".dis-n")
                    disNElement.classList.remove("dis-n")
                    btnSubmit.classList.add("dis-n")

                    var scores = localStorage.getItem("score")

function handleData() {
    var formData = {
        nameTest: localStorage.getItem("nameTest"),
        date: localStorage.getItem("date"),
        score: localStorage.getItem("score"),
        idUser: localStorage.getItem("idUser"),
        link: localStorage.getItem("link")
    }
    if(scores) {

        createHistory(formData)
    }
    // localStorage.removeItem("score","date")
}

var btnSave = document.querySelector(".btn-save")
btnSave.onclick = function(){
    handleData()
}

                    var getResultByUsers = document.querySelectorAll(".check"), getResultList = [];
                    getResultByUsers.forEach(function(getResultByUser){
                        getResultList.push(getResultByUser.value)
                    })
                    console.log(getResultList)
        
                    var valueList = [];
                    (data.question).filter(function(ques){
                        valueList.push(ques.value)
                    })
                    console.log(valueList)


                    //score
                    var score = 0;
                    for ( var i=0; i<valueList.length; ++i){
                        if (valueList[i] === getResultList[i]){
                            score++
                        }
                    }
        
                    var testScoreElement = document.querySelector(".test-result")
                    testScoreElement.innerHTML = `
                        <h4 class="test-score">Your score: ${score}/6!!!</h4>   <br><br>
                        <h3 class="test-score green-color" style="font-weight:600; text-align: left;">TRANSCRIPT</h3>  <br>

                        
                        


                        

                    `
                    

                    // save score
                    localStorage.setItem("score", score)
                    // save date
                    var dates = new Date()
                    var year = dates.getFullYear();
                    var month = dates.getMonth() + 1;
                    var day = dates.getDate();
                    var date = `${day}/${month}/${year}`
                    localStorage.setItem("date", date)


                    
                }
                // end checkTestTF
                
            
                // start function postInfo
                var courseElements = document.querySelector(`.testPET${data.id}`);
        
                var nameTest = document.querySelector(`.testPET${data.id} .test-course`);
        
                var audioTest = document.querySelector(`.testPET${data.id} .audio-test`);
            
                var testQuesBlockParents = document.querySelector(`.testPET${data.id} .block-have-question`);
        
                var html = (data.question).map(function(ques){
                    return `
                    <div class="test-infomation">
                        <div class="test-question">
                            <p>
                                <b>${ques.questionId}.</b>
                                ${ques.title}
                            </p>
                        </div>
                        <div class="chooseYN">
                            <form class="form-btnYN">
                                <input onmousedown="checkClickBox()" type="radio" class="btn-tf" id="yes" name="tf_choose" value="yes">
                                <input onmousedown="checkClickBox()" type="radio" class="btn-tf" id="no" name="tf_choose" value="no">
                            </form> 
                        </div>
                    </div>
                    `
                })
                testQuesBlockParents.innerHTML = html;
                
        
                nameTest.innerHTML = `
                    <a href="#" class="test-course__link">Cambridge PET ${data.id} - Listening Test ${data.id}</a>
        
                `


                audioTest.innerHTML = `
                <audio controls>
                    <source src="${data.audio}" type="audio/ogg">
                </audio>
                `
                // end function postInfo

           
        }
    })

}

// handle with btn to choose YES or NO
function checkClickBox(){
    var btnInputs = document.querySelectorAll(".btn-tf")
    
    btnInputs.forEach(function(btnInput){
        btnInput.onclick = function(){
            var listBtnInputs = btnInput.parentElement.querySelectorAll('.btn-tf')
            listBtnInputs.forEach(function(listBtnInput){
                listBtnInput.classList.remove("check")
                btnInput.classList.add("check")
            })
        }
    })
}


