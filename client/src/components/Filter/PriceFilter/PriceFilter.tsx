import RangeSlider from '@/components/controls/RangeSlider/RangeSlider';
import { FC } from 'react';

const PriceFilter: FC = () => {
	return (
		<RangeSlider
			min={0}
			max={100}
			value={[10, 85]}
		/>
	)
}
export default PriceFilter;