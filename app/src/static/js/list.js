const homeBtn = document.querySelector('#homeBtn');
homeBtn.addEventListener('click', () => {
    location.href = "/list";
});

const logoutBtn = document.querySelector('#logoutBtn');
iconOver(logoutBtn);
logoutBtn.addEventListener('click', () => {
    location.href = "/login";
});

const officeTxt = document.querySelector('#officeTxt');
officeTxt.addEventListener('click', () => {
    location.href = "/list";
});

const myPageBtn = document.querySelector('#mypage');
iconOver(myPageBtn);
