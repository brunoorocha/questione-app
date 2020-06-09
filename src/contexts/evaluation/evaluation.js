import React, { useContext, createContext, useReducer } from 'react';
import { useEvaluationService } from '../../services/evaluations.service';
import { useMessageCenterContext } from '../message-center';
import { actionTypes, evaluationContextReducer } from './reducer';

const EvaluationContext = createContext();

export const EvaluationContextProvider = ({ children }) => {
  const initialState = {
    selectedEvaluation: undefined,
    evaluations: [],
    isLoadingEvaluations: false,
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

  const setSelectedEvaluation = ({ evaluation }) => {
    dispatch({
      type: actionTypes.SET_SELECTED_EVALUATION,
      payload: { selectedEvaluation: { ...evaluation } },
    });
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
