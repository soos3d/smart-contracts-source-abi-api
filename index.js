const express = require('express');
const cors = require('cors');
const { getContractData } = require('./src/contracts');
const app = express();
require('dotenv').config()

// Middleware to parse JSON bodies
app.use(express.json());

// Enable all CORS requests
app.use(cors());

app.post('/contractData', async (req, res) => {
    const { address } = req.body;
    
    if (!address) {
        return res.status(400).send({ error: 'Missing address in request body' });
    }

    try {
        const data = await getContractData(address, process.env.ETHERSCAN_API);
        const dataObject = { contractName: data.ContractName, contractCode: data.SourceCode, contractAbi: data.ABI}
        res.send(dataObject);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error fetching contract data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
