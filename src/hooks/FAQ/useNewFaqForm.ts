import { useMemo, useState } from 'react';
import { IFAQ } from '../../interfaces/FAQ/models/IFAQ';

export function useNewFaqForm() {
  const getClearFaq = (): IFAQ => ({
    id: Date.now(),
    priorityId: 1,
    question: '',
    answer: '',
  });

  const [newFaq, setNewFaq] = useState<IFAQ>(getClearFaq());

  const clearFaq = () => setNewFaq(getClearFaq());
  const setQuestion = (value: string) => setNewFaq({ ...newFaq, question: value });
  const setAnswer = (value: string) => setNewFaq({ ...newFaq, answer: value });

  const isFormFilled = useMemo(
    () => newFaq.question !== '' && newFaq.answer !== '',
    [newFaq]
  );

  return {
    newFaq,
    clearFaq,
    setQuestion,
    setAnswer,
    isFormFilled,
  };
}
