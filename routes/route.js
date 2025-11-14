const express = require('express');
const router = express.Router();

const { home, men, women, ethnic,  footwear ,zudio, world, stories, gift } = require('../controller/auth')


router
    .route('/')
    .get(home)

    router
    .route('/zudio')
    .get(zudio)

    router
    .route('/world')
    .get(world)

    router
    .route('/stories')
    .get(stories)

    router
    .route('/gift')
    .get(gift)

router
    .route('/collections/men')
    .get(men)

router
    .route('/collections/women')
    .get(women)

router
    .route('/collections/ethnic')
    .get(ethnic)

router
    .route('/collections/footwear')
    .get(footwear)


module.exports = router;
