const express = require('express');
const router = express.Router();

const { Home, Men, Women, Ethnic,  Footwear ,Zudio, World, Stories, Gift } = require('../controller/auth')


router
    .route('/')
    .get(Home)

    router
    .route('/zudio')
    .get(Zudio)

    router
    .route('/world')
    .get(World)

    router
    .route('/stories')
    .get(Stories)

    router
    .route('/gift')
    .get(Gift)

router
    .route('/collections/men')
    .get(Men)

router
    .route('/collections/women')
    .get(Women)

router
    .route('/collections/ethnic')
    .get(Ethnic)

router
    .route('/collections/footwear')
    .get(Footwear)


module.exports = router;
