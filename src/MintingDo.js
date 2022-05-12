import React,{useState,useEffect}from "react";
import styles from "./css/Minting_Do.module.css";
import {Button} from "@mui/material/"
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import hh from "./assets/nftPreview/hh.png";import saber from "./assets/nftPreview/saber.png";import goggles from "./assets/nftPreview/goggles.png";import road from "./assets/nftPreview/road.png";import forest from "./assets/nftPreview/forest.png";import mountain from "./assets/nftPreview/mountain.png";
import nft1 from "./assets/nftPreview/nft1.png";import nft2 from "./assets/nftPreview/nft2.png";import nft3 from "./assets/nftPreview/nft3.png";import nft4 from "./assets/nftPreview/nft4.png";import nft5 from "./assets/nftPreview/nft5.png";import nft6 from "./assets/nftPreview/nft6.png";

function Minting_Do(){
    const ColorButton = styled(Button)(({ theme }) => ({
        fontFamily: [
            'Space',
          ],
          color: "gold",
          borderColor: "gold",
          size: "Large",
          fontSize: "22px",
          backgroundColor : "#220b25",
      }));

      const [showBG,setShowing] = useState(road)
      const [doOnce,setOnce] = useState(true)

      
      function ChangeBG()
      {
        if(doOnce){
            if(showBG==road)
            {
                
                    setShowing(mountain)
                
            }else if(showBG==mountain){
               
                    setShowing(forest)
                
                
            }else if(showBG==forest){
                
                    setShowing(road)
               
                
            }
            setOnce(false)
        }
          /*const images = [
              'url("./assets/nftPreview/road.png")',
              'url("./assets/nftPreview/forest.png")',
              'url("./assets/nftPreview/mountain.png")',
            ];

            const div = document.getElementById("ahoj");
            const bg = images[0];
            console.log("bg: " +bg)
            div.style.backgroundImage = bg;*/
            
      }

      
      setInterval(ChangeBG(), 1000);
    
      
      //ChangeBG()
      
      
      

    return(
        <div className={styles.Page}>
            <div className={styles.Title}>Welcome to RoD collection preview!</div>
            <div className={styles.TextDiv}><p className={styles.Text}>If you dont know anything about minting, <Link className={styles.Clickme} to="/Learn">click here</Link> for brief introduction.</p></div>

            <div className={styles.TextDiv}>
                <p className={styles.Text}>But essentially, minting is a process when your NFT is being stored on Ethereum blockchain.</p>
                <p className={styles.Text}>NFTs are starting at 0.0001 ether + minting fee. </p>
                <p className={styles.Text}>After that, you need to pick organization you want to donate crypto to (only Ethereum) and choose a value (ether), you want to give them as a donation.</p>   
                <p className={styles.Text}>Once you are done with all steps, you will receive your personal, one and only RoD NFT.</p>
            </div>

          
            <div className={styles.Title}>NFT preview</div>
            <div className={styles.PreviewDiv}>
                <img className={styles.Img} src={nft1} alt="nft1 preview" ></img>
                <img className={styles.Img} src={nft2} alt="nft2 preview" ></img>
                <img className={styles.Img} src={nft3} alt="nft3 preview" ></img>
                <img></img>
                <img className={styles.Img} src={nft6} alt="nft6 preview" ></img>
                <img className={styles.Img} src={nft5} alt="nft5 preview" ></img>
                <img className={styles.Img} src={nft4} alt="nft4 preview" ></img>
            </div>

            <div className={styles.TextDiv}>
                <p className={styles.Text}>This collection have One super rare NFT.</p>
                <p className={styles.Text}>Over 1600 unique combinations.</p>
                <p className={styles.Text}>Only 350 unique combinations can be minted!</p>
                <p className={styles.Text}>Every minted NFT is different and unique.</p>
            </div>

            <div className={styles.Title}>Traits</div>
            <div className={styles.TextDiv}>
                <p className={styles.Text}>Each NFT of RoD collection is made from multiple possible traits like Eyes, Mouth weapons, Colors, Backgrounds. <br></br> 
                There is more than 1600 unique combinations, but this collection only consist out of 350 pieces.
                </p>
            </div>

            <div className={styles.TraitDiv}>
                
                
                <div className={styles.Trait} ><img className={styles.ImgTrait} src={hh}></img></div>
                <div className={styles.Trait2} ><img className={styles.ImgTrait} src={hh}></img></div>
                
                <div className={styles.Trait6}><img className={styles.ImgTrait2} src={hh}></img></div>
                <div className={styles.Trait7}><img className={styles.ImgTrait2} src={hh}></img></div>
            </div>
            
            <div className={styles.Title + " "+  styles.Clickme}>Rarity</div>
            <div className={styles.TextDiv}>
                <p className={styles.Text + " "+  styles.Clickme}> Backgrounds:  </p>
                <p className={styles.Text}>brown fur : 11.14%, dark purple fur : 10.57%, turquoise splash : 10.29%, brownish fur : 9.71%, toxic splash : 8.86%, purple fur : 8.29%, blue fur : 8%, meteo splash : 8%, pink psycho : 6.57%, black and white : 6%, oceanic splash : 5.43%, orange splash : 4%, red rose : 3.14% </p>
                
                <p className={styles.Text + " "+  styles.Clickme}> Eyes:  </p>
                <p className={styles.Text}>lasers : 22.86%, aviation goggles : 22%, possesed : 20.57%, zombie : 18.29%, terminator : 16.29%</p>
                
                <p className={styles.Text + " "+  styles.Clickme}> Colors:  </p>
                <p className={styles.Text}>white : 12.29%,  purple : 12.29%, yellow : 11.71%, black : 11.43%, pink : 11.14%, green emerald : 10.29%, red : 9.71%, base : 5.71%, white extra : 1.71% ,diamond : 1.71%</p>
                
                <p className={styles.Text + " "+  styles.Clickme}> Mouth:  </p>
                <p className={styles.Text}>dragonbreath : 33.71%, lightsaber green : 33.43%, lightsaber yellow : 32.86%</p>
                
            </div>

            <div className={styles.Title}>OpenSea link to RoD collection!</div>
            <h1 className={styles.Title}>
            <ColorButton className={styles.Text}  variant="outlined"><a href="https://testnets.opensea.io/collection/revenge-of-dogos"> Revenge of Dogos</a></ColorButton>
            </h1>
                
            

            <div className={styles.Title}>LETS MINT YOUR FIRST MINT</div>
            <div className={styles.TextDiv}>
                <p className={styles.Text}>Step 1 - Connect with your MetaMask wallet.<br></br>
                Step 2 - Generate your NFT.<br></br>
                Step 3 - Choose organization and how much you want to donate.<br></br>
                Step 4 - Confirm transaction via MetaMask.<br></br>
                Step 5 - Receive your NFT.
                </p>
            </div>

            <div><h1 className={styles.Title}><ColorButton className={styles.Text}  variant="outlined"><Link to="/Donate">Donate and Mint!</Link></ColorButton></h1>
        </div>
        </div>
        
    );
}

export default Minting_Do;