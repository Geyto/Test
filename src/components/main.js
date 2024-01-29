

export class Main {
    buttonProduct = document.getElementById('button_product');
    popup = document.getElementById('popup');
    popupExit = document.getElementById('popup-exit');
    buttonFooter = document.getElementById('button-footer')
    form = document.getElementById('form');
    popupTitle = document.getElementById('popup-title');
    popupText = document.getElementById('popup-text');
    formText = document.getElementById('form-text');
    statusRepair = document.getElementById('status-repair')
    constructor() {
        console.log(window.location.hash)
        this.buttonFooter.addEventListener('click', () =>{
            this.cleanAndShowPopup();
            this.createForm();
            this.form.appendChild(this.createForm().name);
            this.form.appendChild(this.createForm().phone);
            this.form.appendChild(this.createForm().button);
        });
        this.buttonProduct.addEventListener('click', () =>{
            this.cleanAndShowPopup();
            let select = document.createElement('select');
            select.className = 'popup-input select-background'
            let first =document.createElement('option');
            first.innerText ='Выберите тип техники';
            let second =document.createElement('option');
            second.innerText ='Смартфон';
            let third =document.createElement('option');
            third.innerText ='Ноутбук';
            let fourth =document.createElement('option');
            fourth.innerText ='Монитор';
            select.appendChild(first);
            select.appendChild(second);
            select.appendChild(third);
            select.appendChild(fourth);
            this.form.appendChild(this.createForm().name);
            this.form.appendChild(this.createForm().phone);
            this.form.appendChild(select);
            this.form.appendChild(this.createForm().button);

        });
        this.statusRepair.addEventListener('click', () => {
            this.checkOrder();
        })
        this.popupExit.addEventListener('click', () =>{
            this.closePopup();
        });
    }
    closePopup(){
        this.popup.style.display = 'none';
    }
    cleanAndShowPopup(){
        this.popup.style.display = 'block';
        this.form.innerHTML = '';
        this.formText.style.display = 'block'
    }
    createForm(){
        let name = document.createElement('input');
        name.className = 'popup-input'
        name.setAttribute('placeholder', 'Ваше имя');
        let phone = document.createElement('input');
        phone.className = 'popup-input'
        phone.setAttribute('placeholder', '+7 (_ _ _) _ _ _ - _ _ - _ _');
        let button = document.createElement("button");
        button.innerText = 'Оставить заявку'
        button.className = 'button button-popup'
        button.addEventListener('click', () =>{
            this.cleanAndShowPopup()
            this.updateForm()
        })
        return {name: name, phone: phone, button: button,}
    }
    updateForm(){
        this.popupTitle.innerText = 'Заявка отправлена';
        this.popupText.innerText = 'Наш менеджер перезвонит вам в течение 5 минут';
        let button = this.createForm().button;
        button.innerText = 'Отлично'
        button.addEventListener('click', () => {
            this.closePopup()
        });
        this.form.appendChild(button);
        this.formText.style.display = 'none'
    }
    checkOrder(){
        this.cleanAndShowPopup();
        this.popupTitle.innerText = 'Проверить статус заказа';
        this.popupText.innerText = 'Введите номер вашего заказа';
        let number = this.createForm().phone;
        number.setAttribute('placeholder', 'Пример: WUQ22-9813');
        let button = this.createForm().button;
        button.innerText = 'Отправить';
        button.addEventListener('click', () =>{
            this.cleanAndShowPopup();
            this.popupTitle.innerText = 'Ваш заказ не найден';
            this.popupText.innerText = 'Возможно, вы неправильно ввели номер заказа. Повторите попытку';
            let button = this.createForm().button;
            button.innerText = 'Попробовать ещё';
            button.addEventListener('click', () => {
                this.checkOrder()
            })
            this.form.appendChild(button);
            this.formText.style.display = 'none';
        })
        this.form.appendChild(number);
        this.form.appendChild(button);
        this.formText.style.display = 'none';
    }
}