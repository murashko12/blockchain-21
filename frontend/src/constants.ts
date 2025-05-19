export const CONTRACT_ADDRESS = "0xb5DeD66A18A0800B5f41d3376d0deda92891e3c6";
export const CONTRACT_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "cardDealt",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "dealCardToPlayer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "dealerBusted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "dealerGotBlackjack",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "dealerScoreUpdate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "dealerStatusUpdate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "placeBet",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "playerBusted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "playerGotBlackjack",
        "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "adr",
          "type": "address"
        }
      ],
      "name": "playerRegistered",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "registerPlayer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum BJ_game.results",
          "name": "res",
          "type": "uint8"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "playerAddres",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "score",
              "type": "uint256"
            },
            {
              "internalType": "enum BJ_game.status",
              "name": "p_status",
              "type": "uint8"
            },
            {
              "components": [
                {
                  "internalType": "enum BJ_game.suit",
                  "name": "s",
                  "type": "uint8"
                },
                {
                  "internalType": "enum BJ_game.rank",
                  "name": "r",
                  "type": "uint8"
                }
              ],
              "internalType": "struct BJ_game.card[]",
              "name": "cards",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "player",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "isSplitted",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isResolved",
                  "type": "bool"
                }
              ],
              "internalType": "struct BJ_game.bet",
              "name": "p_bet",
              "type": "tuple"
            }
          ],
          "internalType": "struct BJ_game.player",
          "name": "p",
          "type": "tuple"
        }
      ],
      "name": "resolveBet",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "enum BJ_game.results",
          "name": "res",
          "type": "uint8"
        }
      ],
      "name": "showdownReached",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "enum BJ_game.rank",
          "name": "",
          "type": "uint8"
        }
      ],
      "name": "dealer_card_exists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
]