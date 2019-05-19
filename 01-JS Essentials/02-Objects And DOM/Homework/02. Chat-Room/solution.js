function solve() {
   let sendButton = document.getElementById('send');
   let text = document.getElementById('chat_input');

   sendButton.addEventListener('click', sendMessage);

   function sendMessage(){

      if(text.value != ''){
         let messageSection = document.getElementById('chat_messages');
         let message = document.createElement('div');
         message.classList.add('message');
         message.classList.add('my-message');
         message.innerHTML += text.value;
         messageSection.appendChild(message);
         text.value = '';
      }
   }
}