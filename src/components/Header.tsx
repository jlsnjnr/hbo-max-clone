import { FeedbackType, feedbackTypes } from "./WhoIsWatching";
import splashImg from '../assets/splashscreen.svg'
import bg from '../assets/bg.png'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function Header( {feedbackType, onFeedbackRestartRequested, onFeedbackSent}: FeedbackContentStepProps) {

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <body className='bg-hero-pattern text-white bg-no-repeat bg-cover bg-zinc-900 h-screen'>
      <div className="p-12">
        <header className="container flex items-center justify-between mx-auto bg-[#00000041] p-3 px-12 rounded-3xl blur-image">
          <img src={splashImg} className="w-32 h-16" alt="" />

          <div className="hidden md:flex text-x1 gap-12">
            <span>Movies</span>
            <span>TV shows</span>
            <span>Animations</span>
            <span>Upgrade</span>
          </div>
          
          <img onClick={onFeedbackRestartRequested}  className="w-12 h-12 cursor-pointer" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
        </header>
      </div>
    </body>
  )
}