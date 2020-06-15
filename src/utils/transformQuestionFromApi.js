export const transformQuestionFromApi = (question) => {
  return {
    id: question.evaluation_question_without_correct?.id,
    baseText:
      question.evaluation_question_without_correct?.question_without_correct
        ?.base_text,
    stem:
      question.evaluation_question_without_correct?.question_without_correct
        ?.stem,
    items:
      question.evaluation_question_without_correct?.question_without_correct
        ?.question_items_without_correct,
    isAnswered: !!question.answer,
    answer: question.answer,
  };
};
