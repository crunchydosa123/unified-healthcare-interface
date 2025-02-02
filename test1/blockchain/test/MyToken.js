const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
    let MyToken, myToken, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        const initialSupply = ethers.parseEther("1000"); // Convert initial supply to ether
        MyToken = await ethers.getContractFactory("MyToken");
        myToken = await MyToken.deploy(initialSupply);
        await myToken.waitForDeployment();
    });

    it("Should have correct name and symbol", async function () {
        expect(await myToken.name()).to.equal("MyToken");
        expect(await myToken.symbol()).to.equal("MTK");
    });

    it("Should assign the total supply to the owner", async function () {
        const ownerBalance = await myToken.balanceOf(owner.address);
        expect(await myToken.totalSupply()).to.equal(ownerBalance);
    });

    it("Should allow transfers between accounts", async function () {
        await myToken.transfer(addr1.address, ethers.parseEther("50"));
        expect(await myToken.balanceOf(addr1.address)).to.equal(ethers.parseEther("50"));
    });

    it("Should not allow transfers exceeding balance", async function () {
        await expect(myToken.connect(addr1).transfer(owner.address, ethers.parseEther("1000")))
            .to.be.revertedWithCustomError(myToken, "ERC20InsufficientBalance");
    });
});
