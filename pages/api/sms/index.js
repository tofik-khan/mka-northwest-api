import getMajlisKhuddam from "../database/get-majlis-khuddam";
import getAllKhuddam from "../database/get-all-khuddam";
import dispatchMessage from "./dispatch-message";

export default async function handler(req, res) {

    // Authenticate request
    if(!req.body.auth || req.body.auth !== process.env.API_AUTH_TOKEN ) {
        res.status(401).json({success: false, error: { message: "Failed to Authenticate"}});
        return;
    }


    const message = req.body.message || "";
    let users;
    if (req.body.audience !== "all") {
        // request is for specific majlis
         users = await getMajlisKhuddam(req.body.audience);
    }
    else {
        // request is for all khuddam
        users = await getAllKhuddam();
    }
    
    dispatchMessage(users, message);


    const result = {sucess: true};
    res.status(200).json(result)
}