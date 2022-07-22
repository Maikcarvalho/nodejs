import { Router, Request, Response} from 'express'

const router = Router()

/*CRIAR A ROTA HOME
router.get('/',(req:Request,res:Response) =>{
        let idade: number = 18
        let exibirIdade: boolean = false

        if(idade >= 18){
            exibirIdade = false
        }

        res.render('pages/home',{
            nome:'Maik',
            exibirIdade,
            movies:[
                {title:'Cinderela Bahiana', ano: 1998},
                {title:'Rubber', ano:2010},
                {title:'Tainá', ano:2010}
            ]
    })
})

//CRIAR A ROTA CONTATO
router.get('/contato',(req:Request,res:Response) =>{
    res.render('pages/contato')
})

//CRIAR A ROTA SOBRE
router.get('/sobre',(req:Request,res:Response) =>{
    res.render('pages/sobre')
})

//CRIAR A ROTA NOME
router.get('/nome',(req:Request,res:Response) =>{

    let nome: string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })

router.get('/form',(req:Request,res:Response) =>{

        let nome: string = req.query.nome as string
        let idade = req.query.idade
        let telefone = req.query.telefone
        let endereco = req.query.endereco

        res.render('pages/form',{
            nome,
            idade,
            telefone,
            endereco
        })
})

//CRIANDO A ROTA APENAS EXIBIR A IDADE
router.get('/idade',(req:Request,res:Response)=>{
    res.render('pages/idade')
})

router.post('/idade-resultado',(req:Request,res:Response)=>{

    let mostrarIdade: boolean = false
    let idade: number = 0
    if(req.body.anoNascimento){

    let anoNascimento: number = parseInt(req.body.anoNascimento as string)
    let anoAtual: number = new Date().getFullYear()
    let idade = anoAtual - anoNascimento
    mostrarIdade = true   
    }

    res.render('pages/idade',{
        idade,
        mostrarIdade
    })*/

    router.get('/login',(req:Request,res:Response)=>{
        res.render('pages/login')
    })

    router.post('/logado',(req:Request,res:Response)=>{

        let email: string = (req.body.email as string)
        let senha: string = (req.body.senha as string)

        res.render('pages/logado',{
            email,
            senha
        })
})

export default router