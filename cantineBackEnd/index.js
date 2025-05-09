const express = require('express'); 
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(express.json());

// Routes
const DayRoutes = require('./Routes/day');
const EmployeeRoutes = require('./Routes/employee');
const PlatRoutes = require('./Routes/plat');
const SupplierRoutes = require('./Routes/supplier');
const authRoutes = require('./Routes/auth');


// Use Routes with correct paths
app.use('/day', DayRoutes);
app.use('/employee', EmployeeRoutes); // Corrected path to use EmployeeRoutes
app.use('/plat', PlatRoutes); // Corrected path to use PlatRoutes
app.use('/supplier', SupplierRoutes); // Corrected path to use SupplierRoutes
app.use('/auth', authRoutes);
// CORS Configuration to allow only requests from your Angular app (running on http://localhost:4200)
app.use(cors({
    origin: 'http://localhost:4200',  // Allow only requests from Angular frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific headers
    credentials: true  // Enable cookies or authentication headers to be sent with requests
}));

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/cantine', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected...');
    })
    .catch(err => {
        console.log('Database connection failed: ', err);
    });

// Start the server
app.listen(3000, () => {
    console.log("Server has started on port 3000...");
});
