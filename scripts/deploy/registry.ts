import hre, { run, ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";

import addresses from "../../utils/addresses/generalProtocol.json";
import { txOptions } from "../../utils/txOptions";

import * as fs from "fs";
import * as path from "path";

async function main() {
  await run("compile");

  console.log("\n");

  // Get signer
  const [deployer] = await ethers.getSigners();
  const networkName: string = hre.network.name.toLowerCase();

  // Get chain specific values
  const txOption = txOptions[networkName as keyof typeof txOptions];

  console.log(`Deploying contracts with account: ${await deployer.getAddress()} to ${networkName}`);

  // Deploy Registry.sol
  const Registry_Factory: ContractFactory = await ethers.getContractFactory("Registry");
  const registry: Contract = await Registry_Factory.deploy(deployer.address, txOption);

  console.log("Deployed Registry at: ", registry.address);

  await registry.deployTransaction.wait();

  // Get Forwarder from registry
  const forwarderAddr: string = await registry.forwarder();

  // Update contract addresses in `/utils`
  const currentNetworkAddresses = addresses[networkName as keyof typeof addresses];

  const updatedAddresses = {
    ...addresses,

    [networkName]: {
      ...currentNetworkAddresses,

      registry: registry.address,
      forwarder: forwarderAddr,
    },
  };

  fs.writeFileSync(
    path.join(__dirname, "../../utils/addresses/generalProtocol.json"),
    JSON.stringify(updatedAddresses),
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
