var Minio = require('minio')
var minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin'
});
minioClient.makeBucket('cars', function (err) {
    if (err){
        return console.log(err)
    }  else {
        console.log('File uploaded successfully.')
    }
});