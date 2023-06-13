const axios = require('axios');
require('dotenv').config()

// Used for tests
const ETHERSCAN_API = process.env.ETHERSCAN_API;

async function getContractData(address, apiKey) {
    const params = {
        module: 'contract',
        action: 'getsourcecode',
        address: address,
        apikey: apiKey
    };

    try {
        const response = await axios.get('https://api.etherscan.io/api', { params });
        
        const {
            SourceCode,
            ABI,
            ContractName,
            CompilerVersion,
            OptimizationUsed,
            Runs,
            ConstructorArguments,
            EVMVersion,
            Library,
            LicenseType,
            Proxy,
            Implementation,
            SwarmSource
        } = response.data.result[0];

        return {
            SourceCode,
            ABI,
            ContractName,
            CompilerVersion,
            OptimizationUsed,
            Runs,
            ConstructorArguments,
            EVMVersion,
            Library,
            LicenseType,
            Proxy,
            Implementation,
            SwarmSource
        };
    } catch (error) {
        console.error(error);
    }
}


// Usage:
//getContractData('0x7f268357A8c2552623316e2562D90e642bB538E5', ETHERSCAN_API)
  // .then(data => console.log(data.SourceCode));

// Export the blockchain related function
module.exports = {
    getContractData
}


