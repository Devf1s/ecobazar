const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const basketRouter = require('./basketRouter');
const basketProductRouter = require('./basketProductRouter');
const reviewRouter = require('./reviewRouter');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/basket', basketRouter);
router.use('/basketProduct', basketProductRouter);
router.use('/review', reviewRouter)

module.exports = router;