require ("dotenv").config()
const { ethers } = require("ethers");
const artefact = require('../../blockchain/artifacts/contracts/DiplomeRegistry.sol/DiplomeRegistry.json')
const wallet = new ethers.Wallet(process.env.OWNER_PRIVATE_KEY);
const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  artefact.abi,
  provider

);
    //check the importation
    console.log('importation wallet:',wallet);
    console.log('contract address',process.env.CONTRACT_ADDRESS );

// les fonctions de la blockchain
const soumettreUnDiplome = async (nomEtablissment, hashDuDiplome) => {
    await contract.enregistrerDiplome(nomEtablissment, hashDuDiplome);
  };

  const verifierUnDiplome = async (hashDuDiplome) => {
    return await contract.verifierDiplomeExiste(hashDuDiplome);
  };

  module.exports={soumettreUnDiplome,verifierUnDiplome}
