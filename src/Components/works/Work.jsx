import { useState } from "react";
import "./Work.css";
export default function Work(){

    const workData=[
        {
            id: "1",
            icon: "Photo and Icon/mobile.png",
            title: "Web Design",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
              "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
          },
          {
            id: "2",
            icon: "Photo and Icon/globe.png",
            title: "Mobile Application",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          },
          {
            id: "3",
            icon: "Photo and Icon/writing.png",
            title: "Branding",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
          },
    ];
     const [currentSlide,setCurrentSlide] = useState(0);
    
     const handleClick= (way)=>{
        way==="left"
        ?setCurrentSlide(currentSlide>0?currentSlide -1 :2)
        :setCurrentSlide(currentSlide<workData.length -1 ? currentSlide +1 :0)
           
     }
     return (
        <div className="work" id="work">
            <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                {workData.map((d)=>{
                  return <div className="container" key={d.id}>
                 <div className="item" key={d.id}>
                     <div className="left">
                         <div className="leftcontainer">
                             <div className="imgcontainer">
                                 <img className="phone-img" src={d.icon} alt="" />

                             </div>
                             <h2>{d.title}</h2>
                             <p>{d.desc} </p>
                             <span>Projects</span>
                         </div>
                     </div>
                     <div className="right">
                         <img className="work-right-img" src={d.img}alt="" />
                     </div>
                 </div>
             </div>
                })}
                
            </div>
            <img className="arrow left" src="Photo and Icon/arrow.png" alt="" onClick={()=>handleClick("left")} />
            <img className="arrow right" src="Photo and Icon/arrow.png" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}