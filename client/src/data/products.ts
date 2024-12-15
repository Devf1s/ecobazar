import { CategoryNames } from '@/consts/categories';
import { ProductItem } from '@/types/models/ProductItem';
import freshApples from '@images/products/fresh_apples.jpg';
import greenApple from '@images/products/green_apple.jpg';
import malta from '@images/products/malta.jpg';
import cabbage from '@images/products/cabbage.jpg';
import lettuce from '@images/products/lettuce.jpg';
import eggplant from '@images/products/eggplant.jpg';
import potatoes from '@images/products/potatoes.jpg';
import corn from '@images/products/corn.jpg';
import cauliflower from '@images/products/cauliflower.jpg';
import capsicum from '@images/products/capsicum.jpg';
import greenChili from '@images/products/green-chili.jpg';
import redChili from '@images/products/red-chili.jpg';
import redTomatoes from '@images/products/red-tomatoes.jpg';
import mango from '@images/products/mango.jpg';

export const products: ProductItem[] = [
	{
		id: 1,
		name: 'Chinese cabbage',
		price: 24,
		salePrice: 12,
		image: freshApples,
		rating: 5,
		reviews: 524,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 2,
		name: 'Green Apple',
		price: 20.99,
		salePrice: 14.99,
		image: greenApple,
		rating: 5,
		reviews: 10,
		isSale: true,
		category: CategoryNames.FreshFruit
	},
	{
		id: 3,
		name: 'Fresh Indian Malta',
		price: 20,
		image: malta,
		rating: 4,
		reviews: 4,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 4,
		name: 'Chinese cabbage',
		price: 12,
		image: cabbage,
		rating: 4,
		reviews: 12,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 5,
		name: 'Green Lettuce',
		price: 9,
		image: lettuce,
		rating: 4,
		reviews: 29,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 6,
		name: 'Eggplant',
		price: 34,
		image: eggplant,
		rating: 3,
		reviews: 6,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 7,
		name: 'Big Potatoes',
		price: 20,
		image: potatoes,
		rating: 5,
		reviews: 106,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 8,
		name: 'Corn',
		price: 20,
		image: corn,
		rating: 4,
		reviews: 52,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 9,
		name: 'Fresh Cauliflower',
		price: 12,
		image: cauliflower,
		rating: 4,
		reviews: 10,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 10,
		name: 'Green Capsicum',
		price: 20.99,
		salePrice: 9,
		image: capsicum,
		rating: 3,
		reviews: 30,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 11,
		name: 'Green Chili',
		price: 34,
		image: greenChili,
		rating: 4,
		reviews: 40,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 12,
		name: 'Red Chili',
		price: 12,
		image: redChili,
		rating: 4,
		reviews: 15,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 13,
		name: 'Red Tomatoes',
		price: 20.99,
		salePrice: 9,
		image: redTomatoes,
		rating: 5,
		reviews: 78,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 14,
		name: 'Surjapur Mango',
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
















	////////////////////////////////
	{
		id: 123411234,
		name: "Chinese cabbage",
		price: 24,
		salePrice: 12,
		image: freshApples,
		rating: 5,
		reviews: 524,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 12345678,
		name: "Green Apple",
		price: 20.99,
		salePrice: 14.99,
		image: greenApple,
		rating: 5,
		reviews: 10,
		isSale: true,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1230123012301203210456,
		name: "Fresh Indian Malta",
		price: 20,
		image: malta,
		rating: 4,
		reviews: 4,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 12051025012501,
		name: "Chinese cabbage",
		price: 12,
		image: cabbage,
		rating: 4,
		reviews: 12,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 125-12051051025,
		name: "Green Lettuce",
		price: 9,
		image: lettuce,
		rating: 4,
		reviews: 29,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 124-1-24120410224,
		name: "Eggplant",
		price: 34,
		image: eggplant,
		rating: 3,
		reviews: 6,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 12-512-50125011,
		name: "Big Potatoes",
		price: 20,
		image: potatoes,
		rating: 5,
		reviews: 106,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 123-1230120312103,
		name: "Corn",
		price: 20,
		image: corn,
		rating: 4,
		reviews: 52,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-12301212038,
		name: "Fresh Cauliflower",
		price: 12,
		image: cauliflower,
		rating: 4,
		reviews: 10,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-123012120381,
		name: "Green Capsicum",
		price: 20.99,
		salePrice: 9,
		image: capsicum,
		rating: 3,
		reviews: 30,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-123540120382,
		name: "Green Chili",
		price: 34,
		image: greenChili,
		rating: 4,
		reviews: 40,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-1230120383,
		name: "Red Chili",
		price: 12,
		image: redChili,
		rating: 4,
		reviews: 15,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-1230120384,
		name: "Red Tomatoes",
		price: 20.99,
		salePrice: 9,
		image: redTomatoes,
		rating: 5,
		reviews: 78,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-1230120386,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 956-1230120388,
		name: "Chinese cabbage",
		price: 24,
		salePrice: 12,
		image: freshApples,
		rating: 5,
		reviews: 524,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-12301203811,
		name: "Green Apple",
		price: 20.99,
		salePrice: 14.99,
		image: greenApple,
		rating: 5,
		reviews: 10,
		isSale: true,
		category: CategoryNames.FreshFruit
	},
	{
		id: 956-12301203822,
		name: "Fresh Indian Malta",
		price: 20,
		image: malta,
		rating: 4,
		reviews: 4,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 956-12301203833,
		name: "Chinese cabbage",
		price: 12,
		image: cabbage,
		rating: 4,
		reviews: 12,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-123012038123,
		name: "Green Lettuce",
		price: 9,
		image: lettuce,
		rating: 4,
		reviews: 29,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-1230120381234,
		name: "Eggplant",
		price: 34,
		image: eggplant,
		rating: 3,
		reviews: 6,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-123012038214124,
		name: "Big Potatoes",
		price: 20,
		image: potatoes,
		rating: 5,
		reviews: 106,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-12301203899,
		name: "Corn",
		price: 20,
		image: corn,
		rating: 4,
		reviews: 52,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-12301203801,
		name: "Fresh Cauliflower",
		price: 12,
		image: cauliflower,
		rating: 4,
		reviews: 10,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-12301203802,
		name: "Green Capsicum",
		price: 20.99,
		salePrice: 9,
		image: capsicum,
		rating: 3,
		reviews: 30,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-12301203803,
		name: "Green Chili",
		price: 34,
		image: greenChili,
		rating: 4,
		reviews: 40,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-123012038042,
		name: "Red Chili",
		price: 12,
		image: redChili,
		rating: 4,
		reviews: 15,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 2142013120301233,
		name: "Red Tomatoes",
		price: 20.99,
		salePrice: 9,
		image: redTomatoes,
		rating: 5,
		reviews: 78,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 956-123012038111,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 480230123021,
		name: "Chinese cabbage",
		price: 24,
		salePrice: 12,
		image: freshApples,
		rating: 5,
		reviews: 524,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 632222222274,
		name: "Green Apple",
		price: 20.99,
		salePrice: 14.99,
		image: greenApple,
		rating: 5,
		reviews: 10,
		isSale: true,
		category: CategoryNames.FreshFruit
	},
	{
		id: 89222222222243,
		name: "Fresh Indian Malta",
		price: 20,
		image: malta,
		rating: 4,
		reviews: 4,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 222212222222,
		name: "Chinese cabbage",
		price: 12,
		image: cabbage,
		rating: 4,
		reviews: 12,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 12521530198,
		name: "Green Lettuce",
		price: 9,
		image: lettuce,
		rating: 4,
		reviews: 29,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 751251816,
		name: "Eggplant",
		price: 34,
		image: eggplant,
		rating: 3,
		reviews: 6,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 312315269,
		name: "Big Potatoes",
		price: 20,
		image: potatoes,
		rating: 5,
		reviews: 106,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 111143112,
		name: "Corn",
		price: 20,
		image: corn,
		rating: 4,
		reviews: 52,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 952412468,
		name: "Fresh Cauliflower",
		price: 12,
		image: cauliflower,
		rating: 4,
		reviews: 10,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 314213117,
		name: "Green Capsicum",
		price: 20.99,
		salePrice: 9,
		image: capsicum,
		rating: 3,
		reviews: 30,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 631321751,
		name: "Green Chili",
		price: 34,
		image: greenChili,
		rating: 4,
		reviews: 40,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 88212319,
		name: "Red Chili",
		price: 12,
		image: redChili,
		rating: 4,
		reviews: 15,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 23123143,
		name: "Red Tomatoes",
		price: 20.99,
		salePrice: 9,
		image: redTomatoes,
		rating: 5,
		reviews: 78,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 41221122932,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 421128214567,
		name: "Chinese cabbage",
		price: 24,
		salePrice: 12,
		image: freshApples,
		rating: 5,
		reviews: 524,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 1111163741,
		name: "Green Apple",
		price: 20.99,
		salePrice: 14.99,
		image: greenApple,
		rating: 5,
		reviews: 10,
		isSale: true,
		category: CategoryNames.FreshFruit
	},
	{
		id: 891412443,
		name: "Fresh Indian Malta",
		price: 20,
		image: malta,
		rating: 4,
		reviews: 4,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1115272,
		name: "Chinese cabbage",
		price: 12,
		image: cabbage,
		rating: 4,
		reviews: 12,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 130982,
		name: "Green Lettuce",
		price: 9,
		image: lettuce,
		rating: 4,
		reviews: 29,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 178167,
		name: "Eggplant",
		price: 34,
		image: eggplant,
		rating: 3,
		reviews: 6,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 1521231269,
		name: "Big Potatoes",
		price: 20,
		image: potatoes,
		rating: 5,
		reviews: 106,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 1143321312,
		name: "Corn",
		price: 20,
		image: corn,
		rating: 4,
		reviews: 52,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 19515125168,
		name: "Fresh Cauliflower",
		price: 12,
		image: cauliflower,
		rating: 4,
		reviews: 10,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 311236463147,
		name: "Green Capsicum",
		price: 20.99,
		salePrice: 9,
		image: capsicum,
		rating: 3,
		reviews: 30,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 6175235621,
		name: "Green Chili",
		price: 34,
		image: greenChili,
		rating: 4,
		reviews: 40,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 18324523829,
		name: "Red Chili",
		price: 12,
		image: redChili,
		rating: 4,
		reviews: 15,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 2-11111,
		name: "Red Tomatoes",
		price: 20.99,
		salePrice: 9,
		image: redTomatoes,
		rating: 5,
		reviews: 78,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 2-623123,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 2-531123,
		name: "Chinese cabbage",
		price: 24,
		salePrice: 12,
		image: freshApples,
		rating: 5,
		reviews: 524,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 2-1544,
		name: "Green Apple",
		price: 20.99,
		salePrice: 14.99,
		image: greenApple,
		rating: 5,
		reviews: 10,
		isSale: true,
		category: CategoryNames.FreshFruit
	},
	{
		id: 2-31,
		name: "Fresh Indian Malta",
		price: 20,
		image: malta,
		rating: 4,
		reviews: 4,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 2-221,
		name: "Chinese cabbage",
		price: 12,
		image: cabbage,
		rating: 4,
		reviews: 12,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 1-11111,
		name: "Green Lettuce",
		price: 9,
		image: lettuce,
		rating: 4,
		reviews: 29,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 1254-12-1,
		name: "Eggplant",
		price: 34,
		image: eggplant,
		rating: 3,
		reviews: 6,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 1250125012,
		name: "Big Potatoes",
		price: 20,
		image: potatoes,
		rating: 5,
		reviews: 106,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 26982135691,
		name: "Corn",
		price: 20,
		image: corn,
		rating: 4,
		reviews: 52,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 125912591259,
		name: "Fresh Cauliflower",
		price: 12,
		image: cauliflower,
		rating: 4,
		reviews: 10,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 159158,
		name: "Green Capsicum",
		price: 20.99,
		salePrice: 9,
		image: capsicum,
		rating: 3,
		reviews: 30,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 612123823,
		name: "Green Chili",
		price: 34,
		image: greenChili,
		rating: 4,
		reviews: 40,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 12492152511129,
		name: "Red Chili",
		price: 12,
		image: redChili,
		rating: 4,
		reviews: 15,
		isSale: false,
		category: CategoryNames.Vegetables
	},
	{
		id: 1112412512521,
		name: "Red Tomatoes",
		price: 20.99,
		salePrice: 9,
		image: redTomatoes,
		rating: 5,
		reviews: 78,
		isSale: true,
		category: CategoryNames.Vegetables
	},
	{
		id: 3523592-12,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 23592395-1294912549,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 12491294-1243189513825,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 217841824581-12312,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1024912491,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 10101,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 2013,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 2012,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1889,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1881,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1323,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 7272,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 8181,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 9191,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1919,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1818,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1717,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1616,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1515,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1414,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1313,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1212,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 1010101010101,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	},
	{
		id: 101010101010101,
		name: "Surjapur Mango",
		price: 34,
		image: mango,
		rating: 4,
		reviews: 2,
		isSale: false,
		category: CategoryNames.FreshFruit
	}
];