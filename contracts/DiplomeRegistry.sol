// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DiplomeRegistry {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Non autorise");
        _;
    }
    // Structure pour stocker les détails du diplôme
    struct Diplome {
        string nomEtablissement;
        uint256 timestamp;
        string documentHash;
    }

    // Mapping pour enregistrer les diplômes
    mapping(string => Diplome) private diplomes;

    // Événement déclenché lors de l'enregistrement d'un nouveau diplôme
    event DiplomeEnregistre(
        string nomEtablissement,
        uint256 timestamp,
        string documentHash
    );

    // Fonction pour enregistrer un nouveau diplôme
    function enregistrerDiplome(
        string memory nomEtablissement,
        string memory documentHash
    ) public onlyOwner {
        // Vérifier que le diplôme n'a pas déjà été enregistré
        require(
            diplomes[documentHash].timestamp == 0,
            "Ce diplome existe deja"
        );

        uint timestamp = block.timestamp;

        // Créer une nouvelle instance de diplôme
        Diplome memory nouveauDiplome = Diplome(
            nomEtablissement,
            timestamp,
            documentHash
        );

        // Enregistrer le nouveau diplôme
        diplomes[documentHash] = nouveauDiplome;

        // Émettre un événement pour signaler l'enregistrement du diplôme
        emit DiplomeEnregistre(nomEtablissement, timestamp, documentHash);
    }

    // Fonction pour vérifier si un diplôme existe dans le registre
    function verifierDiplomeExiste(
        string memory documentHash
    ) public view returns (bool) {
        return diplomes[documentHash].timestamp != 0;
    }

    // Fonction pour obtenir les détails d'un diplôme enregistré
    function obtenirDiplome(
        string memory documentHash
    ) public view returns (string memory nomEtablissement, uint256 timestamp) {
        Diplome memory diplome = diplomes[documentHash];
        require(diplome.timestamp != 0, "Ce diplome n'existe pas");
        return (diplome.nomEtablissement, diplome.timestamp);
    }
}
