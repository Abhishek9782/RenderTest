const homeRoute = require('express').Router();
const Student = require('../model/Student')
homeRoute.get('/', (req, res) => {
    res.render("home.ejs")
})
homeRoute.get("/allStudent", async (req, res) => {
    // We are finding our data and send to this table 
    const allStudent = await Student.find()
    res.render('studentdata.ejs', { allStudent: allStudent })


})

homeRoute.post('/allStudent', async (req, res) => {
    const { stname, stmail, stmob } = req.body;
    const StudentData = await new Student({
        name: stname.trim(),
        email: stmail.trim(),
        mob: stmob.trim()
    })

    StudentData.save()
    res.redirect('/allStudent')

})
module.exports = homeRoute;