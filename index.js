const express = require('express');

const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('./src/swagger/swagger_output.json');


const mainRoutes = require('./src/main/main.routes');


const app = express();


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', mainRoutes);


const port = process.env.PORT || 3000
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);