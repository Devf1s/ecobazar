import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { testimonials } from '@/data/testimonials';
import Container from '@/components/common/Container';
import TestimonialSlide from './TestimonialSlide/TestimonialSlide';
import { SlideArrow } from '@images/components';
import classNames from 'classnames';
import styles from './Testimonials.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials: FC = () => {
	const testimonialSlides = [...testimonials, ...testimonials, ...testimonials];

	return (
		<div className={styles.testimonials}>
			<Container>
				<div className={styles.header}>
					<h2>Client Testimonials</h2>
					<div className={styles.slideArrows}>
						<div className={classNames('swiper-button-prev', styles.prevArrow)}>
							<SlideArrow />
						</div>
						<div className={classNames('swiper-button-next', styles.nextArrow)}>
							<SlideArrow />
						</div>
					</div>
				</div>
				<Swiper
					slidesPerView={3}
					spaceBetween={24}
					loop={true}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}}
					modules={[Navigation]}
					className={styles.slider}
				>
					{testimonialSlides.map((item, index) =>
						<SwiperSlide key={`${item.id} ${index}`}>
							<TestimonialSlide item={item} />
						</SwiperSlide>
					)}
				</Swiper>
			</Container>
		</div>
	)
}
export default Testimonials;