import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"  
import img from "../../assets/download.jpeg"
import img1 from "../../assets/bottle.jpg"
import img2 from "../../assets/images (2).jpeg"
import img3 from "../../assets/pexels-mali-maeder-802221.jpg"
import ComBlog from "../../components/reuse/ComBlog";

const Blog = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll:1,
        // autoplay: true,
        // cssEase: "linear",
        responsive:[
          {
              breakpoint: 770,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 430,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          },
        ]
      };
  return (
    <>
    <div id="blog" className="w-full  flex items-center justify-center flex-col">
        <span className="text-[30px]  flex small:text-[24px] medium:text-[26px] font-bold">Latest Blog</span>
        <div className="w-[90%] ">
            <Slider {...settings}>
            <ComBlog imG={img} title="Lorem ipsum dolor sit amet consectetur adipisicing elit." subtitle="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sequi
        "/>
        <ComBlog imG={img1} title="Lorem ipsum dolor sit amet consectetur  elit." subtitle="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sequi
        "/>
        <ComBlog imG={img2} title="Lorem ipsum dolor consectetur." subtitle="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sequi
        "/>
        <ComBlog imG={img3} title="Lorem ipsum dolor sit amet consectetur  elit"subtitle="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sequi
        "/>
            </Slider>
        </div>
    </div>
    <br/>
    </>
  )
}

export default Blog