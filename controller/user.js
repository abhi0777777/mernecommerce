const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = data.users;



exports.createProduct = (req,res)=>{
    console.log(req.body)
    users.push(req.body);
    res.json(req.body)
}
exports.getAllproducts =(req,res)=>{
    res.json(users)
}

exports.getProduct = (req,res)=>{
    const id = +req.params.id
    const prid = users.find(p=>p.id===id)
    res.json(prid)
}
exports.updateDirect = (req,res)=>{
    const id = +req.params.id;
    const productsIndex = users.findIndex(p=>p.id===id)
    users.splice(productsIndex,1,{...req.body,id:id})
    res.status(201).json()
}
exports.updateSpecific = (req,res)=>{
    const id = +req.params.id;
    const productsIndex = users.findIndex(p=>p.id===id)
    const product  = users[productsIndex]
    users.splice(productsIndex,2,{...product,...req.body})
    res.status(201).json()
}
exports.deleteProduct = (req,res)=>{
    const id = +req.params.id;
    const productsIndex = users.findIndex(p=>p.id===id)
    const product  = users[productsIndex]
    users.splice(productsIndex,1)
    res.status(201).json()
}
