const changeFocus1 = () => {
    
    let phone1 = document.getElementById("phone1").value
    if(phone1.length === 3){
        document.getElementById("phone2").focus()
    }

}

const changeFocus2 = () => {
    
    let phone1 = document.getElementById("phone2").value
    if(phone1.length === 4){
        document.getElementById("phone3").focus()
    }
    
}

const changeFocus3 = () => {
    
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value
    if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4){
        document.getElementById("token__button").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
        document.getElementById("token__button").removeAttribute("disabled")
    }
}



function getToken(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("token__number").innerText = token

    document.getElementById("token__button").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("token__button").setAttribute("disabled", "true")
    document.getElementById("token__timer__button").style="background-color: #0068FF; color: #FFFFFF; cursor: pointer;"
    document.getElementById("token__timer__button").removeAttribute("disabled")
    getTokenTimer()
}

let interval;
function getTokenTimer(){
    let timer = 180
    interval = setInterval(() => {
        if(timer >= 0){
            const minutes = Math.floor(timer / 60)
            const seconds = timer % 60

            document.getElementById("token__timer").innerText = minutes + ":" + String(seconds).padStart(2, "0")
            timer -= 1
        } else {
            document.getElementById("token__number").innerText = "000000"
            document.getElementById("token__button").style = ""
            document.getElementById("token__button").setAttribute("disabled", "true")

            document.getElementById("token__timer").innerText = "3:00"
            document.getElementById("token__timer__button").style = ""
            document.getElementById("token__timer__button").setAttribute("disabled", "true")

            clearInterval(interval)
        }
    }, 1000)

}

function getTokenTimerConfirm(){
    clearInterval(interval)
    document.getElementById("token__timer__button").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("token__timer__button").setAttribute("disabled", "true")
    document.getElementById("token__timer__button").innerText = "인증완료"
    alert("인증이 완료되었습니다.")

    document.getElementById("signup__button").style = "background-color: #FFFFFF; color: #0068FF; border: 1px solid #0068FF ;cursor: pointer;"
    document.getElementById("signup__button").removeAttribute("disabled")
}

function signup(){
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const pw1 = document.getElementById("pw1").value
    const pw2 = document.getElementById("pw2").value
    const location = document.getElementById("location").value
    const genderWoman = document.getElementById("gender__woman").checked
    const genderMan = document.getElementById("gender__man").checked

    let isValid = true
    if(email.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__email").innerText = ""
    }

    if(name === "") {
        document.getElementById("error__name").innerText = "이름이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__name").innerText = ""
    }

    if(pw1 === ""){
        document.getElementById("error__pw1").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__pw1").innerText = ""
    }

    if(pw2 === ""){
        document.getElementById("error__pw2").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__pw2").innerText = ""
    }

    if(pw1 !== pw2) {
        document.getElementById("error__pw1").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("error__pw2").innerText = "비밀번호가 일치하지 않습니다."
        isValid = false
    }

    if(location !== "서울" && location !== "경기" && location !== "인천"){
        document.getElementById("error__location").innerText = "지역을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__location").innerText = ""
    }

    if(genderWoman === false && genderMan === false){
        document.getElementById("error__gender").innerText = "성별을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__gender").innerText = ""
    }

    if(isValid === true){
        alert("코드캠프 가입을 축하합니다.")
    }
}
