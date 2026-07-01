/* ============================================================================
   BCH EXPLORE — QUESTION BANK
   ----------------------------------------------------------------------------
   This is the ONLY file you edit to add or change questions.
   The game engine (index.html) reads from the QUESTIONS array below.

   Sourced from the verified Bitcoin Cash ecosystem (minisatoshi.cash/ecosystem
   and official project sites). Keep facts accurate and current.

   FOUR QUESTION TYPES:

   1) "unscramble" — letters of the answer are shuffled; player types it.
        { id, type:"unscramble", answer:"PAYTACA", hint:"...", category, points, learn }

   2) "multiple" — pick one correct option.
        { id, type:"multiple", question:"...", options:[...], answer:"...",
          category, points, learn }

   3) "match" — match a project to its category/role (rendered like multiple).
        { id, type:"match", question:"...", options:[...], answer:"...",
          category, points, learn }

   4) "fill" — typed answer; accepts any string in the accept[] list.
        { id, type:"fill", question:"...", accept:["...","..."], category, points, learn }

   FIELDS:
   - id       unique number
   - category used for filters + future knowledge base
   - points   base Explore Points for a correct answer (default 10)
   - hint     (unscramble only) clue shown under the scrambled word
   - learn    one-line "Did you know?" fact shown after answering
   ============================================================================ */

