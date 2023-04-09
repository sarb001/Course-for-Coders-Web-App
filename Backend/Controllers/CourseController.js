import { Course } from '../Models/Course.js';

export const getAllCourses = async(req,res,next) => {
    const courses = await Course.find();
    res.status(200).json({
        success : true,
        courses,
    });
}

export const CreateCourses = async(req,res,next) => {
    const { title, description, category, createdBy } = req.body;

    if (!title || !description || !category || !createdBy) {
        res.send({message : "PLease Fill All the Fields .."})
    }

    await Course.create({
        title,
        description,
        category,
        createdBy,
        poster: {
        public_id: '12121212',
        url: "ururururru",
    },
    })
     
    res.status(201).json({
        success : true,
        message : " Course Created Successfully. You can add lectures now. "
    })
}