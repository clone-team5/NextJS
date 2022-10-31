import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source"


// routes
import indexRouter from './routes/'

const app = express();
const origin = process.env.ORIGIN;
// app.use(cors({
//     origin,
//     credentials: true
// }))
app.use(express.json());
app.use(morgan('dev'));
// app.use(cookieParser());
// dotenv.config();

app.get("/", (_, res) => res.send("running"));
app.use("/",indexRouter);

app.use(express.static("public"));

let port = 4000;
app.listen(port, async () => {
    console.log(`server running at http://localhost:${port}`);

    AppDataSource.initialize().then(() => {
        console.log("database initialized");
    }).catch(error => console.log(error))

})