const QUESTIONS = [

  /* ================= WALLETS ================= */
  { id: 1, type: "unscramble", answer: "PAYTACA", category: "Wallet", points: 10,
    hint: "Mobile + browser wallet with point-of-sale support",
    learn: "Paytaca is a popular BCH mobile and browser wallet with POS support and CashTokens." },

  { id: 2, type: "unscramble", answer: "ELECTRON CASH", category: "Wallet", points: 10,
    hint: "Powerful SPV wallet with CashFusion built in",
    learn: "Electron Cash is a veteran SPV wallet for desktop and mobile, with CashFusion and RPA support." },

  { id: 3, type: "unscramble", answer: "SELENE", category: "Wallet", points: 10,
    hint: "Sleek, user-friendly SPV wallet; iOS, Android, and web",
    learn: "Selene aims to make joining the BCH economy as easy as possible, and is worked on by Jeremy and Kallisti." },

  { id: 4, type: "unscramble", answer: "CASHONIZE", category: "Wallet", points: 10,
    hint: "Cross-platform wallet for CashTokens + WalletConnect",
    learn: "Cashonize supports CashTokens, WalletConnect, and CashConnect, and was built by MrZwets." },

  { id: 5, type: "multiple", category: "Wallet", points: 10,
    question: "Which wallet lets you earn its token by playing games and using dApps?",
    options: ["Zapit", "Electron Cash", "Stack Wallet", "Flowee Pay"],
    answer: "Zapit",
    learn: "Zapit is a multi-asset wallet with a P2P exchange; you can earn Zapit tokens through use." },

  { id: 6, type: "multiple", category: "Wallet", points: 10,
    question: "Which multicoin wallet offers UTXO (coin) control and CashFusion support?",
    options: ["Stack Wallet", "Paytaca", "Selene", "Cake Wallet"],
    answer: "Stack Wallet",
    learn: "Stack Wallet is a multicoin wallet with coin control and built-in CashFusion." },

  { id: 7, type: "match", category: "Wallet", points: 10,
    question: "What is Flowee Pay?",
    options: ["A wallet / payment solution", "A DEX", "A block explorer", "A mining pool"],
    answer: "A wallet / payment solution",
    learn: "Flowee Pay is a mobile and desktop SPV wallet focused on ease-of-use." },

  { id: 8, type: "multiple", category: "Wallet", points: 10,
    question: "Which wallet is covenant-focused and made by Jerry Qian?",
    options: ["OPTN Wallet", "Cashonize", "PSF Wallet", "Bitcoin.com Wallet"],
    answer: "OPTN Wallet",
    learn: "OPTN is a wallet focused on covenant transactions on Bitcoin Cash." },

  /* ================= PRIVACY ================= */
  { id: 9, type: "unscramble", answer: "CASHFUSION", category: "Privacy", points: 10,
    hint: "Decentralized protocol that obscures your spending",
    learn: "CashFusion makes it difficult for chain-analysis firms to track coins by mixing spending." },

  { id: 10, type: "multiple", category: "Privacy", points: 10,
    question: "Which legacy privacy tool has been superseded by CashFusion?",
    options: ["CashShuffle", "CashScript", "CashTokens", "CashConnect"],
    answer: "CashShuffle",
    learn: "CashShuffle still works but CashFusion is considered vastly superior." },

  /* ================= DEX / DEFI ================= */
  { id: 11, type: "multiple", category: "DeFi", points: 10,
    question: "Which is the number-one DEX on the Bitcoin Cash network?",
    options: ["Cauldron", "TapSwap", "BCH PUMP", "Fex Cash"],
    answer: "Cauldron",
    learn: "Cauldron DEX (by Riften Labs) lets users create liquidity pools and swap CashTokens." },

  { id: 12, type: "unscramble", answer: "ANYHEDGE", category: "DeFi", points: 10,
    hint: "Futures contract that mitigates volatility, by General Protocols",
    learn: "AnyHedge is a non-custodial, fully collateralized futures/hedging protocol on BCH." },

  { id: 13, type: "unscramble", answer: "TAPSWAP", category: "DeFi", points: 10,
    hint: "A decentralized exchange for CashTokens, by mainnet-pat",
    learn: "TapSwap is a CashTokens DEX in the BCH ecosystem." },

  { id: 14, type: "multiple", category: "DeFi", points: 10,
    question: "What is BCH PUMP?",
    options: ["A token launchpad (pump.fun port)", "A wallet", "A privacy tool", "A merchant map"],
    answer: "A token launchpad (pump.fun port)",
    learn: "BCH PUMP is a pump.fun-style token launchpad for the Bitcoin Cash network." },

  { id: 15, type: "multiple", category: "DeFi", points: 10,
    question: "Which protocol lets you borrow against BCH collateral with proof-of-reserves?",
    options: ["Moria Money", "Cauldron", "AnyHedge", "Wrapped.Cash"],
    answer: "Moria Money",
    learn: "Moria is an oracle-based borrowing protocol; its stablecoin is MUSD." },

  { id: 16, type: "fill", category: "DeFi", points: 10,
    question: "What is the name of Moria's USD-pegged stablecoin on Bitcoin Cash?",
    accept: ["MUSD"],
    learn: "MUSD is a decentralized USD-pegged stablecoin using the Moria Protocol." },

  { id: 17, type: "unscramble", answer: "STABLEHEDGE", category: "DeFi", points: 10,
    hint: "DeFi protocol tokenizing AnyHedge contracts for stable liquidity",
    learn: "StableHedge (by Paytaca) offers a stable, redeemable USD-value token with no lock-in." },

  { id: 18, type: "match", category: "DeFi", points: 10,
    question: "What is BCH Bull?",
    options: ["Leverage trading & hedging", "A wallet", "An NFT collection", "A block explorer"],
    answer: "Leverage trading & hedging",
    learn: "BCH Bull (by General Protocols) offers non-custodial leverage trading and hedging." },

  { id: 19, type: "multiple", category: "DeFi", points: 10,
    question: "Which app is the first on-chain, non-custodial crypto price-prediction game?",
    options: ["BCH.Guru", "VotePeer", "Wrapped.Cash", "Unspent.Cash"],
    answer: "BCH.Guru",
    learn: "BCH.Guru runs on-chain price predictions and has its own utility NFT collection." },

  /* ================= TOKENS / TECH ================= */
  { id: 20, type: "unscramble", answer: "CASHTOKENS", category: "Tech", points: 10,
    hint: "Native, layer-1, miner-validated tokens on BCH",
    learn: "CashTokens are native layer-1 tokens on Bitcoin Cash; the standard lives at cashtokens.org." },

  { id: 21, type: "fill", category: "Tech", points: 10,
    question: "What early BCH token protocol does the abbreviation SLP stand for?",
    accept: ["Simple Ledger Protocol", "SimpleLedger Protocol"],
    learn: "SLP (Simple Ledger Protocol) is a simple, SPV-friendly token architecture that predates CashTokens." },

  { id: 22, type: "multiple", category: "Tech", points: 10,
    question: "CashScript is a smart-contract language for BCH based on which Ethereum language?",
    options: ["Solidity", "Vyper", "Rust", "Move"],
    answer: "Solidity",
    learn: "CashScript is a TypeScript SDK based on Solidity for writing BCH smart contracts." },

  { id: 23, type: "multiple", category: "Tech", points: 10,
    question: "What does BitCAN provide on Bitcoin Cash?",
    options: ["Decentralized domain names & identity", "A casino", "A merchant map", "A mining pool"],
    answer: "Decentralized domain names & identity",
    learn: "BitCAN = Bitcoin Cash for Assigned Names and Numbers — a decentralized name/identity system." },

  { id: 24, type: "match", category: "Tech", points: 10,
    question: "What is CashConnect?",
    options: ["A secure wallet–dApp connection protocol", "A stablecoin", "An NFT market", "A podcast"],
    answer: "A secure wallet–dApp connection protocol",
    learn: "CashConnect = CashRPC + WalletConnect, and is considered more secure for end users." },

  { id: 25, type: "unscramble", answer: "WRAPPED", category: "Tech", points: 10,
    hint: "___.Cash lets you wrap BCH into a CashToken for smart contracts",
    learn: "Wrapped.Cash wraps BCH into a CashToken so it's easier to use in CashToken smart contracts." },

  /* ================= DEVELOPERS ================= */
  { id: 26, type: "multiple", category: "Developer", points: 10,
    question: "Who is the creator and lead maintainer of Libauth, Chaingraph, and Bitauth IDE?",
    options: ["bitjson (Jason Dreyzehner)", "Calin Culianu", "MrZwets", "freetrader"],
    answer: "bitjson (Jason Dreyzehner)",
    learn: "bitjson authored several BCH upgrade specs and previously led BitPay's design team." },

  { id: 27, type: "multiple", category: "Developer", points: 10,
    question: "Who maintains BCHN and Electron Cash and created the Fulcrum SPV indexer?",
    options: ["Calin Culianu", "bitjson", "Rosco Kalis", "Sayoshi Nakamario"],
    answer: "Calin Culianu",
    learn: "Calin has written high-performance C++ for two decades and helped found BCH in 2017." },

  { id: 28, type: "fill", category: "Developer", points: 10,
    question: "Which developer (a pen name) is known for CashScript, Cashonize, and Tokenaut?",
    accept: ["MrZwets", "Mathieu Geukens"],
    learn: "Mathieu Geukens (MrZwets) works full-time on BCH across several key projects." },

  { id: 29, type: "multiple", category: "Developer", points: 10,
    question: "Who founded Revoke.cash and co-maintains CashScript?",
    options: ["Rosco Kalis", "Jonathan Silverblood", "Chris Troutner", "Dagur Valberg Johannsson"],
    answer: "Rosco Kalis",
    learn: "Rosco Kalis maintains dev tools with 50k+ monthly downloads and worked on AnyHedge." },

  { id: 30, type: "match", category: "Developer", points: 10,
    question: "Which BCH standards did Jonathan Silverblood create and maintain?",
    options: ["CashID & Cash Accounts", "CashFusion & CashShuffle", "Libauth & Chaingraph", "BCHD & Neutrino"],
    answer: "CashID & Cash Accounts",
    learn: "Jonathan is a developer at General Protocols and a host of BCH Bliss." },

  { id: 31, type: "fill", category: "Developer", points: 10,
    question: "Which developer was the primary driver behind BCH's ABLA upgrade?",
    accept: ["BCH Autist", "Bitcoin Cash Autist", "BCA"],
    learn: "Bitcoin Cash Autist (BCA) focuses on smart contracts and the BCH protocol." },

  { id: 32, type: "multiple", category: "Developer", points: 10,
    question: "Which dev is known for the Electron Cash wallet and BCH scaling-debate articles?",
    options: ["Jonald Fyookball", "Melroy van den Berg", "Josh Ellithorpe", "Halvor Bakke-Veiby"],
    answer: "Jonald Fyookball",
    learn: "Jonald Fyookball led several BCH projects including the Electron Cash wallet." },

  /* ================= DEV TEAMS / ORGS ================= */
  { id: 33, type: "unscramble", answer: "GENERAL PROTOCOLS", category: "DevTeam", points: 10,
    hint: "Team behind AnyHedge, BCH Bull, and Oracles.Cash",
    learn: "General Protocols builds permissionless, trustless financial solutions for BCH." },

  { id: 34, type: "multiple", category: "DevTeam", points: 10,
    question: "Which team, led in part by Dagur and Halvor, built Cauldron and Moria?",
    options: ["Riften Labs", "General Protocols", "Flowee", "PSF"],
    answer: "Riften Labs",
    learn: "Riften Labs is a protocol research, development, and software company." },

  { id: 35, type: "fill", category: "DevTeam", points: 10,
    question: "What does the acronym PSF stand for in the BCH ecosystem?",
    accept: ["Permissionless Software Foundation"],
    learn: "The PSF builds open-source software aimed at protecting individual economic freedom." },

  /* ================= NODES / INFRASTRUCTURE ================= */
  { id: 36, type: "fill", category: "Node", points: 10,
    question: "What is the name of the most popular Bitcoin Cash node software (abbreviated BCHN)?",
    accept: ["Bitcoin Cash Node", "BCHN"],
    learn: "Bitcoin Cash Node (BCHN) is the most widely run BCH full-node implementation." },

  { id: 37, type: "multiple", category: "Node", points: 10,
    question: "Which BCH full node is written in Go and supports Neutrino and SLP?",
    options: ["BCHD", "Bitcoin Verde", "Knuth", "Flowee The Hub"],
    answer: "BCHD",
    learn: "BCHD is a Bitcoin Cash full node written in Go." },

  { id: 38, type: "match", category: "Node", points: 10,
    question: "What is Fulcrum?",
    options: ["A fast SPV indexer", "A wallet", "A DEX", "An NFT collection"],
    answer: "A fast SPV indexer",
    learn: "Fulcrum is a fast SPV indexer in C++ that supports Reusable Payment Addresses (RPA)." },

  { id: 39, type: "unscramble", answer: "BITCOIN VERDE", category: "Node", points: 10,
    hint: "A Bitcoin Cash full-node written in Java",
    learn: "Bitcoin Verde is a BCH full node implemented in Java by Project Verde." },

  /* ================= PAYMENTS / MERCHANT ================= */
  { id: 40, type: "multiple", category: "Payments", points: 10,
    question: "Which is a non-custodial BCH payment gateway with WordPress integration?",
    options: ["Prompt.Cash", "Stripe", "GoCrypto", "Coingate"],
    answer: "Prompt.Cash",
    learn: "Prompt.Cash is a non-custodial BCH gateway with WordPress integration and link paywalls." },

  { id: 41, type: "match", category: "Payments", points: 10,
    question: "What is the Paytaca Payment Hub?",
    options: ["An online BCH payment gateway", "A DEX", "A privacy mixer", "A node"],
    answer: "An online BCH payment gateway",
    learn: "The Paytaca Payment Hub lets merchants accept BCH payments online." },

  { id: 42, type: "unscramble", answer: "SCANTOPAY", category: "Payments", points: 10,
    hint: "A low-cost way to start accepting BCH, by Jim Hamill",
    learn: "ScanToPay is a quick, low-maintenance way for merchants to accept Bitcoin Cash." },

  /* ================= SOCIAL / MEDIA ================= */
  { id: 43, type: "unscramble", answer: "MEMO", category: "Social", points: 10,
    hint: "___.Cash — a decentralized social network on the BCH chain",
    learn: "Memo.Cash is an on-chain decentralized social network built on Bitcoin Cash." },

  { id: 44, type: "multiple", category: "Social", points: 10,
    question: "Which platform is a long-format blogging site with BCH tipping?",
    options: ["Read.Cash", "Noise.App", "Memo.Cash", "BCHouse"],
    answer: "Read.Cash",
    learn: "Read.Cash is a blogging platform where content can be tipped in BCH." },

  { id: 45, type: "multiple", category: "Media", points: 10,
    question: "Which weekly podcast is hosted by Jeremy and focuses on BCH?",
    options: ["The Bitcoin Cash Podcast", "GP Spaces", "Casual BCH", "Paytaca Talks"],
    answer: "The Bitcoin Cash Podcast",
    learn: "Jeremy started the Bitcoin Cash Podcast in 2021 and also works on Selene and BLISS." },

  /* ================= CROWDFUNDING ================= */
  { id: 46, type: "unscramble", answer: "FLIPSTARTER", category: "CrowdFunding", points: 10,
    hint: "Non-custodial, self-hosted, censorship-free fundraising",
    learn: "Flipstarter enables self-hosted, censorship-free crowdfunding on Bitcoin Cash." },

  { id: 47, type: "multiple", category: "CrowdFunding", points: 10,
    question: "Which crowdfunding site uses BCH smart contracts and was built by Sayoshi Nakamario?",
    options: ["FundMe.Cash", "Flipstarter", "BCHouse", "Verde Flipstarter"],
    answer: "FundMe.Cash",
    learn: "FundMe.Cash is a non-custodial crowdfunding site using BCH smart contracts (CashStarter)." },

  /* ================= NFT / COLLECTIBLES ================= */
  { id: 48, type: "multiple", category: "NFT", points: 10,
    question: "Which NFT collection features ninjas, each with a unique clan and backstory?",
    options: ["Cash Ninjas", "HoneyBadgers", "Bit Cat Heroes", "Pepi"],
    answer: "Cash Ninjas",
    learn: "The Cash Ninjas team also built the Shinobi Art Generator for CashTokens." },

  { id: 49, type: "match", category: "NFT", points: 10,
    question: "What is Tokenaut?",
    options: ["A CashTokens NFT explorer", "A wallet", "A DEX", "A node"],
    answer: "A CashTokens NFT explorer",
    learn: "Tokenaut (by MrZwets) tracks CashTokens NFT projects: supply, floor price, and more." },

  /* ================= EXPLORERS ================= */
  { id: 50, type: "multiple", category: "Explorer", points: 10,
    question: "Which of these is a Bitcoin Cash block explorer?",
    options: ["Blockchair", "Cauldron", "AnyHedge", "Paytaca"],
    answer: "Blockchair",
    learn: "Blockchair is a universal blockchain explorer that supports Bitcoin Cash." },

  /* ================= CHARITY / ADOPTION ================= */
  { id: 51, type: "unscramble", answer: "EATBCH", category: "Charity", points: 10,
    hint: "Organization delivering food to underprivileged communities with BCH",
    learn: "eatBCH delivers food to communities in need, funded entirely in Bitcoin Cash." },

  { id: 52, type: "multiple", category: "Game", points: 10,
    question: "Which project gamifies BCH adoption like geocaching, with hidden cashdrops?",
    options: ["PurelyPeer", "bugs.cash", "Spin BCH", "BCH.games"],
    answer: "PurelyPeer",
    learn: "PurelyPeer is a geocaching-style hunt where players find hidden BCH cashdrops on a map." },

  /* ================= HISTORY ================= */
  { id: 53, type: "multiple", category: "History", points: 10,
    question: "Bitcoin Cash split from Bitcoin in 2017 via what kind of event?",
    options: ["A hard fork", "A soft fork", "An airdrop", "A merger"],
    answer: "A hard fork",
    learn: "BCH separated from BTC on August 1, 2017 in a hard fork over the block-size debate." },

  { id: 54, type: "fill", category: "History", points: 10,
    question: "Who is the pseudonymous creator of Bitcoin, whose name is also the smallest BCH unit?",
    accept: ["Satoshi Nakamoto", "Satoshi"],
    learn: "One satoshi is 0.00000001 BCH — the smallest divisible unit." },

  { id: 55, type: "multiple", category: "History", points: 10,
    question: "What was BCH's core advantage in the block-size debate?",
    options: ["Larger blocks for cheap, fast payments", "Proof of stake", "Smaller blocks", "No mining"],
    answer: "Larger blocks for cheap, fast payments",
    learn: "BCH kept larger blocks so on-chain fees stay low and everyday payments stay fast." },


  /* ========================================================================
     BATCH 2 — sourced from the 1KBCH ecosystem directory (228 projects)
     ======================================================================== */

  /* ---- WALLETS (new) ---- */
  { id: 56, type: "multiple", category: "Wallet", points: 10,
    question: "Which wallet is a card-form hardware cold wallet made in Taiwan with an EAL6+ secure element?",
    options: ["Cool Wallet", "Ledger", "Trezor", "Tangem"],
    answer: "Cool Wallet",
    learn: "Cool Wallet is a Taiwan-made card-form hardware wallet with an EAL6+ secure element and BCH support." },

  { id: 57, type: "multiple", category: "Wallet", points: 10,
    question: "Which hardware wallet is an NFC card that needs no battery, in a credit-card form factor?",
    options: ["Tangem", "Ledger", "OneKey", "SafePal"],
    answer: "Tangem",
    learn: "Tangem is an NFC card hardware cold wallet supporting BCH, with no battery required." },

  { id: 58, type: "multiple", category: "Wallet", points: 10,
    question: "Which is described as the oldest open-source hardware wallet, with BCH support?",
    options: ["Trezor", "Ledger", "Cool Wallet", "SecuX"],
    answer: "Trezor",
    learn: "Trezor is the oldest open-source hardware wallet and supports Bitcoin Cash." },

  { id: 59, type: "unscramble", answer: "ONEKEY", category: "Wallet", points: 10,
    hint: "Open-source hardware + software wallet; browser extension and desktop both support BCH",
    learn: "OneKey is an open-source hardware and software wallet with BCH support across platforms." },

  { id: 60, type: "match", category: "Wallet", points: 10,
    question: "What is '00 Protocol'?",
    options: ["A multi-chain wallet with built-in DEX & privacy tools", "A block explorer", "A mining pool", "A charity"],
    answer: "A multi-chain wallet with built-in DEX & privacy tools",
    learn: "00 Protocol is a BCH-primary wallet with a built-in Cauldron DEX, encrypted messaging, stealth addresses, and a Nostr social network." },

  /* ---- DEX / CROSS-CHAIN (new) ---- */
  { id: 61, type: "multiple", category: "DeFi", points: 10,
    question: "Which BCH DEX offers a limit order book, letting you place limit orders on-chain?",
    options: ["SatFill", "Cauldron", "AxeSwap", "THORChain"],
    answer: "SatFill",
    learn: "SatFill is a BCH on-chain DEX with a limit order book." },

  { id: 62, type: "multiple", category: "DeFi", points: 10,
    question: "Which protocol lets you swap native BCH for major assets without wrapped tokens?",
    options: ["THORChain", "Cauldron", "SatFill", "ParyonUSD"],
    answer: "THORChain",
    learn: "THORChain is a decentralized cross-chain liquidity protocol supporting native BCH swaps." },

  { id: 63, type: "match", category: "DeFi", points: 10,
    question: "What do AxeSwap and BasicSwap both enable for BCH?",
    options: ["Cross-chain swaps with Monero (XMR)", "NFT minting", "Merchant maps", "Paper wallets"],
    answer: "Cross-chain swaps with Monero (XMR)",
    learn: "Both AxeSwap and BasicSwap support trustless cross-chain atomic swaps between BCH and Monero." },

  { id: 64, type: "unscramble", answer: "BADGERS", category: "DeFi", points: 10,
    hint: "___.cash: lock BCH to earn a meme CashToken and get an NFT receipt",
    learn: "Badgers.cash is a BCH DeFi platform where locking BCH earns Badgers meme tokens plus NFT receipts." },

  /* ---- STABLECOINS / AUDITS ---- */
  { id: 65, type: "fill", category: "DeFi", points: 10,
    question: "Which audit service reviewed ParyonUSD and specializes in CashTokens security?",
    accept: ["SIGHASH Labs", "SIGHASH"],
    learn: "SIGHASH Labs is a BCH smart-contract audit service specializing in CashTokens security." },

  { id: 66, type: "multiple", category: "DeFi", points: 10,
    question: "MUSD, the BCH stablecoin, is used for milestone escrow payments on which freelance platform?",
    options: ["WorkHippo", "Mobazha", "Bitgree", "Dance.cash"],
    answer: "WorkHippo",
    learn: "WorkHippo is a BCH freelance platform using milestone-based escrow paid in MUSD." },

  /* ---- DEVELOPER TOOLS (new) ---- */
  { id: 67, type: "unscramble", answer: "LIBAUTH", category: "Tech", points: 10,
    hint: "Low-level BCH authentication library in pure TypeScript, zero dependencies",
    learn: "Libauth is a zero-dependency TypeScript library with a script compiler and transaction builder." },

  { id: 68, type: "multiple", category: "Tech", points: 10,
    question: "Which browser-based IDE lets you write and deploy BCH smart contracts with no setup?",
    options: ["CashLabs", "Libauth", "Mainnet.cash", "GetBlock"],
    answer: "CashLabs",
    learn: "CashLabs is a browser-based CashScript IDE with testnet and wallet integration." },

  { id: 69, type: "match", category: "Tech", points: 10,
    question: "What does the tool 'Jump (Layer1.cash)' do?",
    options: ["Converts Solidity contracts to CashScript", "Mines BCH", "Hosts websites", "Tracks prices"],
    answer: "Converts Solidity contracts to CashScript",
    learn: "Jump converts Solidity smart contracts to CashScript for Bitcoin Cash." },

  { id: 70, type: "multiple", category: "Tech", points: 10,
    question: "Which developer SDK lets you send a BCH transaction in about three lines of Python?",
    options: ["bitcash", "Electrum-cash", "Mainnet.cash", "Libauth"],
    answer: "bitcash",
    learn: "bitcash is a Python BCH library that can send transactions in three lines of code." },

  { id: 71, type: "match", category: "Tech", points: 10,
    question: "What are Cash Oracles (Oracles.cash)?",
    options: ["Signed price feeds usable in BCH scripts", "A wallet", "An NFT drop", "A VPN"],
    answer: "Signed price feeds usable in BCH scripts",
    learn: "Cash Oracles provide signed price information that BCH's scripting engine can use in contracts." },

  { id: 72, type: "unscramble", answer: "DROPSHIP", category: "Tech", points: 10,
    hint: "___.Cash: airdrop tool for sending tokens/BCH to CashTokens NFT holders in bulk",
    learn: "Dropship.Cash is an airdrop dApp for distributing tokens or BCH to CashTokens NFT holders." },

  /* ---- NODES (new) ---- */
  { id: 73, type: "unscramble", answer: "KNUTH", category: "Node", points: 10,
    hint: "High-performance BCH full node with C++, Python, JS, and C# libraries",
    learn: "Knuth is a high-performance BCH full node and dev platform with multi-language libraries." },

  /* ---- NFT (new) ---- */
  { id: 74, type: "multiple", category: "NFT", points: 10,
    question: "Which platform lets you own your AI memory as a CashTokens NFT usable across Claude, GPT, and Gemini?",
    options: ["Qubes", "CashMint", "TapSwap", "Stickers.cash"],
    answer: "Qubes",
    learn: "Qubes is an AI-ownership platform on BCH where your AI memory is a CashTokens NFT." },

  { id: 75, type: "multiple", category: "NFT", points: 10,
    question: "Which no-code tool lets you issue fungible or non-fungible CashTokens without writing code?",
    options: ["CashTokens Studio", "CashScript", "Libauth", "NexOps"],
    answer: "CashTokens Studio",
    learn: "CashTokens Studio is a no-code tool for creating fungible or non-fungible CashTokens." },

  { id: 76, type: "match", category: "NFT", points: 10,
    question: "What is BitCats Heroes Club?",
    options: ["A 10K hand-drawn cat NFT collection", "A DEX", "A wallet", "A payment gateway"],
    answer: "A 10K hand-drawn cat NFT collection",
    learn: "BitCats Heroes Club is a 10,000-piece hand-drawn cat NFT collection using CashTokens." },

  /* ---- ADOPTION / ORGS ---- */
  { id: 77, type: "multiple", category: "Community", points: 10,
    question: "Which real-world adoption hub in North Queensland has 200+ merchants accepting BCH?",
    options: ["Bitcoin Cash City", "BCH Bliss", "Cash 3.0", "BCH Argentina"],
    answer: "Bitcoin Cash City",
    learn: "Bitcoin Cash City in Australia has 200+ BCH-accepting merchants and processes roughly 1 in 6 BCH transactions globally." },

  { id: 78, type: "multiple", category: "Community", points: 10,
    question: "Where is the annual BCH Bliss developer conference held?",
    options: ["Ljubljana, Slovenia", "Cebu City, Philippines", "Tokyo, Japan", "Townsville, Australia"],
    answer: "Ljubljana, Slovenia",
    learn: "BCH Bliss is an annual Bitcoin Cash developer conference held in Ljubljana, Slovenia." },

  { id: 79, type: "multiple", category: "Community", points: 10,
    question: "Which BCH conference is hosted by Paytaca in Cebu City, Philippines?",
    options: ["Cash 3.0", "BCH Bliss", "BCH Blaze", "Bliss"],
    answer: "Cash 3.0",
    learn: "Cash 3.0 is an international BCH conference hosted by Paytaca in Cebu City, focused on real-world adoption." },

  { id: 80, type: "fill", category: "Community", points: 10,
    question: "Which BCH-centric Reddit community was born in 2015 as a free-speech alternative to r/bitcoin?",
    accept: ["r/btc", "rbtc", "btc"],
    learn: "r/btc launched in 2015 as a free-speech alternative during the block-size debate." },

  /* ---- PRIVACY / DATA ---- */
  { id: 81, type: "match", category: "Privacy", points: 10,
    question: "What does 'CashFusion Stats' track?",
    options: ["CashFusion transactions & privacy network health", "BCH price", "NFT floor prices", "Merchant locations"],
    answer: "CashFusion transactions & privacy network health",
    learn: "CashFusion Stats is a dashboard tracking CashFusion transaction counts, participants, and network health." },

  /* ---- SOCIAL (new) ---- */
  { id: 82, type: "multiple", category: "Social", points: 10,
    question: "Which platform combines BCH with Nostr for decentralized social networking and tipping?",
    options: ["BCHNostr", "Memo.cash", "Read.cash", "Noise.app"],
    answer: "BCHNostr",
    learn: "BCHNostr blends Nostr social networking with built-in BCH micro-payment tipping." },

  { id: 83, type: "match", category: "Social", points: 10,
    question: "What is Munia.cash?",
    options: ["A community platform with tipping & sats rain", "A hardware wallet", "A DEX", "A mining pool"],
    answer: "A community platform with tipping & sats rain",
    learn: "Munia.cash is a BCH community platform with micropayment tipping, sats rain drops, and community tools." },

  /* ---- PAYMENTS / COMMERCE (new) ---- */
  { id: 84, type: "multiple", category: "Payments", points: 10,
    question: "Which pay-for-services platform lets Africans buy airtime, internet, and utilities with BCH?",
    options: ["PaySats", "Bitgree", "Travala", "Mobazha"],
    answer: "PaySats",
    learn: "PaySats lets users pay for everyday services across Africa using BCH." },

  { id: 85, type: "match", category: "Payments", points: 10,
    question: "What is Mobazha?",
    options: ["A decentralized P2P marketplace", "A block explorer", "A VPN", "A node"],
    answer: "A decentralized P2P marketplace",
    learn: "Mobazha is an open-source decentralized P2P marketplace supporting BCH with no middlemen." },

  /* ---- DATA & TRACKING ---- */
  { id: 86, type: "match", category: "Explorer", points: 10,
    question: "What is Tokenaut.cash?",
    options: ["A CashTokens navigation & directory hub", "A wallet", "A stablecoin", "A VPN"],
    answer: "A CashTokens navigation & directory hub",
    learn: "Tokenaut.cash is a curated index of BCH DeFi and NFT projects in the CashTokens ecosystem." },

  { id: 87, type: "multiple", category: "Explorer", points: 10,
    question: "Which real-time explorer animates pending BCH transactions as buildings in a city?",
    options: ["TxCity", "Blockchair", "3xpl", "Rabbit Explorer"],
    answer: "TxCity",
    learn: "TxCity is a real-time BCH visualizer that renders pending transactions as a growing city." },

  { id: 88, type: "multiple", category: "Explorer", points: 10,
    question: "The open-source, ad-free BCH Explorer with CashTokens support was built by whom?",
    options: ["Melroy van den Berg", "mainnet-pat", "SalemKode", "MrZwets"],
    answer: "Melroy van den Berg",
    learn: "BCH Explorer, an ad-free explorer with mempool and CashTokens support, was built by Melroy van den Berg." },

  /* ---- MERCHANT MAPS ---- */
  { id: 89, type: "match", category: "Payments", points: 10,
    question: "What is the 1KBCH Map?",
    options: ["A global BCH merchant map from Taiwan", "A DEX", "A wallet", "An NFT market"],
    answer: "A global BCH merchant map from Taiwan",
    learn: "The 1KBCH Map is a Taiwan-built global BCH merchant map where businesses can register and be rated." },

  /* ---- HACKATHON / ECOSYSTEM ---- */
  { id: 90, type: "multiple", category: "Community", points: 10,
    question: "What is the BCH-1 Hackcelerator?",
    options: ["The first BCH hackcelerator funding project teams", "A wallet", "A block explorer", "A stablecoin"],
    answer: "The first BCH hackcelerator funding project teams",
    learn: "The BCH-1 Hackcelerator provides funding to incubate quality Bitcoin Cash project teams." },

];

/* Make available to the engine whether loaded as a module or a plain script. */
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS; }
