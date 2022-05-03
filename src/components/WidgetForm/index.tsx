import { useState } from "react";


import bug from '../../assets/bug.svg';
import idea from '../../assets/idea.svg';
import thought from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Step/FeedbackTypeStep";
import { FeedbackContentStep } from "./Step/FeedbackContentStep";
import { FeedbackSuccess } from "./Step/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    imagem: {
      source: bug,
      alt: "Imagem de um inseto"
    }
  },
  IDEA: {
    title: "Ideia",
    imagem: {
      source: idea,
      alt: "Imagem de uma Lâmpada"
    }
  },
  OTHER: {
    title: "Outro",
    imagem: {
      source: thought,
      alt: "Image de um Balão de pensamento"
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType,setFeedbackType]= useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback(){
    setFeedbackSent(false)
    setFeedbackType(null);
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        { feedbackSent ? (
          <FeedbackSuccess feedbackRestart={handleRestartFeedback} />
        ) : (
          <>
            {!feedbackType ? (
          <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType}/>
          ) : (
            <FeedbackContentStep 
              feedbackType={feedbackType}
              feedbackRestart={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}

          </>
        )}

        <footer className="text-xs text-neutral-400">
          Feito com ♥ pela Rocketseat <a className="underline underline-offset-2" href="http://rocketseat.com.br">Rocketseat</a>
        </footer>
    </div>
  )
}