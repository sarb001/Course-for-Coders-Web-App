import { Course } from '../Models/Course.js';
import getDataUri from '../Utils/dataURI.js';
import cloudinary from 'cloudinary';

export const getAllCourses = async(req,res,next) => {
    const courses = await Course.find().select("-lectures");
    res.status(200).json({
        success : true,
        courses,
    });
}

//  Possibly  By Admin ONly 
export const CreateCourses     = async(req,res,next) => {
    const { title, description, category, createdBy } = req.body;

    if (!title || !description || !category || !createdBy) {
        res.send({message : "PLease Fill All the Fields .."})
    }
    const file = req.file;

    const fileUri = getDataUri(file);

    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

    await Course.create({
        title,
        description,
        category,
        createdBy,
        poster: {
            public_id: mycloud.public_id,
            url: mycloud.secure_url,
            },
    })
     
    res.status(201).json({
        success : true,
        message : " Course Created Successfully. You can add lectures now. "
    })
}


export const getCourseLectures = async(req,res) => {

    const { id } = req.params.id;
    const course = await Course.findById(id);
    if(!course){
        return res.json({message : " Course Not Founddd "})
    }

    course.views += 1;
    await course.save();

    res.status(200).json({
        success : true,
        lectures : course.lectures,
    });
}

export const addLectures = async(req,res) => {
    const {id} = req.params;
    const {title,description} = req.body;

    const course = await Course.findById(id);
    if(!course){
        return res.json({message : " Course Not Found "}) 
    }

    const file = req.file;
    const fileUri = getDataUri(file);

    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content,{
        resource_type :"video",
    });


    course.lectures.push({
        title,
        description,
        video : {
            public_id : "url",
            url : "url"
        },
    })

   course.numOfVideos = course.lectures.length;  

    await course.save();
    res.status(200).json({
        success : true,
        message : " Lectures Added in Course ",
    });
}


export const deletecourse = async(req,res) => {

    const {id} = req.params;
    const course = await Course.findById(id);
    if(!course){
        return res.json({message: " Course not Found "})
    }

    // Delete Img Online 
    await cloudinary.v2.uploader.destroy(course.poster.public_id);

    for(let i = 0;i < course.lectures.length;i++)
    {
        const singlelecture = course.lectures[i];
        await cloudinary.v2.uploader.destroy(singlelecture.video.public_id , {
            resource_type : 'video',
        })
    }   
    await course.remove();

    res.status(200).json({
        success : true,
        message : " Course Deleted Successfully ",
    });
}

export const deleteLecture =  async(req,res) => {

    const { courseId , lectureId } = req.query;

    const course = await Course.findById(courseId);
    if(!course) { return res.json({message: " Course Not Found "}); }

    const lecture = course.lectures.find((item) => {
        if (item._id.toString() === lectureId.toString()) return item;
      });
      
      await cloudinary.v2.uploader.destroy(lecture.video.public_id, {
        resource_type: "video",
      });
    
      course.lectures = course.lectures.filter((item) => {
        if (item._id.toString() !== lectureId.toString()) return item;
      });
    
      course.numOfVideos = course.lectures.length;
      await course.save();
      res.status(200).json({
        success: true,
        message: "Lecture Deleted Successfully",
      });

}