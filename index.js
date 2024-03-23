require('dotenv').config();
const { DirectSecp256k1Wallet, assertIsBroadcastTxSuccess } = require('@cosmjs/proto-signing');
const { fromHex } = require('@cosmjs/encoding');
const { SigningStargateClient } = require('@cosmjs/stargate');

const AXELAR_RPC = ''; // Update with actual Axelar RPC URL

async function main() {
    const privateKeyHex = process.env.PRIVATE_KEY; // Ensure this is set in .env
    if (!privateKeyHex || privateKeyHex.length !== 64) {
        console.error("Invalid PRIVATE_KEY in .env file. Ensure it is a 64-character hexadecimal string.");
        process.exit(1);
    }

    const privateKeyUint8 = fromHex(privateKeyHex);
    const wallet = await DirectSecp256k1Wallet.fromKey(privateKeyUint8, 'axelar');
    const [firstAccount] = await wallet.getAccounts();
    const client = await SigningStargateClient.connectWithSigner(AXELAR_RPC, wallet);

    // Array of recipient addresses
    const recipientAddresses = [
        'Recipient', // Replace with actual address 1
        'Recipient', // Replace with actual address 2
        'Recipient',  // Replace with actual address 3
        'Recipient'  // Replace with actual address 4
        // ...
    ];

    for (let i = 0; i < 5000; i++) {
        // Select recipient address based on the current iteration
        const recipientAddress = recipientAddresses[i % recipientAddresses.length];

        try {
            const amountToSend = {
                denom: 'uaxl',
                amount: '10', // Adjust as needed  (1000 uaxl = 0.001 AXL)
            };

            const fee = {
                amount: [{ denom: 'uaxl', amount: '800' }], // Adjust fee based on current network conditions
                gas: '100000', // Adjust gas limit based on the transaction requirements
            };

            const result = await client.sendTokens(firstAccount.address, recipientAddress, [amountToSend], fee, `Transaction ${i + 1}`);
            assertIsBroadcastTxSuccess(result);

            console.log(`Transaction ${i + 1} successful with TX hash: ${result.transactionHash} to ${recipientAddress}`);
        } catch (err) {
            console.error(`Transaction ${i + 1} failed: ${err.message}`);
        }
    }
}

main().catch((err) => {
    console.error(err);
});
