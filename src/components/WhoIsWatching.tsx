import avatarMan from '../assets/avatar-man.svg'
import avatarWoman from '../assets/avatar-woman.svg'
import splashImg from '../assets/splashscreen.svg'
import { Plus } from "phosphor-react";

export function WhoIsWatching() {
  return (
    <div className="body-init flex h-screen justify-between items-center flex-col">
      <div className="text-center">
        <img src={splashImg} className="align-image w-40 h-40 flex align-center justify-center" alt="" /> 
        <h2 className="text-white text-3xl md:text-6xl">Who Is Watching?</h2>
      </div>
      
      <div className="flex w-full md:w-[411px] 2xl:w-[511px] items-center justify-around ">
        <button onClick={() => console.log('man')}>
          <img src={avatarMan} className="w-32 md:w-full 2xl:w-60" alt="" />
          <span className="text-white text-xl mt-6 block">Júnior</span>
        </button>
        <button onClick={() => console.log('woman')}>
          <img src={avatarWoman} className="w-32 md:w-full 2xl:w-60" alt="" />
          <span className="text-white text-xl mt-6 block">Júlia</span>
        </button>
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