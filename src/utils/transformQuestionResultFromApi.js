export const transformQuestionResultFromApi = (result) => {
  return {
    correctAnswers: result.qtdCorrect,
    wrongAnswers: result.qtdIncorrect,
    questions: result.questions?.map((question, index) => ({
      id: question.question,
      title: `Questão ${index + 1}`,
      isCorrect: question.correct === 1,
    })),
  };
};
