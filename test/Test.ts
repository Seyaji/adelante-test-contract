import { expect } from "chai";
import { ethers } from "hardhat";
import { Test } from "../typechain-types/Test";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

describe('Test contract tests', function () {
  it('should deploy', async () => {
    const Test = await ethers.getContractFactory('Test');
    const test = await Test.deploy();
  })

  let owner: SignerWithAddress;
  let user: SignerWithAddress;
  let test: Test;
  
  beforeEach(async () => {
    [owner, user ] = await ethers.getSigners()
    const Test = await ethers.getContractFactory('Test');
    test = await Test.deploy();
  })

  it('should return hello', async () => {
    expect(await test.hello()).to.equal('Hello');
  })

  it('should return sum', async () => {
    expect(await test.returnSum(5, 5)).to.equal(10)
  })

  it('should store a number', async () => {
    await test.storeNumber(6)

    it('should return stored number', async () => {
      expect(await test.getNumber()).to.equal(6)
    })
  })

  it('should add balance', async () => {
    await test.connect(user).addBalance({
      value: ethers.utils.parseEther('1.00')
    })
    expect(await test.connect(user).getBalance()).to.equal(ethers.utils.parseEther('1.00'))
  })

  it('should remove balance', async () => {
    await test.connect(user).addBalance({
      value: ethers.utils.parseEther('1.00')
    })
    expect(await test.connect(user).getBalance()).to.equal(ethers.utils.parseEther('1.00'))
    expect(await test.connect(user).withdrawBalance(ethers.utils.parseEther('1.00')))
    expect(await test.connect(user).getBalance()).to.equal(0)
  })

})