const abi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "nomEtablissement",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "documentHash",
          type: "string",
        },
      ],
      name: "DiplomeEnregistre",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "nomEtablissement",
          type: "string",
        },
        {
          internalType: "string",
          name: "documentHash",
          type: "string",
        },
      ],
      name: "enregistrerDiplome",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "documentHash",
          type: "string",
        },
      ],
      name: "obtenirDiplome",
      outputs: [
        {
          internalType: "string",
          name: "nomEtablissement",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "documentHash",
          type: "string",
        },
      ],
      name: "verifierDiplomeExiste",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  
module.exports = abi;
  