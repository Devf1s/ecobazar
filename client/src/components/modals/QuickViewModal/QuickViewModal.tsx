import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade, Navigation, Thumbs } from 'swiper/modules';
import useCounter from '@/hooks/useCounter';
import { calculateDiscount } from '@/utils/discount';
import { productGallery } from '@/data/productGallery';
import { ProductItem } from '@/types/models/ProductItem';
import ProductButton from '@/components/Buttons/ProductButton/ProductButton';
import SocialLinks from '@/components/common/SocialLinks/SocialLinks';
import Modal from '@/components/common/Modal/Modal';
import Stars from '@/components/common/Stars/Stars';
import Price from '@/components/common/Price';
import { ArrowUp, Wishlist } from '@images/components';
import { Minus, Plus } from '@images/components';
import farmary from '@images/brands/farmary.png';
import { Close } from '@images/components';
import classNames from 'classnames';
import styles from './QuickViewModal.module.scss';

import 'swiper/scss';
import 'swiper/css/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

interface QuickViewModalProps {
	isOpen: boolean;
	closeModal: () => void;
	product?: ProductItem;
}

const QuickViewModal: FC<QuickViewModalProps> = ({ isOpen, closeModal, product }) => {
	const { count, increment, decrement, isIncrement, isDecrement } = useCounter();
	const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
	const [activeIndex, setActiveIndex] = useState<number>(thumbsSwiper?.clickedIndex || 0);

	useEffect(() => {
		if (thumbsSwiper) {
			thumbsSwiper.on('click', () => {
				const clickedIndex = thumbsSwiper.clickedIndex;
				if (clickedIndex !== null && clickedIndex !== activeIndex) {
					setActiveIndex(clickedIndex);
					mainSwiper?.slideTo(clickedIndex);
				}
			});
		}
	}, [thumbsSwiper, mainSwiper, activeIndex]);

	if (!product) return null;

	return (
		<Modal
			isOpen={isOpen}
			onClose={closeModal}
		>
			<div className={styles.content}>
				<button
					onClick={closeModal}
					className={styles.modalClose}
				>
					<Close />
				</button>
				<div className={styles.between}>
					<div className={styles.productGallery}>
						{/* --- Thumbs Swiper --- */}
						<div className={styles.productThumbWrapper}>
							<div className={classNames(styles.prevArrow, 'swiper-button-prev')}>
								<ArrowUp />
							</div>
							<Swiper
								onSwiper={setThumbsSwiper}
								direction={'vertical'}
								slidesPerView={4}
								spaceBetween={12}
								navigation={{
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev'
								}}
								watchSlidesProgress 
								modules={[Navigation, Thumbs]}
								className={styles.productThumbSlider}
							>
								{productGallery[0].images.map((image, index) =>
									<SwiperSlide
										key={image.id}
										className={classNames(
											styles.productThumbSlide,
											{ [styles.active]: index === activeIndex }
										)}
									>
										<div className={styles.productThumbImage}>
											<img
												src={image.src}
												alt={image.alt}
											/>
										</div>
									</SwiperSlide>
								)}
							</Swiper>
							<div className={classNames(styles.nextArrow, 'swiper-button-next')}>
								<ArrowUp />
							</div>
						</div>

						{/* --- Main Swiper --- */}
						<Swiper
							onSwiper={setMainSwiper}
							onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.activeIndex)}
							direction={'horizontal'}
							slidesPerView={1}
							mousewheel={true}
							allowTouchMove={false}
							speed={300}
							effect={'fade'}
							navigation={{
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev'
							}}
							thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
							modules={[EffectFade, Mousewheel, Navigation, Thumbs]}
							className={styles.productMainSlider}
						>
							{productGallery[0].images.map((image, index) =>
								<SwiperSlide
									key={image.id}
									className={styles.productMainSlide}
								>
									<div className={styles.productMainImage}>
										<img
											src={image.srcMain}
											alt={`${image.alt} ${index}`}
										/>
									</div>
								</SwiperSlide>
							)}
						</Swiper>
					</div>

					<div className={styles.details}>
						<div className={styles.productTop}>
							<div className={styles.header}>
								<h2 className={styles.title}>
									{product.name}
								</h2>
								<div className={styles.availability}>
									<span>In Stock</span>
								</div>
							</div>
							<div className={styles.metaData}>
								<div className={styles.review}>
									<Stars customStyles={styles} rating={5} />
									<span>4 Review</span>
								</div>
								<div className={styles.separator}>
									<span></span>
								</div>
								<div className={styles.sku}>
									<span>SKU:</span> 2,51,594
								</div>
							</div>
							<div className={styles.pricing}>
								<Price
									product={product}
									className={styles.price}
									isReversed={true}
								/>
								{product.isSale &&
									<div className={styles.discount}>
										<span>{calculateDiscount(product)} Off</span>
									</div>
								}
							</div>
						</div>
						<div className={styles.productBody}>
							<div className={styles.productDetails}>
								<div className={styles.productBrand}>
									<p className={styles.productText}>
										Brand:
									</p>
									<img
										src={farmary}
										alt='Farmary'
									/>
								</div>
								<div className={styles.productSocial}>
									<p className={styles.productText}>
										Share item:
									</p>
									<SocialLinks />
								</div>
							</div>
							<p className={styles.text}>
								This product is crafted with the highest quality standards, ensuring long-lasting performance. Ideal for everyday use, it offers excellent value and reliability for a wide range of applications.
							</p>
						</div>
						<div className={styles.actions}>
							<div className={styles.counter}>
								<button
									onClick={decrement}
									className={classNames(styles.counterBtn, { [styles.disabled]: isDecrement })}
									disabled={isDecrement}
								>
									<Minus />
								</button>
								<span>{count}</span>
								<button
									onClick={increment}
									className={classNames(styles.counterBtn, { [styles.disabled]: isIncrement })}
									disabled={isIncrement}
								>
									<Plus />
								</button>
							</div>
							<ProductButton size='medium' />
							<button className={styles.wishlist}>
								<Wishlist />
							</button>
						</div>
						<div className={styles.metaInfo}>
							<div className={styles.metaRow}>
								<p className={styles.metaLabel}>
									Category:
								</p>
								<span>Vegetables</span>
							</div>
							<div className={styles.metaRow}>
								<p className={styles.metaLabel}>
									Tag:
								</p>
								<div className={styles.tagList}>
									<span>Vegetables</span>
									<span>Healthy</span>
									<span className={styles.keyword}>Chinese</span>
									<span>Cabbage</span>
									<span>Green Cabbage</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal >
	)
}
export default QuickViewModal;