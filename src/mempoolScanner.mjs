import "dotenv/config";
import { WebSocketProvider, formatUnits } from "ethers";
import chalk from "chalk";

const ETHEREUM_RPC_WS = process.env.ETHEREUM_RPC_WS;
if (!ETHEREUM_RPC_WS) {
    console.error("❌ ERROR: ETHEREUM_RPC_WS is undefined. Check your .env file!");
    process.exit(1);
}

const provider = new WebSocketProvider(ETHEREUM_RPC_WS);
console.log(chalk.blue("🔍 Listening to pending transactions in the mempool..."));

// Function to dynamically fetch average gas price
async function getDynamicGasThreshold() {
    const averageGas = await provider.getFeeData();
    return averageGas.gasPrice * BigInt(2); // Set threshold at 2x the network average gas price
}

let HIGH_GAS_THRESHOLD = BigInt(50000000000); // Default 50 Gwei

// Update threshold dynamically every 1 minute
setInterval(async () => {
    HIGH_GAS_THRESHOLD = await getDynamicGasThreshold();
    console.log(chalk.blue(`🔄 Updated MEV Gas Threshold: ${formatUnits(HIGH_GAS_THRESHOLD, "gwei")} Gwei`));
}, 60000);

provider.on("pending", async (txHash) => {
    try {
        const tx = await provider.getTransaction(txHash);
        if (!tx) return;

        const gasPriceGwei = BigInt(tx.gasPrice);
        if (gasPriceGwei > HIGH_GAS_THRESHOLD) {
            console.log(chalk.red(`🚨 Possible MEV Bot Detected! Tx: ${txHash}`));
            console.log(chalk.red(`   Gas Price: ${formatUnits(gasPriceGwei, "gwei")} Gwei`));
            console.log(chalk.yellow(`   From: ${tx.from}`));
            console.log(chalk.yellow(`   To: ${tx.to}`));
        }
    } catch (error) {
        console.log(chalk.red("❌ Error fetching transaction data"), error);
    }
});
