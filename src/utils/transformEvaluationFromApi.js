export const transformEvaluationFromApi = (evaluation) => {
  return {
    id: evaluation.id,
    description: evaluation.evaluation_application?.evaluation?.description,
    code: evaluation.evaluation_application?.id_application,
    isFinished: !!evaluation.finalized_at,
    applicationDate: evaluation.evaluation_application?.created_at
      ? new Date(
          evaluation.evaluation_application?.created_at,
        ).toLocaleDateString('pt-BR')
      : undefined,
  };
};
