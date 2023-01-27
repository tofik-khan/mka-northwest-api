 /**
  * 
  * @param {Object} req: payload received from calling application
  * req.body contains the data payload
  * req.body = {
  *     "message": String - unformatted message to be sent to users
  *     "users": Array - User Array with names and phone numbers
  *     "auth": String - secret key needed to authenticate API
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

    // Authenticate request
    if(!req.body.auth || req.body.auth !== process.env.API_AUTH_TOKEN ) {
        res.status(401).json({success: false, error: { message: "Failed to Authenticate"}});
        return;
    }

    userArray = req.body.users || "None";
    console.log(userArray);

    res.status(200).json({success: true})
}