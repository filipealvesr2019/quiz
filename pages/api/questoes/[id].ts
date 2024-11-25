import questoes from "../bancoDeQuestoes";
export default (req, res) => {
  const idSelecionado = +req.query.id;
  const selecionada = questoes.filter(
    (questao) => questao.id === idSelecionado
  );
  if (selecionada.length === 1) {
    const quetoesSelecionada = selecionada[0];
    res.status(200).json(quetoesSelecionada.paraObjeto());
  } else {
    res.status(204).send();
  }
};
