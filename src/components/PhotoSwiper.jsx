// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function PhotoSwiper() {
  return (
    <div>
      <Swiper class="" pagination={true} navigation={true} modules={[Navigation, Pagination]} className="mySwiper"
      style={{
        "--swiper-navigation-color": "#FFFFFF",
        "--swiper-pagination-color": "#D9D9D9",
      }}
      >
        <SwiperSlide>
          <div class="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img class="m-h-[430px]" src="../photos/build.png"/>
            <h1 class='text-4xl py-10 text-center'>Build your resume!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img class="m-h-[430px]" src="../photos/compete.png"/>
            <h1 class='text-4xl py-10 text-center'>Compete with your peers!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img class="m-h-[430px]" src="../photos/eat.png"/>
            <h1 class='text-4xl py-10 text-center'>Eat good food!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img class="m-h-[430px]" src="../photos/speak.png"/>
            <h1 class='text-4xl py-10 text-center'>Speak with recruiters!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img class="m-h-[430px]" src="../photos/become.png"/>
            <h1 class='text-4xl py-10 text-center'>Become more technical!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="object-cover flex flex-col justify-center items-center px-[10%] desktop:px-[0%]">
            <img class="m-h-[430px]" src="../photos/win.png"/>
            <h1 class='text-4xl py-10 text-center'>Win cool prizes!</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
