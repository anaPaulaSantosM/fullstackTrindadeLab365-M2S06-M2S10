import SimpleImageSlider from "react-simple-image-slider";
import './slider.css'

const images = [
  { url: "images/slider/slider1.png" },
  { url: "images/slider/slider2.png" },
  { url: "images/slider/slider3.png" }, 
 
];

const Slider = () => {
  return (
    <section className="container slide ">
    <div className="slider row col-12">
      <SimpleImageSlider
        width={'80vw'}
        height={'80vh'}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.1} 
        className='row-slider'
      />
    </div>
    </section>
  );
}

export default Slider;