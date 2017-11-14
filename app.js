const parser=require("body-parser");
const app=require("express")();

app.use(parser.urlencoded({extended:false}));
app.use(parser.json());

app.get("/",(req,res)=>{
    res.send("Index Page");
});

const book=require("./routes/bookRoute");
app.use("/api",book);

const customer=require("./routes/customerRoute");
app.use("/api",customer);

const transaction=require("./routes/transactionRoute");
app.use("/api",transaction);

app.listen(3000,()=>{
    console.log("Server started listenning on port 3000!");
});
