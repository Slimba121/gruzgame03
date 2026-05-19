export const GRUZGAME03_CONTRACT_ADDRESS = "0xFBc9052351D0CBBa4a62233093a1d130D1d9C995" as const;
export const GRUZGAME03_CHECKIN_PRICE_ETH = "0.00001";
export const GRUZGAME03_BUILDER_CODE = "bc_k6hoeukp";
export const GRUZGAME03_BUILDER_CODE_DATA_SUFFIX =
  "0x62635f6b36686f65756b700b0080218021802180218021802180218021" as const;

export const gruzGame03OnchainAbi = [
  {
    inputs: [{ internalType: "uint256", name: "tapsCount", type: "uint256" }],
    name: "tap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkIn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export function withGruzGame03BuilderCodeDataSuffix(data: `0x${string}`): `0x${string}` {
  return `${data}${GRUZGAME03_BUILDER_CODE_DATA_SUFFIX.slice(2)}` as `0x${string}`;
}

export function getGruzGame03ContractAddress(): `0x${string}` {
  return GRUZGAME03_CONTRACT_ADDRESS;
}
