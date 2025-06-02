import { Flex, Image } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import GiftImg2 from "../../assets/gift-banner-2.webp";
import GiftImg from "../../assets/gift-banner.webp";
import Logo from "../../assets/image.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GIFTS } from "../../utils/constant";
import GiftItem from "./components/GiftItem";
import VideoSection from "./components/VideoSection";

function TestimonialItem() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={Logo} alt="logo" preview={false} loading="lazy" />
        <p className="text-base capitalize text-[var(--color-brand-primary)] font-bold">
          Đức Anh
        </p>
        <p>Tài khoản: anhduc...</p>
      </div>
      <div className="bg-[url('/src/assets/testimonial-bg.png')] bg-contain bg-center bg-no-repeat">
        <p className="text-justify text-white md:text-[15px] text-[12px] font-[510] md:w-[60%] w-[70%] mx-auto py-10">
          Wow thật không ngờ đến thế mình vừa trúng 1 iphone 16 Promax, vừa đăng
          nhập vào 789BET đã may nắm đến vậy, cảm ơn 789BET về món quà giá trị
          này
        </p>
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="md:max-w-screen-2xl w-full mx-auto md:mt-32 mt-[15px]">
      <div className="flex justify-center items-center bg-[url('/src/assets/union.png')] bg-contain bg-center bg-no-repeat md:h-[58px] h-[32px] mb-14">
        <span className="uppercase text-[#171D29] md:text-2xl text-sm font-[860]">
          phản hồi của khách hàng
        </span>
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          425: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="md:w-auto w-screen"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {GIFTS.map((_, index) => (
          <SwiperSlide key={index}>
            <TestimonialItem />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function GiftList() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="md:mt-[27px] mt-[15px] grid md:grid-cols-4 grid-cols-2 gap-4">
        {GIFTS.map((gift, index) => (
          <GiftItem
            key={index}
            id={index}
            label={gift.label}
            image={gift.image}
          />
        ))}
      </div>
    </div>
  );
}

export default function Gift() {
  return (
    <div className="max-w-[1920px] mx-auto bg-[#283348] overflow-hidden font-times">
      <Image src={GiftImg} alt="gift-banner" preview={false} loading="lazy" />
      <Flex justify="center" align="center" className="md:mt-16 mt-4">
        <Image
          src={GiftImg2}
          alt="gift-banner"
          preview={false}
          loading="lazy"
          className=" !w-[80%] mx-auto"
        />
      </Flex>
      <Flex
        justify="center"
        align="center"
        className="md:mt-[27px] mt-[15px] md:mb-20 mb-7"
      >
        <div
          className="flex justify-center items-center uppercase text-center text-white md:w-[250px] md:h-[45px] w-[195px] h-[35px] rounded-[35px]"
          style={{
            background: "linear-gradient(90deg, #FF9400 0%, #FF3A46 100%)",
          }}
        >
          <span className="md:text-[17px] text-[12px] font-[860] font-times">
            chi tiết sự kiện
          </span>
        </div>
      </Flex>

      <GiftList />

      <div className="md:p-0 mx-auto max-w-screen-xl md:mt-[27px] mt-[15px] mb-10">
        <VideoSection />
      </div>
    </div>
  );
}
