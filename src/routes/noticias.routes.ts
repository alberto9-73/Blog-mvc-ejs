import express from 'express';



const noticiasRoutes= express.Router()

noticiasRoutes.get('/',(req,res)=>{
    const nombre= 'Alberto'
    const apellido='Gonzalez'
    res.render('home/index',{nombre , apellido})
})
export default noticiasRoutes