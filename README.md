# MEV Detection Tool - Real-Time Ethereum Mempool Scanner  

🔍 **Detect & Monitor MEV (Miner Extractable Value) Bots in Real-Time on Ethereum Mainnet.**  
🔥 Built with **Ethers.js, WebSockets, and Alchemy**, this tool helps identify potential **front-running & sandwich attacks** using high gas fees.

![GitHub last commit](https://img.shields.io/github/last-commit/weezyjs/MEV--Detection-Tool)
![GitHub issues](https://img.shields.io/github/issues/weezyjs/MEV--Detection-Tool)
![GitHub stars](https://img.shields.io/github/stars/weezyjs/MEV--Detection-Tool?style=social)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![Ethers.js](https://img.shields.io/badge/Ethers.js-6.13.5-blue)

---

## 🚀 Features  
✅ **Dynamic Gas Price Threshold:** Adapts to Ethereum’s network conditions  
✅ **MEV Bot Detection:** Flags suspicious transactions based on high gas fees  
✅ **Real-Time Mempool Scanning:** Captures live pending transactions  
✅ **Transaction Logging:** Saves detected transactions to `mev_transactions.csv`  
✅ **Telegram Alerts:** Sends alerts for high-priority transactions 🚨  

---

## 🛠️ **Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/weezyjs/MEV--Detection-Tool.git
cd MEV--Detection-Tool
```
2️⃣ Install Dependencies
```bash
npm install
```
3️⃣ Set Up Environment Variables
```bash
# Replace with your actual API Keys
ETHEREUM_RPC_WS=wss://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID=YOUR_TELEGRAM_CHAT_ID
```
🔥 How to Run the Scanner
```bash
node src/mempoolScanner.mjs
```
🚀 Real-Time Alerts to Telegram

Enable Telegram Alerts:

1️⃣ Create a Telegram Bot via BotFather

2️⃣ Get Your BOT_TOKEN & CHAT_ID

3️⃣ Update Your .env File 4️⃣ Run the scanner & receive alerts when MEV activity is detected!

⚙️ How It Works

📡 1. Connects to Ethereum’s WebSocket mempool

🛡️ 2. Monitors pending transactions in real-time

⚡ 3. Filters high gas price transactions (> 2x network avg)

📩 4. Logs MEV transactions & sends Telegram alerts

📜 Tech Stack

🟢 Node.js 20.x

🔷 Ethers.js

📡 WebSockets

📊 CSV Logging

🤖 Telegram API

🚀 Alchemy WebSockets

🌟 Contributing

🔧 Want to improve the project? Feel free to fork & submit a PR!

For feature requests, open an issue.

🛡️ Security Considerations

⚠️ This tool is for educational & research purposes.

❌ Do NOT use it for malicious activities.

✅ Always follow Ethereum best practices when monitoring transactions.

📌 Future Enhancements

✅ Identify Flashbots transactions

✅ Analyze MEV patterns using AI models

✅ Deploy on AWS/GCP for continuous monitoring

📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute! 🚀

⭐ If you find this project useful, consider giving it a star! 🌟


