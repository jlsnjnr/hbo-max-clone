import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'
import api from '../../services/api';
import splashImg from "../../assets/splashscreen.svg";
import avatarWoman from '../../assets/avatar-woman.svg'
import { LoadingLogin } from '../../components/LoadingLogin';

interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
}

export function Movie(){
  const { id } = useParams();
  const navigate = useNavigate();

  // @ts-ignore
  const [filme, setFilme] = useState<IMovie>({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=>{
        console.log("FILME NAO ENCONTRADO");
        navigate("/", { replace: true });
        return;
      })
    }

    loadFilme();


    return () => {
      console.log("COMPONENTE FOI DESMONTADO")
    }
  }, [navigate, id])

  if(loading){
    return(
      <LoadingLogin />
    )
  }

    {/* <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="" /> */}
    {/* {console.log(`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`)} */}
  
  return(
    <body style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${filme.backdrop_path}')`, 
    }} className="font-gilroy-medium bg-zinc-900 text-white bg-no-repeat bg-cover overflow-x-hidden">

      <div className=" p-12">
        <header className="flex justify-between h-20 items-center px-12 py-5">
          <div>
            <Link to='/'><img className="h:10 w-20 md:w-32 md:h-16" src={splashImg} alt="" /></Link>
          </div>

          <div>
            <img className="w-11" src={avatarWoman} alt="" />
          </div>
        </header> 

        <main className="py-16">
          <div>
            <p className="text-xl font-gilroy-medium ">2022 | PG-13 | 3h 7m</p>

            <h1 className="uppercase text-7xl font-gilroy-bold leading max-w-lg my-3">{filme.title}</h1>

            <h2 className="text-3xl mb-5">Action | Drama</h2>

            <div className="flex gap-4">
              <img src="/img/imdb-logo.svg" alt="" />
              <p className="text-2xl">{filme.vote_average} / 10</p>
            </div>
          </div>

          <div className="flex gap-5 items-center mt-7 mb-14">
            
            <button className="flex rounded-lg p-5 gap-2 
            bg-gradient-to-b from-gray-200 via-gray-400-20 to-gray-600-20
            ;">
              <img src="/img/button-main-play.svg" alt=""/>
              Watch Now
              <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                Trailer
              </a>
            </button>

            <button className="flex rounded-lg outline outline-offset-2 outline-1 p-4 gap-2 text-base">
              <img src="/img/movie/icon-add-list.svg" alt=""/>
              Add in my list
            </button>
          </div>

          <div>
            <h2 className="text-2xl font-gilroy-bold">Synopsis</h2>

            <p className="text-sm leading-9 max-w-lg">{filme.overview}</p>
          </div>
        </main>
      </div>
    </body>
  )
}
