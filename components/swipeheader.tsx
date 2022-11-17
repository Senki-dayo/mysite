import styles from '../styles/Home.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

function SwipeHeader() {
  return (
    
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><header className={styles.header1}/></SwiperSlide>
      <SwiperSlide><header className={styles.header2}/></SwiperSlide>
      <SwiperSlide><header className={styles.header3}/></SwiperSlide>
    </Swiper>
  );
};

export default SwipeHeader;