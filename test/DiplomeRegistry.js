const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("DiplomeRegistry", function () {
  async function deployFixture() {
    const DiplomeRegistry = await ethers.getContractFactory("DiplomeRegistry");
    const [owner, otherAccount] = await ethers.getSigners();
    const diplomeRegistry = await DiplomeRegistry.deploy();

    return { diplomeRegistry, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { diplomeRegistry, owner } = await loadFixture(deployFixture);

      expect(await diplomeRegistry.owner()).to.equal(owner.address);
    });
  });

  describe("Enregistrement et lecture", function () {
    describe("Validations", function () {
      it("Should revert with the right error if called from another account", async function () {
        const { diplomeRegistry, otherAccount } = await loadFixture(
          deployFixture
        );

        await expect(
          diplomeRegistry
            .connect(otherAccount)
            .enregistrerDiplome("UCAD", "0xA025BD08")
        ).to.be.revertedWith("Non autorise");
      });

      it("Should revert with the right error if 'Diplome' already exist", async function () {
        const { diplomeRegistry, owner } = await loadFixture(deployFixture);

        await diplomeRegistry.enregistrerDiplome("UCAD", "0xA025BD08");

        await expect(
          diplomeRegistry.enregistrerDiplome("UCAD", "0xA025BD08")
        ).to.be.rejectedWith("Ce diplome existe deja");
      });
    });

    describe("Events", function () {
      it("Should emit an event on save", async function () {
        const { diplomeRegistry } = await loadFixture(deployFixture);

        await expect(diplomeRegistry.enregistrerDiplome("UCAD", "0xA025BD08"))
          .to.emit(diplomeRegistry, "DiplomeEnregistre")
          .withArgs("UCAD", anyValue, "0xA025BD08"); // We accept any value as `when` arg
      });
    });

    describe("Read", function () {
      it("Should return the right data", async function () {
        const { diplomeRegistry } = await loadFixture(deployFixture);

        await diplomeRegistry.enregistrerDiplome("UCAD", "0xA025BD08");

        await expect(
          await diplomeRegistry.obtenirDiplome("0xA025BD08")
        ).to.include("UCAD");
      });
    });
  });

  describe("Verifications", function () {
    it("Should be return true", async function () {
      const { diplomeRegistry } = await loadFixture(deployFixture);

      await diplomeRegistry.enregistrerDiplome("UCAD", "0xA025BD08");

      expect(await diplomeRegistry.verifierDiplomeExiste("0xA025BD08")).to.be
        .true;
    });

    it("Should be return false", async function () {
      const { diplomeRegistry } = await loadFixture(deployFixture);

      expect(await diplomeRegistry.verifierDiplomeExiste("0xA025BD08")).to.be
        .false;
    });
  });
});
