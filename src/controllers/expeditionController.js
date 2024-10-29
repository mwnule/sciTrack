import Expedition from "../models/expeditionModel.js";

export const store = async (req, res) => {
    try {
        const expedition = await Expedition.create(req.body)
        return res.status(200).json(expedition)
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Erro ao registrar a expedicao" })
    }
}