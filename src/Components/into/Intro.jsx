import { init } from "ityped";

import "./Intro.css";
import { useEffect,useRef } from "react";
export default function Into (){
    const textRef = useRef();
    useEffect(()=>{
     init(textRef.current,{
        showCursor:true,
        strings:["Developer","Desinger","Content Writer"]
     })
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="intro-left">
                <div className="imgcontainer">
                    <img className="intro-img"src="Photo and Icon/man.png" alt="" />
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-wrapper">
                    <h2>Hi There,I'm</h2>
                    <h1>Hlaing Myo Aung</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="Photo and Icon/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}