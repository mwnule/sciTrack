import Specie from "../models/specieModel.js";

export const store = async (req, res) => {
    try {
        const specie = await Specie.create(req.body)
        return res.status(200).json(specie)
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Erro ao registrar a especie" })
    }
}

export const index = async (req, res) => {
    try {
        const specie = await Specie.find().exec()
        return res.status(200).json(specie)
    } catch (error) {
        return res.status(400).json({ error: "Erro na listagem das especies" })
    }
}

export const show = async (req, res) => {
    try {
      const specie = await Specie.findById(req.params.id).exec();
      if (!specie) {
        return res.status(404).json({ error: 'Especie nao encontrada' });
      }
      res.json(specie);
    } catch (error) {
      res.status(400).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const specie = await Specie.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(specie)
    } catch (error) {
        return res.status(400).json({ error: "Erro ao atualizar a especie" })
    }    
}

export const destroy = async (req, res) => {
    try {
        const specie = await Specie.findByIdAndDelete(req.params.id, req.body).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: "Erro ao deletar a especie" })
    }  
}