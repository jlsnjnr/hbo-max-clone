import { useEffect, useState } from "react";
import { CircleNotch, Plus } from "phosphor-react";
import splashImg from '../../assets/splashscreen.svg'
import { LoadingLogin } from "../../components/LoadingLogin";
import { WhoIsWatching } from "../../components/WhoIsWatching";


export function Login() {
  const [counter, setCounter] = useState(3)

  useEffect(() => {
    counter - 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if(counter > 3) {
      setCounter(0)
    }
  }, [counter]);

  if (counter === 0) {
    return (
      <WhoIsWatching />
    )
  }

  return (
    <LoadingLogin />
  )
}