import React from "react";
import styles from "./css/Mint.module.css";
import { Link } from "react-router-dom";
import {Button} from "@mui/material/"
import { styled } from '@mui/material/styles';
import nft1 from "./assets/nftPreview/nft1.png";import nft2 from "./assets/nftPreview/nft2.png";import nft3 from "./assets/nftPreview/nft3.png";import nft4 from "./assets/nftPreview/nft4.png";import nft5 from "./assets/nftPreview/nft5.png";import nft6 from "./assets/nftPreview/nft6.png";

function Mint(){

    const ColorButton = styled(Button)(({ theme }) => ({
        fontFamily: [
            'Space',
          ],
          color: "#6bd4cd",
          borderColor: "#6bd4cd",
          size: "Large",
          fontSize: "22px",
          backgroundColor : "black",
      }));

    return(
        <div className={styles.Page}>
            <div className={styles.Title}>Blockchain</div>
            <div className={styles.TextDiv}><p className={styles.Text}>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved.</p></div>
            
            <div className={styles.Title}>Smart contract</div>
            <div className={styles.TextDiv}><p className={styles.Text}>Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss. They can also automate a workflow, triggering the next action when conditions are met.</p></div>
            
            <div className={styles.Title}>NFT</div>
            <div className={styles.TextDiv}><p className={styles.Text}>An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.</p></div>
            
            <div className={styles.Title}>NFT collection</div>
            <div className={styles.TextDiv}><p className={styles.Text}>It is a collection of NFT with same basics, but every NFT in the collection is unique.</p></div>
            
            <div className={styles.Title}>Minting</div>
            <div className={styles.TextDiv}><p className={styles.Text}>Minting is a process when NFT is being published onto Blockchain.</p></div>
            
            <div className={styles.Title}>What will you get for donating?</div>
                <div className={styles.TextDiv}>
                    <p className={styles.Text}>You-ll get your one of a kind Revenge of Dogos NFT.</p>
                    <p className={styles.Text}>You-ll help organization of your choice, with crypto gathered from your purchase.</p>
                    <p className={styles.Text}>You-ll get full power over your new NFT, so u can trade it with others, make a collection out of it, or use it in your own projects.</p>
                
                </div>
            
            <div className={styles.Title}>What will we get ?</div>
            <div className={styles.TextDiv}>
                <p className={styles.Text}>Nothing.<br></br> Purpose of this NFT is solely helping out animals in needs.</p>
            </div>

            

            <div className={styles.Title}>Lets Donate and Mint your first unique NFT !</div>
            <h1 className={styles.Title}><ColorButton className={styles.Text}  variant="outlined"><Link to="/Donate">Donate and Mint!</Link></ColorButton></h1>
        </div>
    );
}

export default Mint;