const express = require('express');
const routes = express.Router()

const views = __dirname + "/views/"

const profile  = {
  name: "Bela Toledo",
  avatar: "https://github.com/belatoledo.png",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4 
}

const jobs = []

//request, response
routes.get('/', (req, res) => {res.render(views + "index")})

routes.get('/job', (req, res) => {res.render(views + "job")})
routes.post('/job', (req, res) => {
  //req.body =  name: 'Orfanato Estrelinha', 'daily-hours': '4','total-hours': '24'

  const job = req.body
  job.createDat = Date.now() //atribuindo nova data 1:00 de video

  jobs.push(req.body)
  return res.redirect('/')
})

routes.get('/job/edit', (req, res) => {res.render(views + "job-edit")})
routes.get('/profile', (req, res) => {res.render(views + "profile", { profile: profile })})

module.exports = routes;