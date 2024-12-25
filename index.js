const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    { id : 1, name : 'course1'},
    { id : 2, name : 'course2'},
    { id : 3, name : 'course3'},
    { id : 4, name : 'course4'},
    { id : 5, name : 'course5'},
];

app.get('/', (req, res) =>{
    res.send('Hello world');
});
app.get('/api/courses', (req, res) =>{
    res.write(`There are ${courses.length} courses in this platform`);
    res.write('\n')
    res.write(JSON.stringify(courses));
    res.end();
});

app.get('/api/courses/:id', (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('There is no course available with that ID');
    res.send(course)
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`This mf is running on port: ${port}`)});