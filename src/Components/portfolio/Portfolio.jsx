import "./Portfolio.css";
import PortfolioList from "../portfoliiList/PortfolioList";
import { useEffect,useState } from "react";
import {
    featuredPortfolio,
    contentPortfolio,
    designPortfolio,
    mobilePortfolio,
    webPortfolio} from "../../data";


export default function Portfolio (){

    const [selected,setSelected]=useState("Featured");
    const [data,setData]=useState([]);

    const List =[
        {
            number:1,
            id:"Featured",
            title:"Featured",
        },
        {
            number:2,
            id:"Web-App",
            title:"Web App",
        },
        {
            number:3,
            id:"Mobile-App",
            title:"Mobile App",
        },
        {
            number:4,
            id:"Design",
            title:"Design",
        },
        {
            number:5,
            id:"Branding",
            title:"Brandking",
        }
    ];
      useEffect(()=>{
        switch(selected){
            case "Featured":
            setData(featuredPortfolio);
            break;

            case "Web-App":
                setData(webPortfolio);
            break;

            case "Mobile-App":
                setData(mobilePortfolio);
            break;

            case "Design":
                setData(designPortfolio);
            break;

            case "Branding":
                setData(contentPortfolio);
            break;
            default:
                setData(featuredPortfolio);
        }
      },[selected]);
    return (
        <div className="portfolio" id="portfolio">
             <h1 >Portfolio</h1>
             <ul>
               {List.map((item)=>{
               return <PortfolioList number={item.number} id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected}/>
               })}
             </ul>
             <div className="container">
               {data.map((d)=>{
                     return  <div className="item" key={d.id} > 
                             <img src={d.img} alt="" />
                             <h3>{d.title}</h3>
                              </div>
               })}
                
               
             </div>
        </div>
    )
}