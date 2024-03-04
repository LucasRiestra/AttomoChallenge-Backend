// Importamos aplicacion
// Importamos la configuracion

import  express  from "express";

const app = express();
app.use(express.json())

app.use("/", () => {
    console.log("API is running...");
})

export default app;