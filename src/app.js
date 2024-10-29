import express from "express";
import connectDB from "./config/dbConfig.js";
import expeditionRoute from "./routes/expeditionRoute.js";
import explorerRoute from "./routes/explorerRoute.js";
import specieRoute from "./routes/specieRoute.js";

connectDB();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/expedition", expeditionRoute);
app.use("/api/explorer", explorerRoute);
app.use("/api/specie", specieRoute);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));