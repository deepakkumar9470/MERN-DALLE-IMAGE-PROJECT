import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";

import Post from '../models/Post.js';
import {v2 as cloudinary} from 'cloudinary'
const router = express.Router();


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });


// GET ALL POSTS  
router.route('/').get(async(req,res)=>{
    try {
        const posts = await Post.find({})
        res.status(200).send(posts)
    } catch (error) {
        
    }
})


// CREATE A POST  
router.route('/').post(async(req,res)=>{
    try {
        const {name,prompt,photo} = req.body
        const photoUrl = await cloudinary.uploader.upload({
            name 
        })

        const post = new Post.create({
            name,
            prompt,
            photo : photoUrl.url
        })

        res.status(201).send({success: true, data : post})
        
    } catch (error) {
        res.status(500).send({success: false, message : error})

    }
})




export default router