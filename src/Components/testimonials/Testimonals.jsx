import "./Testimonals.css";
export default function Testimonals (){

    const testimonalsData = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "Photo and Icon/twitter.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "Photo and Icon/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "Photo and Icon/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];

    return(
        <div className="testimonals" id="testimonals">
           <h1>Testimonals</h1>
           <div className="testimonals-container">
           {testimonalsData.map((d)=>{
            return <div  className={d.featured ? "featured testimonals-card":"testimonals-card"} key={d.id}>
                <div className="top">
                    <img className="left" src="Photo and Icon/right-arrow.png" alt="" />
                    <img className="user"src={d.img} alt="" />
                    <img className="right"src={d.icon} alt="" />
                </div>
                <div className="center">
                 {d.desc}
                 </div>
                <div className="bottom">
                    <h2>{d.name}</h2>
                    <h3>{d.title}</h3>
                </div>
            </div>
        })}
           </div>
        </div>
    )
}