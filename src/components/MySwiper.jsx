// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function MySwiper() {
  return (
    <div>
      <Swiper class="" pagination={true} navigation={true} modules={[Navigation, Pagination]} className="mySwiper"
      style={{
        "--swiper-navigation-color": "#FFFFFF",
        "--swiper-pagination-color": "#D9D9D9",
      }}
      >
        <SwiperSlide>
          <div class="object-cover flex justify-center">
            <img src="../photos/companies.png"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="object-cover flex justify-center">
            <img src="../photos/prizes.png"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="object-cover flex justify-center">
            <img src="../photos/projects.png"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="object-cover flex justify-center">
            <img src="../photos/workshops.png"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
