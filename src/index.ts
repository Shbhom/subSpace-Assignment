import express from "express"
import blogRouter from "./routes"

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(blogRouter)


app.listen(port, async () => {
    console.log(`app is listening to port ${port}`)
})