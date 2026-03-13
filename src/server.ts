import express from 'express'
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.json({name: 'Klinsman', idade: 28});
})

app.get('/users/novo', (request, response) => {
    response.json([{name: 'Klinsman', idade: 28}, {name: 'Yslee', idade: 31}]);
})


app.post('/userdata/:id/:email', (request, response) => {
    console.log(request.body)
    console.log(request.params)
    console.log(request.query)
    console.log(request.headers)
    response.status(200).json({sucess: true})
})

app.listen(4000);
