import {
    NetworkInfo
  } from 'starterra-tool-dapp'


export const avaliableNetworks: Record<string, NetworkInfo> = {
  mainnet: {
    name: "mainnet",
    chainID: "columbus-4",
    lcd: "https://lcd.terra.dev",
  },
  testnet: {
    name: "testnet",
    chainID: "tequila-0004",
    lcd: "https://tequila-lcd.terra.dev",
  },
}