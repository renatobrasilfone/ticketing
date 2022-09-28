import express from 'express'

const app = express()

app.use(express.json())

app.get('/api/users/currentuser', (req, res) => {
  res.send('Hi there!')
})

app.listen(3000, () => {
  console.log('Server started on porasdasdt 3000asd!')
})