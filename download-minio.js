var Minio = require('minio')
var minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'group_5IT',
    secretKey: 'group_5IT'});
minioClient.fGetObject('cars', 'my-car.jpg', './tmp/my-car.jpg', function(err) {
    if (err) {
        return console.log(err)
    } else {
        console.log('success')
    }
})