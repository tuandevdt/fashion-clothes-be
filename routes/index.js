var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET orders page - render orders view */
router.get('/orders', function(req, res, next) {
  res.render('orderlist', { 
    title: 'Danh sách đơn hàng',
    message: 'Chức năng xem đơn hàng đang được phát triển. Vui lòng sử dụng API endpoint: /api/orders'
  });
});

module.exports = router;
