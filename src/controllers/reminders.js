const lembretes = [];

exports.listar = (req, res) => res.json(lembretes);

exports.criar = (req, res) => {
  const novo = { ...req.body, id: Date.now() };
  lembretes.push(novo);
  res.status(201).json(novo);
};

exports.atualizar = (req, res) => {
  const index = lembretes.findIndex(l => l.id == req.params.id);
  if (index !== -1) {
    lembretes[index] = { ...lembretes[index], ...req.body };
    return res.json(lembretes[index]);
  }
  res.status(404).send();
};

exports.excluir = (req, res) => {
  const index = lembretes.findIndex(l => l.id == req.params.id);
  if (index !== -1) {
    lembretes.splice(index, 1);
    return res.status(204).send();
  }
  res.status(404).send();
};
