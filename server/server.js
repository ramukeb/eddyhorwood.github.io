
const express = require("express")
const app = express()

app.use(express.json({ extended: false }))
var fs = require('fs');

const cors = require('cors')
const PORT = 3001
app.use(cors())
const file = "server/data.json"
var todos = []

app.get("/", (req, res) => {
    let tasksJSON = fs.readFileSync(file, "utf-8")
    let tasks = JSON.parse(tasksJSON)
    todos = tasks
    console.log(tasks)
    res.status(200).json(todos)
})

app.post('/', (req, res) => {
    const string = req.body.toString()
    
    const data = JSON.stringify(req.body)
    console.log(data)
    fs.writeFileSync(file, data, "utf-8");
    res.status(201)
})


app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT)
})