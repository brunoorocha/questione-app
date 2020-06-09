import React, { useContext, createContext, useReducer } from 'react';
import { useEvaluationService } from '../../services/evaluations.service';
import { useMessageCenterContext } from '../message-center';
import { actionTypes, evaluationContextReducer } from './reducer';

const EvaluationContext = createContext();

export const EvaluationContextProvider = ({ children }) => {
  const initialState = {
    evaluations: [],
    selectedEvaluation: undefined,
    isLoadingEvaluations: false,
    isLoadingSelectedEvaluationResult: false,
  };

  const [state, dispatch] = useReducer(evaluationContextReducer, initialState);
  const evaluationService = useEvaluationService();
  const { dispatchMessage } = useMessageCenterContext();

  const getEvaluations = async () => {
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
    <EvaluationContext.Provider
      value={{
        state,
        getEvaluations,
        setSelectedEvaluation,
      }}>
      {children}
    </EvaluationContext.Provider>
  );
};

export const useEvaluationContext = () => {
  const context = useContext(EvaluationContext);
  if (!context) {
    // eslint-disable-next-line prettier/prettier
    throw new Error('useEvaluationContext must be used inside an EvaluationContextProvider');
  }

  return context;
};
