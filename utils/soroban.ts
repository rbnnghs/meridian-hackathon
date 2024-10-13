import { SorobanClient, xdr, strToU32, U32 } from 'soroban-client';
import { Buffer } from 'buffer';

// Replace with your Soroban contract's ID and network details
const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS_HERE';
const NETWORK_PASSPHRASE = 'Test SDF Network ; September 2015'; // Use 'Public Global Stellar Network ; September 2015' for mainnet
const SERVER_URL = 'https://horizon-testnet.stellar.org'; // Use the mainnet Horizon URL for production

// Initialize the Soroban client
const sorobanClient = new SorobanClient.Server(SERVER_URL, { 
  allowHttp: false 
});

// Function to get the current Soroban network
export const getSorobanNetwork = () => {
  return {
    contractAddress: CONTRACT_ADDRESS,
    networkPassphrase: NETWORK_PASSPHRASE,
    horizonUrl: SERVER_URL,
  };
};

// Function to build the donation transaction
export const buildDonationTransaction = async (
  source: string,
  amount: number
) => {
  const network = getSorobanNetwork();
  
  // Create a new Soroban client instance
  const client = new SorobanClient.Server(network.horizonUrl, { 
    allowHttp: false 
  });

  // Fetch the account details
  const account = await client.getAccount(source);

  // Define the operation to call the smart contract
  const contractFn = xdr.ScContractFn.contractFnInvokeHostFunction(xdr.InvokeHostFunctionOpBuilder.build({
    contract: xdr.ContractId.fromAddress(network.contractAddress),
    function: 'donate',
    args: [
      xdr.ScVal.scvSymbol('donate'),
      xdr.ScVal.scvU32(strToU32(amount.toString())),
    ],
  }));

  // Build the transaction
  const txBuilder = new SorobanClient.TransactionBuilder(account, {
    fee: await client.fetchBaseFee(),
    networkPassphrase: network.networkPassphrase,
  })
    .addOperation(contractFn)
    .setTimeout(SorobanClient.TimeoutInfinite)
    .build();

  return txBuilder;
};