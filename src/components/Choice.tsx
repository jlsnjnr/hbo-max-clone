import { FeedbackType, feedbackTypes } from "./WhoIsWatching";
import splashImg from '../assets/splashscreen.svg'
import { Plus } from "phosphor-react";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function Choice ({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {

  return (
    <div className="body-init flex h-screen justify-between items-center flex-col">
      <header>
        <img src={splashImg} className="align-image w-40 h-40 flex align-center justify-center" alt="" /> 
        <h2 className="text-white text-3xl md:text-6xl">Who Is Watching?</h2>
      </header>
      <div className="flex w-full md:w-[411px] 2xl:w-[511px] items-center justify-around ">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img className='w-32 md:w-full 2xl:w-60' src={value.image.source} alt={value.image.alt} />
              <span className='text-white text-xl mt-6 block'>{value.title}</span>
            </button>
          );
        })}
      </div>
      <div className="flex my-4 w-full md:w-[411px] items-center justify-around">
        <button className="flex items-center justify-center h-12 w-32 md:h-12 md:w-40 bg-[#FFFFFF33] rounded-full hover:bg-[#5B1CE6] transition-colors duration-500">
          <Plus className="text-white mx-1" />
          <p className="text-white opacity-100 mx-1">Adult</p>
        </button>
        <button className="flex items-center justify-center h-12 w-32 md:h-12 md:w-40 bg-[#FFFFFF33] rounded-full hover:bg-[#5B1CE6] transition-colors duration-500">
          <Plus className="text-white mx-1" />
          <p className="text-white opacity-100 mx-1">Kid</p>
        </button>
      </div>
    </div>
  )
}