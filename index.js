import {Factory} from './Fabric';


const factory = new Factory()

//Масив що містить повідомлення
var messagesList = [];

//Додавання повідомлення до списку розсилки
messagesList.push(factory.createMessage('Hello', "SMS"))
messagesList.push(factory.createMessage('Goodbye', "Facebook"))
messagesList.push(factory.createMessage('Goodbye', "E-mail"))
messagesList.push(factory.createMessage(12345, "Facebook"))


function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}
  
async function SendingMessages() {
    for (var i = 0, len = messagesList.length; i < len; i++){
        messagesList[i].say(); //Надсилання повідомлення
        await sleep(2000); //Чекати 2 секунди ----- 1 день = 86400000 мілісекунди
    }
}
  
SendingMessages();
  
