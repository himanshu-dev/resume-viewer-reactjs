const fs = require('fs');

const buildNo = process.argv[2];


console.log('buildNo', buildNo);


/***

stage('Deploy to S3') {
    steps {
        bat 'aws s3 cp build s3://resume-viewer/build-${BUILD_NUMBER} --recursive'
    }
}

*/
