// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Middleware to parse form data
// app.use(bodyParser.urlencoded({ extended: false }));

// // MySQL database connection
// const db = mysql.createConnection({
//     host: 'localhost',      // Change this if your database is hosted elsewhere
//     user: 'root',           // Your MySQL username
//     password: 'Sahil@2573',   // Your MySQL password
//     database: 'samyak_dashboard' // Your MySQL database name
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Database connection failed: ' + err.stack);
//         return;
//     }
//     console.log('Connected to MySQL database.');
// });

// // Route to handle form submission
// app.post('/add-jewelry', (req, res) => {
//     const { jewelry_name, jewelry_price, jewelry_description, jewelry_image } = req.body;

//     const sql = `INSERT INTO jewelry (name, price, description, image_url) VALUES (?, ?, ?, ?)`;
//     db.query(sql, [jewelry_name, jewelry_price, jewelry_description, jewelry_image], (err, result) => {
//         if (err) {
//             console.error('Failed to insert data: ' + err.stack);
//             res.send('Error occurred while adding jewelry.');
//         } else {
//             res.send('Jewelry added successfully!');
//         }
//     });
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });
