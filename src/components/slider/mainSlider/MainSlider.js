import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slide01 from "./../../../assets/images/slide/01.webp";
import Slide02 from "./../../../assets/images/slide/02.webp";
import Slide03 from "./../../../assets/images/slide/03.webp";
import Slide04 from "./../../../assets/images/slide/04.webp";
import Slide05 from "./../../../assets/images/slide/05.webp";
import Slide06 from "./../../../assets/images/slide/06.webp";
import Slide07 from "./../../../assets/images/slide/01.gif";
import Slide08 from "./../../../assets/images/slide/02.gif";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MainSlider.css";
import { Link } from "react-router-dom";

function MainSlider() {
    return (
        <>
            <Swiper
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="main-slider"
            >
                <SwiperSlide>
                    <Link to="/product">
                        <img src={Slide01} alt="slide01" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/product">
                        <img src={Slide02} alt="slide02" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/product">
                        <img src={Slide03} alt="slide03" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/product">
                        <img src={Slide04} alt="slide04" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/product">
                        <img src={Slide05} alt="slide05" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/product">
                        <img src={Slide06} alt="slide06" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/product">
                        <img src={Slide07} alt="slide07" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/product">
                        <img src={Slide08} alt="slide08" />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default MainSlider;
