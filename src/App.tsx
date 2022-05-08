import { useEffect, useState } from "react";
import { CircleNotch, Plus } from "phosphor-react";
import splashImg from './assets/splashscreen.svg'
import avatarMan from './assets/avatar-man.svg'
import avatarWoman from './assets/avatar-woman.svg'

export function App() {
  const [counter, setCounter] = useState(3)

  useEffect(() => {
    counter - 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if(counter > 3) {
      setCounter(0)
    }
  }, [counter]);
  
  if (counter === 0) {
    return (
      <div className="body-init flex h-screen justify-between items-center flex-col">
        <div className="text-center">
          <img src={splashImg} className="align-image w-40 h-40 flex align-center justify-center" alt="" /> 
          <h2 className="text-white text-6xl">Who Is Watching?</h2>
        </div>
         
        <div className="flex">
          <button className="mx-12" onClick={() => console.log('man')}>
            <img src={avatarMan} alt="" />
            <span className="text-white text-xl mt-6 block">Júnior</span>
          </button>
          <button className="mx-12" onClick={() => console.log('woman')}>
            <img src={avatarWoman} alt="" />
            <span className="text-white text-xl mt-6 block">Júlia</span>
          </button>
        </div>

        <div className="flex my-4">
          <button className="mx-14 flex items-center justify-center h-12 w-40 bg-[#FFFFFF33] rounded-full hover:bg-[#5B1CE6] transition-colors duration-500">
            <Plus className="text-white mx-1" />
            <p className="text-white opacity-100 mx-1">Adult</p>
          </button>
          <button className="mx-14 flex items-center justify-center h-12 w-40 bg-[#FFFFFF33] rounded-full hover:bg-[#5B1CE6] transition-colors duration-500">
            <Plus className="text-white mx-1" />
            <p className="text-white opacity-100 mx-1">Kid</p>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="body-center flex h-screen justify-center items-center flex-col">
      <img src={splashImg} alt="" />  
      <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
        <CircleNotch weight="bold" className="w-12 h-12 animate-spin text-white" />
      </div>
    </div>
  )
}