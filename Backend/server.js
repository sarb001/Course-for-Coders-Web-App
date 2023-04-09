import app from "./app.js";


app.listen(process.env.PORT , () => {
        console.log(`Serveris Running on PORT ${process.env.PORT} her..`);
})