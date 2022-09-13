const changeThemeBtn = document.querySelector('#change-theme');

changeThemeBtn.addEventListener('chnage', ()=> {
    document.body.classList.toggle('dark');
});