import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex">
          <div  className="  bg-gradient-to-r from-gray-500 to-gray-100 px-6 rounded-3xl">
            <div className="text-6xl p-5">YENİ SEZONDA, YENİ NİKELAR </div>
            <div className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto suscipit obcaecati excepturi, inventore consequatur
              odit sunt delectus. Laudantium enim laboriosam fuga, ipsum culpa
              vel voluptatum quo incidunt nobis. Magnam, suscipit!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl flex items-center justify-center  w-[250px] h-16 bg-gray bg-gray-300">incele</div>
          </div>

          <img className="w-[500px]"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/610dba31-ebdc-4c90-a01a-60342a0a37e7/air-jordan-1-elevate-low-ayakkab%C4%B1s%C4%B1-gWJcGq.png"
            alt="nike ayakkabı"
          />
        </div>
        <div className="!flex">
        <div  className="  bg-gradient-to-r from-gray-500 to-gray-100 rounded-3xl px-6">
            <div className="text-6xl p-5">YENİ SEZONDA, YENİ NİKELAR </div>
            <div className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto suscipit obcaecati excepturi, inventore consequatur
              odit sunt delectus. Laudantium enim laboriosam fuga, ipsum culpa
              vel voluptatum quo incidunt nobis. Magnam, suscipit!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl flex items-center justify-center  w-[200px] h-16 bg-gray bg-gray-300">incele</div>
          </div>
          <img className="w-[500px]"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9fb89dfa-c161-4695-b52a-2c94d32e1ee5/air-max-sc-ayakkab%C4%B1s%C4%B1-khnnRK.png"
            alt="nike ayakkbı"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
