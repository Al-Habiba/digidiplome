const { ethers } = require("ethers");
const artefact = require("../artifacts/contracts/DiplomeRegistry.sol/DiplomeRegistry.json");
require("dotenv").config();

// const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.OWNER_PRIVATE_KEY);
const provider = wallet.connect(
  new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
);

const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  artefact.abi,
  provider
);
console.log("provider",provider)
const soumettreUnDiplome = async (nomEtablissment, hashDuDiplome) => {
  await contract.enregistrerDiplome(nomEtablissment, hashDuDiplome);
};

const verifierUnDiplome = async (hashDuDiplome) => {
  return await contract.verifierDiplomeExiste(hashDuDiplome);
};

// Ecouter l'évènement d'enregistrement de document
contract.on(
  "DiplomeEnregistre",
  (nomEtablissement, timestamp, documentHash) => {
    console.log(
      `Le Document ${documentHash} de l'ets ${nomEtablissement} a été enregistré avec succée, date ${Date(
        timestamp
      )}`
    );
  }
);

// test
// soumettreUnDiplome("UCAD", "0x12AC4D01");
verifierUnDiplome("0x12AC4D01").then((res) =>
  console.log("Diplome 0x12AC4D01 ", res ? "existe" : "n'existe pas")
);
verifierUnDiplome("0x85AC4F03").then((res) =>
  console.log("Diplome 0x85AC4F03 ", res ? "existe" : "n'existe pas")
);
