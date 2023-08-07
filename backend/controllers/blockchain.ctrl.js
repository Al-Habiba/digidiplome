require ("dotenv").config()
const { ethers } = require("ethers");
const abi = require('../config/abi');

const wallet = new ethers.Wallet(process.env.OWNER_PRIVATE_KEY);
const provider = wallet.connect(
  new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
);
const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  abi,
  provider
);

// les fonctions de la blockchain
const soumettreUnDiplome = async (nomEtablissment, hashDuDiplome) => {
    await contract.enregistrerDiplome(nomEtablissment, hashDuDiplome);
  };

const verifierUnDiplome = async (hashDuDiplome) => {
  return await contract.verifierDiplomeExiste(hashDuDiplome);
};

verifierUnDiplome("0x12AC4D01").then((res) =>
  console.log("Diplome 0x12AC4D01 ", res ? "existe" : "n'existe pas")
);
verifierUnDiplome("0x85AC4F03").then((res) =>
  console.log("Diplome 0x85AC4F03 ", res ? "existe" : "n'existe pas")
);

module.exports = { soumettreUnDiplome, verifierUnDiplome }
