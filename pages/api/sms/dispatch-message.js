import sanitizePhoneNumber from "../helpers/sanitize-phonenumber";
import formatMessage from "../helpers/format-message";

export default async function dispatchMessage(userArray, message) {

    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN

    const twilio = require("twilio");
    const client = new twilio(accountSid, authToken);

    userArray.forEach((element) => {

        client.messages
        .create({
            body: formatMessage(message, element),
            to: sanitizePhoneNumber(element.phone),
            messagingServiceSid: process.env.TWILIO_SERVICE_SID,
        })

    });
}