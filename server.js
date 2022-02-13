const express = require('express');

const app = express();

//Endpoint hits by this 👇
app.get('/', (req,res) => 
    res.json({msg: 'Welcome to the ContactKeeper API...'})
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));