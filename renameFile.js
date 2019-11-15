const fs = require('fs');

const buildNo = process.argv[2];

fs.rename('./build/index.html', './build/index-'+buildNo+'.html', function (err, success) {
    if (err) {
        console.log('error while renaming index.html', err);
    }
});
console.log('buildNo', buildNo);


/***

 bat 'aws s3 cp build s3://resume-viewer/build-${BUILD_NUMBER} --recursive'
 bat 'aws cloudfront update-distribution --id E343P8PQ0PKMAQ \ --default-root-object index${-${BUILD_NUMBER}}.html'

*/
