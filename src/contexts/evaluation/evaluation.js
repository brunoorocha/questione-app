import React, { useContext, createContext, useReducer } from 'react';
import { useEvaluationService } from '../../services/evaluations.service';
import { useMessageCenterContext } from '../message-center';
import { actionTypes, evaluationContextReducer } from './reducer';

const EvaluationContext = createContext();

export const EvaluationContextProvider = ({ children }) => {
  const initialState = {
    evaluationQuestions: [],
    numberOfQuestions: 0,
    currentQuestionIndex: 0,
    isLoadingEvaluationQuestions: false,
  };

  const [state, dispatch] = useReducer(evaluationContextReducer, initialState);
  const evaluationService = useEvaluationService();
  const { dispatchMessage } = useMessageCenterContext();

  const startEvaluation = async ({ evaluationCode }) => {
    try {
      dispatch({ type: actionTypes.LOAD_EVALUATION_QUESTIONS_START });
      const { questions } = await evaluationService.startEvaluation({
        evaluationCode,
      });

      dispatch({
        type: actionTypes.SET_EVALUATION_QUESTIONS,
        payload: { questions },
      });
    } catch (error) {
      dispatchMessage({ text: error.message });
    } finally {
      dispatch({ type: actionTypes.LOAD_EVALUATION_QUESTIONS_END });
    }
  };

  const setCurrentQuestionIndex = ({ questionIndex }) => {
    if (questionIndex === undefined) {
      return;
    }

    dispatch({
      type: actionTypes.SET_CURRENT_QUESTION_NUMBER,
      payload: { questionIndex },
    });
  };

  return (
    <EvaluationContext.Provider
      value={{
        state,
        startEvaluation,
        setCurrentQuestionIndex,
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
