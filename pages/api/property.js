// pages/api/property.js

import clientPromise from '/utils/dbConnect';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Hablr"); // Specify your database name here

    try {
        switch (req.method) {
            case 'GET':
                const propertys = await db.collection('property').find({}).toArray();
                res.status(200).json(propertys);
                break;
            case 'POST':
                const data = await db.collection('property').insertOne(req.body);
                res.status(201).json(data);
                break;
            case 'PUT':
                const { _id, ...otherProps } = req.body;
                const updateData = await db.collection('property').updateOne({ _id: new ObjectId(_id) }, { $set: otherProps });
                res.status(200).json(updateData);
                break;
            case 'DELETE':
                const deleteData = await db.collection('property').deleteOne({ _id: new ObjectId(_id) });
                res.status(200).json(deleteData);
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        console.error("Error handling request:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
