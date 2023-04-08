import React from 'react';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Layout/Header/Header';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Layout/Footer/Footer';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ForgetPassword from './Components/Auth/ForgetPassword';
import ResetPassword from './Components/Auth/ResetPassword';
import Contact from './Components/Contact/Contact';
import Request from './Components/Request/Request';
import About from './Components/About/About';
import Subscribe from './Components/Payments/Subscribe';
import PaymentSuccess from './Components/Payments/PaymentSuccess';
import PaymentsFail from './Components/Payments/PaymentsFail';
import NotFound from './Components/Layout/NotFound/NotFound';
import Coursepage from './Components/CoursePage/Coursepage';
import Profile from './Components/Profile/Profile';
import ChangePassword from './Components/Profile/ChangePassword';
import UpdateProfile from './Components/Profile/UpdateProfile';
import Dashboard from './Components/Admin/DashBoard/Dashboard';
import CreateCourses from './Components/Admin/CreateCourses/CreateCourses';
import Users from './Components/Admin/Users/Users';
import AdminCourses from './Components/Admin/AdminCourses/AdminCourses';

function App() {
  return (
     <>
     <Router>
            <Header />
         <Routes>
            <Route exact path = "/"  element= {<Home />}> </Route>
            <Route  path = "/courses"  element= {<Courses />}> </Route>
            <Route  path = "/course/:id"  element= {<Coursepage />}> </Route>


            <Route exact path = "/login"  element= {<Login />}> </Route>
            <Route exact path = "/changepassword"  element= {<ChangePassword  />}> </Route>
            <Route exact path = "/updateprofile"  element= {<UpdateProfile />}> </Route>

            <Route exact path = "/profile"  element= {<Profile />}> </Route>
            <Route exact path = "/contact"  element= {<Contact  />}> </Route>
            <Route exact path = "/request"  element= {<Request  />}> </Route>
            <Route exact path = "/about"  element= {<About  />}> </Route>
            <Route exact path = "/register"  element= {<Register />}> </Route>
            <Route exact path = "/forgetpassword"  element= {<ForgetPassword />}> </Route>
            <Route exact path = "/resetpassword/:token"  element= {<ResetPassword />}> </Route>

            {/* Related To Payments */}

            <Route  path = "/subscribe"  element= {<Subscribe />}> </Route>
            <Route  path = "*"  element= {<NotFound />}> </Route>
            <Route  path = "/paymentsuccess"  element= {<PaymentSuccess/>}> </Route>
            <Route  path = "/paymentfail"  element= {<PaymentsFail  />}> </Route>

               {/* admin dashboard  */}

            <Route  path = "/admin/dashboard"   element = {<Dashboard  />}> </Route>
            <Route  path = "/admin/createcourse"  element = {<CreateCourses />}> </Route>
            <Route  path = "/admin/courses"     element = {<AdminCourses  />}> </Route>
            <Route  path = "/admin/users"       element = {<Users  />}> </Route>

         </Routes>
         <Footer />
     </Router>
     </>
  );
}

export default App;
