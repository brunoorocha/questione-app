import React, { useContext, createContext, useState } from 'react';
import { useEvaluationService } from '../../services/evaluations.service';
import { useMessageCenterContext } from '../message-center';

const EvaluationContext = createContext();

export const EvaluationContextProvider = ({ children }) => {
  const [evaluations, setEvaluations] = useState([]);
  const [isLoadingEvaluations, setIsLoadingEvaluations] = useState(false);

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

  return (
    <EvaluationContext.Provider
      value={{ evaluations, getEvaluations, isLoadingEvaluations }}>
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
