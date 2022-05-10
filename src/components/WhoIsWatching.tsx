import avatarMan from '../assets/avatar-man.svg'
import avatarWoman from '../assets/avatar-woman.svg'
import { useState } from 'react';
import { Choice } from './Choice';
import { Header } from './Header';

export const feedbackTypes = {
  Man: {
    title: "Junior",
    image: {
      source: avatarMan,
      alt: "Imagem de homeme",
    },
  },
  Woman: {
    title: "Julia",
    image: {
      source: avatarWoman,
      alt: "Imagem de mulher",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WhoIsWatching() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false)
  
  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null)
  }

  return (
    <>
      {!feedbackType ? (
        <Choice onFeedbackTypeChanged={setFeedbackType} />
        ) : (
        <Header 
          onFeedbackSent={() => setFeedbackSent(true)}
          feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} />
        )}
    </>
  )
}