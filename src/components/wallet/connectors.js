import { InjectedConnector } from "@web3-react/injected-connector";
import { SUPPORTED_CHAINS } from "../../config";

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAINS,
});
