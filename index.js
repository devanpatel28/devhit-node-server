const express = require('express');
const config = require('./config');
const user_routes = require('./routes/user_routes');
const project_routes=require('./routes/project_routes')
const inventory_routes=require('./routes/inventory_routes')
const transaction_routes=require('./routes/user_transactions_routes')

const db = require('./database/db'); 

const cors = require("cors");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
// Use routes defined in routes.js
// app.use('/', [user_routes,project_routes,inventory_routes]);
app.use('/user',user_routes);
app.use('/projects', project_routes);
app.use('/inventory',inventory_routes);
app.use('/transaction',transaction_routes);


app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`)});



