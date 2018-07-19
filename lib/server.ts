import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT , function (err : any) {
    if (err) throw err;
    console.log(`Server is running on PORT ${PORT}`);
})