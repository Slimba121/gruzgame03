const DEFAULT_GRUZGAME03_CONTRACT = "0xd8d1015bF05F07DbfAA4E5F100Bc5A5706652BC6" as const;

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
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export function getGruzGame03ContractAddress(): `0x${string}` | null {
  const value = process.env.NEXT_PUBLIC_GRUZGAME03_CONTRACT;
  if (value && /^0x[a-fA-F0-9]{40}$/.test(value)) return value as `0x${string}`;
  return DEFAULT_GRUZGAME03_CONTRACT;
}
