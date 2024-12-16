const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pkcxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const visaCollection = client.db('visaDB').collection('visas');
        const visaAppliedCollection = client.db('visaDB').collection('visa_applications');

        app.get('/visas', async (req, res) => {
            try {
                const query = visaCollection.find();
                const result = await query.toArray();
                res.status(200).send(result);
            } catch (error) {
                res.status(500).send({ error: "Failed to fetch visa data" });
            }
        })

        app.get('/visas/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = {_id: new ObjectId(id)};
                const result = await visaCollection.findOne(query);
                res.status(200).send(result);
            } catch (error) {
                res.status(500).send({ error: `Failed to fetch ${id} visa data`});
            }
        })
        
        app.post('/visa-application', async (req, res) => {
            const newVisa = req.body;
            try {
                const result = await visaAppliedCollection.insertOne(newVisa);
                res.status(200).send(result);
            } catch (error) {
                res.status(500).send({ error: `Failed to add visa data`});
            }
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Visa Guide Server');
});

app.listen(port, () => {
    console.log(`Server is connected to port ${port}`);
});