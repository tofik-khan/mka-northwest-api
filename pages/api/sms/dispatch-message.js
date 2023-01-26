 
 /**
  * 
  * @param {Object} req: payload received from calling application
  * req.body contains the data payload
  * req.body = {
  *     "message": String - unformatted message to be sent to users
  *     "users": Array - User Array with names and phone numbers
  * }
  * req.body.users = [
  *     {
            "_id": {
                "$oid": "ABC123abc"
            },
            "firstname": "Test",
            "lastname": "Khadim",
            "phone": "(360) 123-1234",
            ...
        },
        ...
  * ]
  * 
  */

export default async function handler(req, res) {
    console.log(req.body);
    res.status(200).json({result: "Success"})
}