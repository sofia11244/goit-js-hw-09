const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: '',
};
// boş string olarak ayarlanır 'let' kullanılmasının nedeni değiştirilebilir olması. kullanıcının girdiği email-mesajları saklar


function loadFormData() {
    const savedData=localStorage.getItem(STORAGE_KEY);
    if(savedData){
        formData = JSON.parse(savedData);
        form.email.value = formData.email;
        form.message.value = formData.message;
    }
}

form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});
// JSON dizesine dönüştürür, böylece yerel depolamada saklanabilir.


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});
// localStorage.removeItem(STORAGE_KEY);eski verileri silerek sadece güncel bilgilerin saklanması sağlanır.

loadFormData();
// sayfa yüklendiğinde verileri yükle