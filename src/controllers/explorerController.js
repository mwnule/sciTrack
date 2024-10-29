import Explorer from "../models/explorerModel.js";

export const store = async (req, res) => {
    try {
        const explorer = await Explorer.create(req.body)
        return res.status(200).json(explorer)
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Erro ao registrar o explorador" })
    }
}

export const index = async (req, res) => {
    try {
        const explorer = await Explorer.find().exec()
        return res.status(200).json(explorer)
    } catch (error) {
        return res.status(400).json({ error: "Erro na listagem dos exploradores" })
    }
}

export const show = async (req, res) => {
    try {
      const explorer = await Explorer.findById(req.params.id).exec();
      if (!explorer) {
        return res.status(404).json({ error: 'Explorador nao encontrado' });
      }
      res.json(explorer);
    } catch (error) {
      res.status(400).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(explorer)
    } catch (error) {
        return res.status(400).json({ error: "Erro ao atualizar o explorador" })
    }    
}

export const destroy = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndDelete(req.params.id, req.body).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: "Erro ao deletar o explorador" })
    }  
}