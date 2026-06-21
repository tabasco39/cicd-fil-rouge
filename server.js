import http from 'http';
import add from './src/math.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(
        JSON.stringify({
            message: "CI/CD fil rouge en ligne maintenant",
            resultat: add(2, 3)
        })
    )
})

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})