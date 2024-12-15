const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const basketRouter = require('./basketRouter');
const basketProductRouter = require('./basketProductRouter');
const reviewRouter = require('./reviewRouter');
const categoryRouter = require('./categoryRouter');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/basket', basketRouter);
router.use('/basketProduct', basketProductRouter);
router.use('/review', reviewRouter);
router.use('/category', categoryRouter);

module.exports = router;