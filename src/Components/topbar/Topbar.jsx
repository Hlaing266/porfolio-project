import "./Topbar.css";
import { IoMdMail, IoMdPerson } from "react-icons/io";
/*  */


export default function Topbar ({openmenu,closemenu}){
 
    return (
        <div className={"topbar  "+ (openmenu && "change") } >
           <div className="wapper">
            <div className="left">
                <a href="#intro" className="logo"> Hlaing. </a>
                <div className="itemContainer">
                < IoMdPerson  className="icon"/>
                <span>+95 0968 4808 323</span>
                </div>
                <div className="itemContainer">
                <IoMdMail className="icon"/>
                <span>Hlaing2024@gmail.com</span>
                </div>
            </div>
            <div className="right">
                
             <div class="down-popup">
               
                 <label   onClick={()=>closemenu(!openmenu)}>
                    <div class="hanburgermenu">
                      <span class="first"></span>
                      <span class="mid"></span>
                      <span class="end"></span>
                   </div>
                  <h2>Menu</h2>
                  </label>

           <div class="popup-menu-list">
            <ul>
              <li onClick={()=>closemenu(false)}><a href="#intro">Home</a></li>

              <li onClick={()=>closemenu(false)}><a href="#portfolio">Porfolio</a></li>
              
              <li onClick={()=>closemenu(false)}><a href="#work" >Works</a></li>
              
              <li onClick={()=>closemenu(false)}><a href="#testimonals" >Textimonals</a></li>
              
              <li onClick={()=>closemenu(false)}><a href="#contact" >Contact</a></li>
            </ul>
           </div>
          </div>
                </div>
            
           </div>
        </div>
    )
}