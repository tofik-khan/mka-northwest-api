import getAllKhuddam from "../database/get-all-khuddam";
import dispatchMessage from "./dispatch-message";

export default async function handler(req, res) {

    // Authenticate request
    if(!req.body.auth || req.body.auth !== process.env.API_AUTH_TOKEN ) {
        res.status(401).json({success: false, error: { message: "Failed to Authenticate"}});
        return;
    }


    const message = req.body.message || "";
    const users = await getAllKhuddam();
    dispatchMessage(users, message);


    const result = {sucess: true};
    res.status(200).json(result)
}