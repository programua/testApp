'use strict';

let express = require('express');
let router = express.Router();
let fs = require('fs');

router.post('/', function (req, res) {
    let buffers = [];
    let cnt = 0;

    req.on('data', function (chunk) {
        buffers.push(chunk);
        console.log(++cnt);
    })

    req.on('end', function () {
        console.log('upload ended');
        req.rawBody = Buffer.concat(buffers);

        fs.writeFile('../files/images/img.jpeg', req.rawBody, 'utf-8', function (err) { 
            if(err) return;
            console.log('image saved');
        }
        );
    });
});

module.exports = router;
