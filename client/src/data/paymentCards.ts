import { PaymentCard } from '@/types/models/PaymentCard';
import applePay from '@images/payment/apple-pay.svg';
import visa from '@images/payment/visa.svg';
import discover from '@images/payment/discover.svg';
import mastercard from '@images/payment/mastercard.svg';
import securePayment from '@images/payment/secure-payment.svg';

export const paymentCards: PaymentCard[] = [
	{
		id: 1,
		image: applePay
	},
	{
		id: 2,
		image: visa
	},
	{
		id: 3,
		image: discover
	},
	{
		id: 4,
		image: mastercard
	},
	{
		id: 5,
		image: securePayment
	}
];