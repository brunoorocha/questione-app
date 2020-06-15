import React, { useContext, createContext, useReducer } from 'react';
import { useEvaluationService } from '../../services/evaluations.service';
import { useMessageCenterContext } from '../message-center';
import { actionTypes, answeredEvaluationContextReducer } from './reducer';

const AnsweredEvaluationsContext = createContext();

export const AnsweredEvaluationsContextProvider = ({ children }) => {
  const initialState = {
    answeredEvaluations: [],
    selectedEvaluation: undefined,
    isLoadingAnsweredEvaluations: false,
    isLoadingSelectedEvaluationResult: false,
  };

  // eslint-disable-next-line prettier/prettier
  const [state, dispatch] = useReducer(answeredEvaluationContextReducer, initialState);
  const evaluationService = useEvaluationService();
  const { dispatchMessage } = useMessageCenterContext();

  const getAnsweredEvaluations = async () => {
    try {
      dispatch({ type: actionTypes.LOAD_EVALUATIONS_START });
      const evaluations = await evaluationService.getEvaluations();
      dispatch({ type: actionTypes.SET_EVALUATIONS, payload: { evaluations } });
    } catch (error) {
      dispatchMessage({ text: error.message });
    } finally {
      dispatch({ type: actionTypes.LOAD_EVALUATIONS_END });
    }
  };

  const setSelectedEvaluation = async ({ evaluation }) => {
    dispatch({
      type: actionTypes.SET_SELECTED_EVALUATION,
      payload: { selectedEvaluation: { ...evaluation } },
    });

    try {
      dispatch({ type: actionTypes.LOAD_SELECTED_EVALUATION_RESULT_START });
      const { result } = await evaluationService.getEvaluationResult({
        evaluationId: evaluation.id,
      });

      dispatch({
        type: actionTypes.SET_SELECTED_EVALUATION_RESULT,
        payload: { result },
      });
    } catch (error) {
      dispatchMessage({ text: error.message });
    } finally {
      dispatch({ type: actionTypes.LOAD_SELECTED_EVALUATION_RESULT_END });
    }
  };

  return (
    <AnsweredEvaluationsContext.Provider
      value={{
        state,
        getAnsweredEvaluations,
        setSelectedEvaluation,
      }}>
      {children}
    </AnsweredEvaluationsContext.Provider>
  );
};

export const useAnsweredEvaluationsContext = () => {
  const context = useContext(AnsweredEvaluationsContext);
  if (!context) {
    // eslint-disable-next-line prettier/prettier
    throw new Error('useAnsweredEvaluationsContext must be used inside an AnsweredEvaluationsContextProvider');
  }

  return context;
};
