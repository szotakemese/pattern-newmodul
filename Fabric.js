//Текст
var Text = function (text) {
    var newtext = text.toString();
    this.value = newtext;
};

//Метод надсилання
var Sms = function () {
    this.mode = "Sent as SMS";
};

var Facebook = function () {
    this.mode = "Sent with Facebook";
};

var Email = function () {
    this.mode = "Sent as E-mail";
};


class Factory {
    createMessage(text, mode) {
        let message
        if (mode === "SMS") {
            message = new Sms()
        } else if (mode === "Facebook") {
            message = new Facebook()
        } else if (mode === "E-mail"){
            message = new Email()
        } 

        message.text = new Text(text)
        message.say = function () {
            console.log(this.text.value + " - " + this.mode)
        }
        return message
    }
}

export {Factory}