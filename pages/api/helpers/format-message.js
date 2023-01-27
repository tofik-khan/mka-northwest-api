export default function formatMessage(message, userObject) {
    message = message.replace(/{{\w+}}/g, function(param) {
		param = param.substring(2, param.length-2); //remove {{ and }}
        return userObject[param];
    });

    return message;
}