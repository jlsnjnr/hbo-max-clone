import splashImg from "../assets/splashscreen.svg";
import play from "../assets/play.svg";
import avatarWoman from '../assets/avatar-woman.svg'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { LoadingLogin } from "./LoadingLogin";

interface IMovie {
  id:number;
  title:string;
  poster_path: string;
}

export function Header() {
  const [filmes, setFilmes] = useState<IMovie[]>([]);
  const [filmesBottom, setFilmesBottom] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
         api_key: "28fc232cc001c31e8a031f419d0a14ca",
         language: "pt-BR",
         page: 1,
        }
      })

      setFilmes(response.data.results.slice(0, 12))
      setFilmesBottom(response.data.results.slice(12, 20))
      setLoading(false);
    }
  
    loadFilmes();
  }, [])

  if(loading){
    return(
      <LoadingLogin />
    )
  }

  return (
    <body className="font-gilroy-medium bg-hero-pattern text-white bg-no-repeat bg-cover bg-zinc-900 overflow-x-hidden">
      <div className="p-12">
        <header className="container flex items-center justify-between mx-auto bg-[#00000041] p-3 px-12 rounded-3xl blur-image">
          <img src={splashImg} className="h:10 w-20 md:w-32 md:h-16" alt="" />

          <div className="hidden md:flex text-x1 gap-12">
            <span>Movies</span>
            <span>TV shows</span>
            <span>Animations</span>
            <span>Upgrade</span>
          </div>

          <img
            className="h-8 w-8  md:w-12 md:h-12 cursor-pointer"
            src={avatarWoman}
            alt='foto do usuario'
          />
        </header>

        <main className="container mx-auto py-12">
          <div>
            <p className="text-center text-sm md:text-xl md:text-left">
              2021 | PG-13 | 2h 28m
            </p>

            <h1 className="uppercase text-4xl text-center md:text-left md:text-7xl gilroy-medium leading max-w-lg my-3">
              Spider-Man: No Way Home
            </h1>

            <h2 className="text-center text-sm md:text-3xl md:text-left mb-5">
              Action | Adventure | Fantasy
            </h2>

            <div className="items-center justify-center md:justify-start flex gap-4">
              <svg
                width="53"
                height="27"
                viewBox="0 0 53 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_222)">
                  <path
                    d="M53 2.29904C52.8562 1.12137 51.9833 0.182742 50.8717 0C45.9994 0 7.02181 0 2.1495 0C0.931878 0.200278 0 1.30688 0 2.64053C0 4.78451 0 21.9327 0 24.0758C0 25.5525 1.14019 26.7495 2.54769 26.7495C7.33981 26.7495 45.6814 26.7495 50.4735 26.7495C51.7695 26.7495 52.8396 25.7334 53 24.4182C53 19.9945 53 4.5104 53 2.29904Z"
                    fill="#F6C700"
                  />
                  <path
                    d="M6.39221 5.3752H10.5981V21.5866H6.39221V5.3752Z"
                    fill="black"
                  />
                  <path
                    d="M18.5454 12.8427C18.1841 10.372 17.9832 8.99864 17.9435 8.72452C17.7675 7.40195 17.5997 6.25105 17.4393 5.26904C17.0753 5.26904 15.2585 5.26904 11.9863 5.26904V21.4805H15.6705L15.6834 10.7762L17.2338 21.4805H19.858L21.3282 10.5381L21.342 21.4805H25.0142V5.26904H19.5197L18.5454 12.8427Z"
                    fill="black"
                  />
                  <path
                    d="M31.9576 8.64146C32.0037 8.8482 32.0277 9.31705 32.0277 10.0499C32.0277 10.6784 32.0277 15.7066 32.0277 16.3351C32.0277 17.414 31.9576 18.0748 31.8184 18.3185C31.6783 18.5621 31.3059 18.683 30.7022 18.683C30.7022 17.6189 30.7022 9.1057 30.7022 8.04155C31.1603 8.04155 31.4728 8.09047 31.6387 8.18645C31.8046 8.28336 31.9115 8.43472 31.9576 8.64146ZM33.8573 21.3153C34.3578 21.2054 34.7781 21.0116 35.1192 20.7356C35.4593 20.4588 35.698 20.0757 35.8344 19.5857C35.9718 19.0965 36.0529 18.1247 36.0529 16.671C36.0529 16.1025 36.0529 11.5478 36.0529 10.9783C36.0529 9.44442 35.993 8.41626 35.8999 7.89388C35.8059 7.37057 35.5727 6.89526 35.1994 6.46886C34.8251 6.04247 34.2795 5.73605 33.5624 5.54962C32.8443 5.36318 31.6737 5.26904 29.6376 5.26904C29.4284 5.26904 28.3831 5.26904 26.5 5.26904V21.4805H31.5954C32.7697 21.4435 33.5237 21.3891 33.8573 21.3153Z"
                    fill="black"
                  />
                  <path
                    d="M42.8387 18.8925C42.7613 19.0984 42.4221 19.2027 42.1658 19.2027C41.9151 19.2027 41.7483 19.103 41.6635 18.9027C41.5787 18.7033 41.5372 18.2483 41.5372 17.5358C41.5372 17.1076 41.5372 13.6798 41.5372 13.2515C41.5372 12.5132 41.5741 12.0526 41.6487 11.869C41.7225 11.6872 41.8847 11.5949 42.1354 11.5949C42.3916 11.5949 42.7355 11.6992 42.8239 11.9087C42.9115 12.1182 42.9558 12.5658 42.9558 13.2515C42.9558 13.5284 42.9558 14.9128 42.9558 17.4057C42.929 18.2594 42.8903 18.755 42.8387 18.8925ZM37.4852 21.3393H41.2717C41.4294 20.72 41.516 20.3757 41.5335 20.3065C41.8764 20.7218 42.2534 21.0338 42.6672 21.2405C43.0793 21.4482 43.6959 21.5515 44.1734 21.5515C44.8379 21.5515 45.4113 21.3771 45.8952 21.0273C46.3782 20.6784 46.686 20.265 46.8169 19.7896C46.9478 19.3134 47.0132 18.5898 47.0132 17.617C47.0132 17.162 47.0132 13.5238 47.0132 13.0688C47.0132 12.0905 46.9911 11.4518 46.9478 11.1519C46.9045 10.8519 46.7754 10.5464 46.5607 10.2335C46.3459 9.92066 46.0334 9.67793 45.6242 9.50441C45.2149 9.3309 44.7319 9.24414 44.1752 9.24414C43.6913 9.24414 43.0719 9.34105 42.659 9.5321C42.2469 9.72315 41.8727 10.013 41.5372 10.4015C41.5372 10.0499 41.5372 8.29259 41.5372 5.12784H37.4852V21.3393Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_222">
                    <rect width="53" height="26.7495" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-2xl">8.5</p>
            </div>
          </div>

          <button className="mt-7 mx-auto md:mx-0 flex items-center justify-center md:justify-start  rounded-lg outline outline-offset-2 outline-1 p-4 gap-2 text-base">
            <img src={play} alt="" />
            Watch Now
          </button>
        </main>

        <section className="container mx-auto">
          <h2 className="text-xl text-center md:text-left md:text-3xl font-gilroy-bold">
            Popular Collections
          </h2>

          <Swiper
            spaceBetween={50}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            className="my-5"
          >
            {filmes.map((filme) => {
              return(
                <SwiperSlide key={filme.id}>
                  <Link to={`/filme/${filme.id}`}>
                    <img 
                      className="w-[219px] h-[280px] object-cover rounded-lg" 
                      src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} 
                      alt={filme.title} 
                    />
                  </Link>
                </SwiperSlide>
              )
            })}
          </Swiper>

        </section>

        <section className="container mx-auto">
          <h2 className="text-xl text-center md:text-left md:text-3xl font-gilroy-bold">
            New Releases
          </h2>

          <Swiper
            spaceBetween={50}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            className="my-5"
          >
            {filmesBottom.map((filme) => {
              return(
                <SwiperSlide key={filme.id}>
                  <Link to={`/filme/${filme.id}`}>
                    <img 
                      className="w-[338px] h-[280px] object-cover rounded-lg" 
                      src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} 
                      alt={filme.title} 
                    />
                  </Link>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </section>
      </div>
    </body>
  );
}