const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'zoomelectrico', 
    api_key: '313523126261516', 
    api_secret: 'MKhMWN5xuStsXLHkkJxhPZc-sJY' 
});

module.exports = cloudinary;