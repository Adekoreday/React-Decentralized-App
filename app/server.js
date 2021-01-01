const express = require("express")
const path = require("path")

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.static("build"))
app.listen(PORT, () => console.log("server started at port 5000"))

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"), (err) => {
    if (err) res.status(500).send(err)
  })
})
