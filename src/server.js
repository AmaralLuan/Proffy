//Dados

const proffys = [
    {
        name: "Diego Fernandes",

        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",

        whatsapp: "8991878454",

        bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',

        subject: "Química",

        cost: "20",

        weekday: [
            0
        ],

        time_from: [

        ],

     time_to: [

     ] 

    },

    {
        name: "Daniele Evangelista",

        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",

        whatsapp: "8991878454",

        bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',

        subject: "Biologia",

        cost: "20",

        weekday: [
            1
        ],

        time_from: [
            
        ],

     time_to: [

     ] 

    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
   "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
   "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
    "Matemática",
    "Português",
    "Química",
]

//Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}


function pageLanding (req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses (req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length !== 0
    //ADICIONAR data À LISTA DE PROFFYS
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)


        proffys.push(data)

        return res.redirect("/study")
    }



    return res.render("give-classes.html", { subjects, weekdays })
}


//Servidor

const express = require('express')
const server = express()
const nunjucks =  require('nunjucks')

// configurar nunjucks

nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)

.listen(8080)