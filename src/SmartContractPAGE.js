import React,{ useState } from "react";
import styles from "./css/SmartContract.module.css"
import withdraw from "./assets/withdraw_func.png"
import basics from "./assets/basic_func.png"
import mint from "./assets/mint_func.png"

function SmartContractPage(){
    const [dontShow,setShowing] = useState(false)

    return (
        <div className={styles.Page}>
            <h1 className={styles.Title}>This is smart contract webpage</h1>
            <div className={styles.TextDiv}>
                <p className={styles.Text}>This is our Smart Contract. This chunk of code is responsible for delivering your crypto-currency to the organization, you choosed.
                 It is transparent, safe, so You dont have to worry about your money donation through buying an NFT.</p>
            </div>
            <div className={styles.ContractDiv}>
                <div className={styles.ContractTitle}><p className={styles.Text}>Smart Contract</p> </div>
                <div><img src={basics}></img></div>
                <div className={styles.ContractTitle}><p className={styles.Text}>Mint function</p> </div>
                <div><img src={mint}></img></div>
                <div className={styles.ContractTitle}><p className={styles.Text}>Withdraw function</p> </div>
                <div><img src={withdraw}></img></div>
                {dontShow && (<div className={styles.CodeDiv}></div>)}
                {dontShow && (<p>sdfsdf as da da da ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssss  sssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss s s s</p>)}  
            </div>

            <div className={styles.TextDiv}>
                <p className={styles.Text}>Rinkeby Ethereum Blockchain address : <a href="https://rinkeby.etherscan.io/address/0x2b498d1f842bc282351a77e21bcfef8c7ef5c09e">0x2b498d1f842bc282351a77e21bcfef8c7ef5c09e</a></p>
            </div>
        </div>
    );
}

export default SmartContractPage;