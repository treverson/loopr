import Account from "./Account";
import EthTransaction from 'ethereumjs-tx'
import Transaction from "../../common/Loopring/ethereum/transaction";
import * as fm from "../../common/Loopring/common/formatter";

export default class MetaMaskUnlockAccount extends Account {

  constructor(input) {
    if(input.web3) {
      super({unlockType: 'metamask', address: input.web3.eth.accounts[0]})
      this.web3 = input.web3
      this.account = this.web3.eth.accounts[0]
      console.log(this.account)
      this.web3.version.getNetwork((err, netId) => {
        if(netId !== '1') throw new Error("Sorry, we currently only support MetaMask mainnet")
      })
    }
  }

  getAddress() {
    if(this.web3) return this.web3.eth.accounts[0]
    else return null
  }

  async signTx(rawTx){
    const ethTx = new EthTransaction(rawTx);
    const hash = ethTx.hash(false)
    const signMethod = () => {
      return new Promise((resolve)=>{
        this.web3.eth.sign(this.account, fm.toHex(hash), function(err, result){
          if(!err){
            resolve(result)
          } else {
            console.error(err);
            const errorMsg = err.message.substring(0, err.message.indexOf(' at '))
            resolve({error:{message:errorMsg}})
          }
        })
      })
    }
    if(this.web3) {
      return await signMethod()
    } else {
      //TODO
      console.log("no metamask")
    }
  }

  async sendTransaction(rawTx) {
    let tx = new Transaction(rawTx)
    await tx.complete(this.address)
    /**
     * Could not use `web3.eth.sign()` to get signed data，then `sendRawTransaction(signed)` due to the reason below, so use `sendTransaction` supported by Metamask directly
     * In addition to this, you can sign arbitrary data blobs using web3.eth.sign(fromAddress, data, callback), although it has protections to sign it differently than a transaction, so users aren't tricked into signing transactions using this method.
     */
    const sendMethod = () => {
      return new Promise((resolve)=>{
        this.web3.eth.sendTransaction(tx.raw, function(err, transactionHash) {
          if (!err){
            console.log(transactionHash);
            resolve({transactionHash:transactionHash})
          } else {
            const errorMsg = err.message.substring(0, err.message.indexOf(' at '))
            resolve({error:{message:errorMsg}})
          }
        })
      })
    }
    if(this.web3) {
      return await sendMethod()
    } else {
      //TODO
      console.log("no metamask")
    }
  }
}