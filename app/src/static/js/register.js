const email = document.querySelector('#email'),
    username = document.querySelector('#username'),
    phone = document.querySelector('#phone'),
    password = document.querySelector('#password'),
    pwConfirm = document.querySelector('#confirm');

// 회원가입 등록 함수
function register() {
    const req = {
        email: email.value,
        username: username.value,
        phone: phone.value,
        password: password.value,
        pwConfirm: pwConfirm.value
    };

    // 서버로 데이터 송신
    fetch('/register', {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req)
    }).then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 오류 발생");
    });
}

// SignUp
const signUpBtn = document.querySelector('#signUpBtn');
signUpBtn.addEventListener('click', register);

// Back 
const backBtn = document.querySelector('#backBtn');
backBtn.addEventListener('click', () => {
    location.href = "/";
});


    