// solo funciona en backend como express.js

// const db = require('./db'); // Conexión a la base de datos
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     const [rows] = await db.execute(
//         'SELECT * FROM users WHERE email = ? AND password = ?',
//         [email, password]
//     );

//     if (rows.length > 0) {
//         res.json({ success: true });
//     } else {
//         res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
//     }
// });