import './styles/main.scss';

const signin = document.querySelector('.signin') //кнопка Авторизоваться

const registration = document.querySelector('.registration') //кнопка Зарегистрироваться
const avatar = document.querySelector('.avatar') //смена аватара
const save = document.querySelector('.save') //кнопка сохранить



const changeData = document.querySelector('.changeData') //ссылка Изменить данные

signin?.addEventListener('click', () => {
    const error = document.querySelector('.error') //ошибка на странице авторизации
    const login = document.querySelector('.login').value //логин на странице авторизации
    const password = document.querySelector('.password').value //пароль на странице авторизации
    
    if(login==="1" && password==="1"){
        document.location.href = '../chat.html';
    } else {
        error.classList.add('show')
    }
    
})

registration?.addEventListener('click', () => {
    error.classList.add('show')
})

save?.addEventListener('click', () => {
    document.location.href = '../profile.html';
})

changeData?.addEventListener('click', (evt) => {
    const linkСhange = document.querySelector('.link') //ссылка Изменить данные
    const saveButton = document.querySelector('.save') //кнопка сохранить
    const input = document.querySelectorAll('input') // находим все input на странице
    
    for (let elem of input) {
        elem.disabled = false;
    }
    
    evt.preventDefault()
    linkСhange.classList.add('hide')
    saveButton.classList.remove('hide')
})


const popup = document.querySelector('.popup') //модальное окно
const popupText = document.querySelector('.popupText') //контент модального окна
avatar?.addEventListener('click', () => {
    popup.classList.remove('hide')
})

popup?.addEventListener('click', (evt) => {
    
    if (evt.target === popup) {
        popup.classList.add('hide')
    }
    
})