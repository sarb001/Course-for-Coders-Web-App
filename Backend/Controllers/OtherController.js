import { Stats } from '../Models/Stats.js';
import { sendmail } from '../Utils/sendmail.js';

export const contact = async(req,res) => {
    const { name ,email , message } = req.body ;

    if(!name || !email ||!message){
        return res.json({message: " All Fields are Mandatory "})
    }

    const to = process.env.MY_MAIL;
    const subject = "Contact from C-F-C";
    const text = ` I am ${name} and my Email is ${email} and ${message}`;

    await sendmail(to,subject,text);

    res.status(200).json({
        success: true,
        message : " Your Message has been Sent "
    })
}

export const courserequest = async(req,res) => {
    const { name ,email , course } = req.body ;

    if(!name || !email ||!course){
        return res.json({message: " All Fields are Mandatory "})
    }
    const to = process.env.MY_MAIL;
    const subject = "Requesting a Course From from C-F-C";
    const text = ` I am ${name} and my Email is ${email} and ${course}`;

    await sendmail(to,subject,text);w

    res.status(200).json({
        success: true,
        message : " Your Request has been Sent "
    })
}


export const getdashboardstats = async(req,res) => {

    const stats = await Stats.find({})
    .sort({createdAt : "desc"}).limit(12);
    res.status(200).json({
        success : true,
    })
}