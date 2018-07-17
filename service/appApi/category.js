const Router = require('koa-router')
let router = new Router()

const mongoose = require('mongoose')
const fs = require('fs')

// 导入商品数据
router.get('/insertAllCategory',async(ctx)=>{
    fs.readFile('./data_json/category.json','utf8',(err,data)=>{
        data=JSON.parse(data)
        let saveCount=0
        const Category = mongoose.model('Category')
        data.RECORDS.map((value,index)=>{
            console.log(value)
            let newCategory = new Category(value)
            newCategory.save().then(()=>{
                saveCount ++
                console.log('插入成功:' + saveCount)
            }).catch(error=>{
                console.log('插入失败:' + error)
            })
        })

    })
    ctx.body="开始导入数据....."
})


// 查询商品
router.post('/getAllCategoryInfo',async(ctx)=>{
    try{
        let goodsId = ctx.request.body.goodsId
        const Goods = mongoose.model('Category')
        let result= await Goods.find().exec()
        ctx.body={code:200, message:result}
    }catch(error){
        ctx.body={code:500, message:error}
    }
})



module.exports = router