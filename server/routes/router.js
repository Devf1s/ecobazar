const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const categoryController = require('./categoryRouter');
const basketRouter = require('./basketRouter');
const ratingRouter = require('./ratingRouter');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/category', categoryController);
router.use('/basket', basketRouter);
router.use('/rating', ratingRouter);

module.exports = router;