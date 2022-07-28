const swaggerAutogen = require('swagger-autogen')();


const outputFile = './src/swagger/swagger_output.json';

const endpointsFiles = ['./index.js'];


swaggerAutogen(outputFile, endpointsFiles);