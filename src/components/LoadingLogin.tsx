import splashImg from '../assets/splashscreen.svg'
import { CircleNotch } from "phosphor-react";

export function LoadingLogin() {
  return (
    <div className="body-center flex h-screen justify-center items-center flex-col">
      <img src={splashImg} className="w-3/5 md:w-96" alt="" />  
      <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
        <CircleNotch weight="bold" className="w-12 h-12 animate-spin text-white" />
      </div>
    </div>
  )
}