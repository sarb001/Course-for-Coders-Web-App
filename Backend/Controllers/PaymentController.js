import { User } from "../Models/User.js"
import { instance } from "../server.js";

export const buySubscription = async(req,res) => {
        const user = await User.findById(req.user._id);

         if(user.role === "admin"){
            return res.json({message: " Admin can't buy  Subscription "});
         }

         const plan_id  = process.env.PLAN_ID

       const subscription = await instance.subscriptions.create({
            plan_id:plan_id,
            customer_notify:1,
            total_count : 6
         })

         user.subscription.id = subscription.id;
         user.subscription.status = subscription.status;

         await user.save();

         res.status(201).json({
            success : true,
            subscription,
         })
}