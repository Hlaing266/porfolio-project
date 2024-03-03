import "./PortfolioList.css";

export default function PortfolioList({title,active,id,setSelected,number}) {
 
  return (
    <li className={active? "portfoliolist active":"portfoliolist" }
        key={number}
        onClick={()=>{setSelected(id)}} >
       {title}
    </li>
  )
}
