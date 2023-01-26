import { MongoClient } from "mongodb"

export default async function getAllKhuddam() {
    const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;

    const client = new MongoClient(uri);

    try {
        await client.connect();

        return await client
                        .db("test")
                        .collection('users')
                        .find({})
                        .toArray(); 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}