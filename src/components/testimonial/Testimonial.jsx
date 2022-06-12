import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
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
    name: "La Mona Gimenez",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore ipsam labore odit nulla, aut voluptatem saepe minima? Atque earum ex quisquam harum aliquid asperiores itaque sequi, assumenda suscipit ad.",
  },
  {
    id: 2,
    image: AVTR2,
    alt: "Avatar two",
    name: "Lionel Andres Messi",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore ipsam labore odit nulla, aut voluptatem saepe minima? Atque earum ex quisquam harum aliquid asperiores itaque sequi, assumenda suscipit ad.",
  },
  {
    id: 3,
    image: AVTR3,
    alt: "Avatar three",
    name: "Marcelo Daniel Gallardo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore ipsam labore odit nulla, aut voluptatem saepe minima? Atque earum ex quisquam harum aliquid asperiores itaque sequi, assumenda suscipit ad.",
  },
  {
    id: 4,
    image: AVTR4,
    alt: "Avatar four",
    name: "Stevie Wonder",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore ipsam labore odit nulla, aut voluptatem saepe minima? Atque earum ex quisquam harum aliquid asperiores itaque sequi, assumenda suscipit ad.",
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
