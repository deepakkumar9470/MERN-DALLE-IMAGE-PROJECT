import dotenv from 'dotenv'
dotenv.config()
import express from "express";

import {OpenAI  }  from 'openai'

const router = express.Router();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});


router.route('/').post(async (req,res)=>{
    try {
         const {prompt} = req.body
         const aiResponse = await openai.images.generate({
            prompt,
            n :1,
            size : '1024x1024',
            response_format  :'b64_json'
         })

         const image = aiResponse.data.data[0].b64_json
         res.status(201).json({photo:image})
    } catch (error) {
      console.log(error)
    }
})


// router.route('/').post(async(req,res)=>{
//    try {
//     const prompt = req.body;

//    } catch (error) {
//        res.status(500).send(error)
//    }
// })

export default router