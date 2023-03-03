import { MongoClient } from "mongodb"

export default async function getMajlisKhuddam(majlis) {
    const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;

    const client = new MongoClient(uri);

    try {
        await client.connect();

        return await client
                        .db("mka-northwest")
                        .collection(majlis)
                        .find({})
                        .toArray(); 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}