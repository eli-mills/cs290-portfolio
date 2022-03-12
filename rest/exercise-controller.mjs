import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());


// ROUTES
app.get('/', ()=>{console.log("GET request received.")});

app.post('/', ()=>{console.log("POST request received.")});

app.put('/', ()=>{console.log("PUT request received.")});

app.delete('/', ()=>{console.log("DELETE request received.")});


// START SERVER
app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});

