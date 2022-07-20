import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/fotos-proyectos/avatar2.jpg";
import AVTR2 from "../../assets/fotos-proyectos/daisaku.jpg";
import AVTR3 from "../../assets/fotos-proyectos/joe-dispenza.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    id: 1,
    image: AVTR1,
    alt: "Avatar one",
    name: "Nichiren Daishonin",
    text: "If you want to free yourself from the sufferings of birth and death that you have endured since beginningless time, and without fail achieve unsurpassed enlightenment in this life, you must perceive the mystical truth that is originally inherent in all living beings. This truth is Myoho-Renge-Kyo. Reciting Myoho-Renge-Kyo will therefore enable you to grasp the mystical truth innate in all life.",
  },
  {
    id: 2,
    image: AVTR2,
    alt: "Avatar two",
    name: "Daisaku Ikeda",
    text: "With Buddhism, we can march through life with unflappable conviction, always triumphant. We can move forward on the path to happiness without any fear, with a heart full of optimism and hope, together with our family, friends and loved ones. We are here to enjoy our life. Let us not live an unhappy existence, full of sadness, suffering or defeat. (...) Let us live, then, a jubilant, triumphant and happy existence. And may each day be imbued with deep meaning and satisfaction! That is the purpose for which we practice Buddhism.",
  },
  {
    id: 3,
    image: AVTR3,
    alt: "Avatar three",
    name: "Joe Dispenza",
    text: "The point is that true happiness has nothing to do with pleasure, because the feel-good reliance on such intensely stimulating things only takes us further away from true joy.",
  },
  {
    id: 4,
    image: AVTR1,
    alt: "Avatar four",
    name: "Shakyamuni",
    text: "You can search through the entire universe for someone who is more deserving of your love and affection than yourself, and that person is nowhere to be found. You yourself, as much as anyone in the entire universe, deserve your own love and affection.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, name, text, alt }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={alt} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{text}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
