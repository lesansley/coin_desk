// const provider = await detectEthereumProvider();

// function MetaMask() {
//   const [hasWallet, setHasWallet] = React.useState(
//     provider === window.ethereum
//   );
//   const [connect, setConnect] = React.useState(false);
//   const [account, setAccount] = React.useState(null);
//   if (provider) {
//     // setHasWallet = console.log(provider === window.ethereum);
//     // From now on, this should always be true:
//     // provider === window.ethereum
//     // startApp(provider); // initialize your app
//   } else {
//     console.log("Please install MetaMask!");
//   }

//   const getWallet = React.useCallback(async () => {
//     const getAddress = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     const getBalance = await window.ethereum.request({
//       method: "eth_getBalance",
//       params: [getAddress[0], "latest"],
//     });

//     return {
//       address: getAddress[0],
//       balance: ethers.utils.formatEther(getBalance),
//     };
//   }, []);

//   function handleChainChanged(_chainId) {
//     // We recommend reloading the page, unless you must do otherwise
//     window.location.reload();
//   }

//   async function getChainId() {
//     return await window.ethereum.request({ method: "eth_chainId" });
//   }

//   const handleAccountsChanged = React.useCallback(
//     (accounts) => {
//       console.log(accounts);
//       if (accounts.length === 0) {
//         // MetaMask is locked or the user has not connected any accounts
//         console.log("Please connect to MetaMask.");
//       } else if (accounts[0] !== account) {
//         setAccount(account[0]);
//         // Do any other work!
//       }
//     },
//     [account]
//   );

//   React.useEffect(() => {
//     if (connect) {
//       if (provider !== window.ethereum) {
//         console.error("Do you have multiple wallets installed?");
//       }
//       const chainId = getChainId();
//       window.ethereum.on("chainChanged", handleChainChanged);
//       function handleChainChanged(_chainId) {
//         // We recommend reloading the page, unless you must do otherwise
//         window.location.reload();
//       }
//       window.ethereum
//         .request({ method: "eth_accounts" })
//         .then(handleAccountsChanged)
//         .catch((err) => {
//           // Some unexpected error.
//           // For backwards compatibility reasons, if no accounts are available,
//           // eth_accounts will return an empty array.
//           console.error(err);
//         });
//       // setHasWallet(true);
//       // getWallet().then(setAccount);
//     }
//   }, [connect, getWallet, handleAccountsChanged]);

//   const handleClick = () => setConnect(true);

//   const WalletSummary = () => {
//     return (
//       <Table className="table table-sm">
//         <thead>
//           <tr>
//             <th colSpan="2">MetaMask Wallet</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th>
//               <small>Address</small>
//             </th>
//             <td>{/* <small>{account.address}</small> */}</td>
//           </tr>
//           <tr>
//             <th>
//               <small>Balance</small>
//             </th>
//             <td>{/* <small>{account.balance} ether</small> */}</td>
//           </tr>
//         </tbody>
//       </Table>
//     );
//   };

//   return (
//     <>
//       {!hasWallet ? (
//         <div>Install MetaMask if you would like your account summary</div>
//       ) : (
//         <>
//           <div className="d-none d-md-block">
//             <Button
//               color="primary"
//               onClick={handleClick}
//               style={{ display: connect ? "none" : null }}
//             >
//               <img src="metamask.png" alt="MetaMask" width="30" heigh="30" />
//               <span> </span>Connect to MetaMask wallet
//             </Button>
//             <div style={{ display: connect ? null : "none" }}>
//               <WalletSummary />
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }