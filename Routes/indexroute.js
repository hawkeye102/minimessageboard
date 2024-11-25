const express=require('express')
const router = express.Router();

const message =[
    {
        messageid :1,
        text:'hi i am on the way',
        status:'not seen ',
        added:new Date()

    },

    {
        messageid :2,
        text:'hi i am on the way',
        status:'just calling',
        added:new Date()

    }
]

// this is how we get the route information
router.get('/',(req,res)=>{
    res.render('index',{message})
 })

 router.get('/new',(req,res)=>{
    res.render('new')
 })
 console.log('hi i am here ')


 router.get('/message/:id',(req,res)=>{
    const messageid=parseInt(req.params.id);
    const msg= message.find(m=>m.messageid===messageid);
    if(!msg){
        return res.status(404).send('message not found');
    }
    res.render('messageDetail',{message:msg});
 })

 // create a post 
 router.post('/new',(req,res)=>{
    console.log('Post new / triggered')
    console.log(req.body)
    const {text,status} = req.body;
    const newmessage ={
        messageid : message.length+1,
        text,
        status,
        added:new Date(),
    };
    message.push(newmessage);
    res.redirect('/');
 })

 module.exports =router


