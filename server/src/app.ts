import 'reflect-metadata';
import express from 'express';
import 'dotenv/config';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use(cors());


app.listen(7000, () => {
    console.log('Server started on PORT: 7000!!');
})


