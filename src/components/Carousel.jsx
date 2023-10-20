import React, { useState } from "react";

import { testiominials } from "../assets/data";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Slide() {
  let [slideLength, setSlideLength] = useState(0);

  const slideRight = () => {
    if (slideLength < testiominials.length - 1) {
      slideLength += 1;
      setSlideLength(slideLength);

    } else if (slideLength === testiominials.length - 1) {
      slideLength = 0;
      setSlideLength(slideLength);

    }
  };

  const slideLeft = () => {
    if (
      slideLength === testiominials.length - 1 ||
      (slideLength < testiominials.length - 1 && slideLength !== 0)
    ) {
      slideLength -= 1;
      setSlideLength(slideLength);
      console.log(slideLength);
    } else if (slideLength === 0) {
      setSlideLength(testiominials.length - 1);
      console.log(slideLength);
    }
  };

  return (
    // <Carousel fade="true" slide="false">
    //   {testiominials &&
    //     testiominials.map((testimonial, index) => (
    //       <Carousel.Item>
    //         <img
    //           src={testimonial.imgUrl}
    //           alt={`Slide ${index}`}
    //           className="d-block w-[450px] h-[450px] object-fit rounded-full"
    //         />
    //         <Carousel.Caption>
    //           <h1 className="text-2xl text-blue-500 font-extrabold">
    //             {testimonial.name}
    //           </h1>
    //           <p>{testimonial.testimony}</p>
    //         </Carousel.Caption>
    //         {/* <ExampleCarouselImage text="First slide" />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <ExampleCarouselImage text="Second slide" />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <ExampleCarouselImage text="Third slide" />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption> */}
    //       </Carousel.Item>
    //     ))}
    // </Carousel>

    <>
      <div className="w-full h-full testimonials ">
        <div className="testimonials-contents relative flex items-center flex-col lg:flex-row justify-center lg:gap-20 w-[90%] mx-auto lg:w-[50vw]">
          <img
            className="w-[300px] h-[300px] object-cover rounded-full transition-all ease-in-out duration-1000"
            src={testiominials[slideLength].imgUrl}
            alt="user testimonial"
          />

          <div className="testimonials-details h-full flex flex-col items-start gap-2 md:gap-4">
            <p className="font-thin text-xl">
              “{testiominials[slideLength].testimony}”
            </p>
            <h1 className="font-bold text-2xl">
              {testiominials[slideLength].name}
            </h1>
            <div className="lg:w-full w-40 my-4 flex items-center justify-center gap-10 bg-blue-500 opacity-50 rounded-full">
              <BsArrowLeft
                onClick={slideLeft}
                className="cursor-pointer text-4xl text-white font-extrabold"
              />
              <BsArrowRight
                onClick={slideRight}
                className="cursor-pointer text-4xl text-white font-extrabold"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;
