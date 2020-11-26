const btn = document.querySelector(".btn");
const chatbox = document.querySelector(".chatbox");
const submit = document.querySelector(".submit");
const ul = document.querySelector("ul");
const chat = document.querySelector("input");

btn.addEventListener('click', function(){
    chatbox.classList.toggle("slide");
    if (btn.innerHTML == 'TAMPILKAN CHATBOX'){
        btn.innerHTML = 'SEMBUNYIKAN CHATBOX';
    }else {
        btn.innerHTML = 'TAMPILKAN CHATBOX';
    }
});

submit.addEventListener('click', function() {
    const chatBaru = document.createElement("li");
    const isiChat = document.createTextNode(chat.value);
    chatBaru.appendChild(isiChat);
    ul.appendChild(chatBaru);  
    chat.value = '';
});