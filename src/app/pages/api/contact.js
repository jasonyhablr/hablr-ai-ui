import { MongoClient, ObjectId } from "mongodb";

// MongoDB URI and Database Name
const uri = "mongodb+srv://jasony:UKXWV9jRwkoHHkJD@cluster0hablr.abflxpr.mongodb.net/";
const dbName = "Hablr";

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToDatabase() {
    if (!client.isConnected()) {
        await client.connect();
    }
    return client.db(dbName);
}

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const db = await connectToDatabase();
                const data = await db.collection('contact').find({}).toArray();
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({ error: "Failed to fetch data" });
            }
            break;
        case 'POST':
            try {
                const db = await connectToDatabase();
                const data = await db.collection('contact').insertOne(req.body);
                res.status(201).json(data);
            } catch (error) {
                res.status(500).json({ error: "Failed to create new data" });
            }
            break;
        case 'PUT':
            try {
                const db = await connectToDatabase();
                const { _id, ...otherProps } = req.body;
                const data = await db.collection('contact').updateOne({ _id: new ObjectId(_id) }, { $set: otherProps });
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({ error: "Failed to update data" });
            }
            break;
        case 'DELETE':
            try {
                const db = await connectToDatabase();
                const { _id } = req.body;
                const data = await db.collection('contact').deleteOne({ _id: new ObjectId(_id) });
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({ error: "Failed to delete data" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
