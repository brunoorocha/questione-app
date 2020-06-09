import React, { useContext, createContext, useState, useReducer } from 'react';
import { useEvaluationService } from '../../services/evaluations.service';
import { useMessageCenterContext } from '../message-center';
import { actionTypes, evaluationContextReducer } from './reducer';

const EvaluationContext = createContext();

export const EvaluationContextProvider = ({ children }) => {
  const [evaluations, setEvaluations] = useState([]);
  const [isLoadingEvaluations, setIsLoadingEvaluations] = useState(false);

  const initialState = {
    selectedEvaluation: undefined,
  };
  const [state, dispatch] = useReducer(evaluationContextReducer, initialState);

  const evaluationService = useEvaluationService();
  const { dispatchMessage } = useMessageCenterContext();

  const getEvaluations = async () => {
    try {
      setIsLoadingEvaluations(true);
      const evaluationList = await evaluationService.getEvaluations();
      setEvaluations(evaluationList);
    } catch (error) {
      dispatchMessage({ text: error.message });
    } finally {
      setIsLoadingEvaluations(false);
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
        evaluations,
        getEvaluations,
        isLoadingEvaluations,
        setSelectedEvaluation,
        state,
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
