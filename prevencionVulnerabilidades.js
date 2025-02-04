// Estas medidas preventivas solo se pueden aplicar en el backend (exprees.js en nuestro caso)

// clickjacking
// app.use((req, res, next) => {
//     res.setHeader('X-Frame-Options', 'DENY');
//     next();
// });

//sql inyection

// const db = require('./db'); 
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

// ataques dos
// import rateLimit from 'express-rate-limit';

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutos
//   max: 100, // Máximo 100 peticiones por IP
//   message: "Demasiadas solicitudes, intenta más tarde.",
// });

// app.use(limiter);

//configuracion de content-security-policy y strict-transport-security se setean en el servidor