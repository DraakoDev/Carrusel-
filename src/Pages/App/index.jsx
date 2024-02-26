import Slider from "react-slick"; // Crea el efecto carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slideToShow: 3,
    slideToScroll: 1,
    /*     autoplay: true,
    autoplaySpeed: 1000, */
  };

  const data = [
    {
      name: `Cuphead`,
      img: `/cuphead.jpg`,
      review:
        "Un juego de plataformas y acción inspirado en los dibujos animados de los años 1930, conocido por su estilo visual único de la era de la animación de la década de 1930 y su desafiante jugabilidad de jefe de estilo arcade.",
    },
    {
      name: `Rain World`,
      img: `/rain.png`,
      review:
        "Un juego de supervivencia y exploración donde los jugadores deben sobrevivir en un mundo extraño y oscuro, recolectando recursos, creando herramientas y evitando peligros, todo mientras luchan contra la locura y la inevitabilidad de la muerte.",
    },
    {
      name: `Don't Starve`,
      img: `/starve.jpg`,
      review:
        "Un juego de plataformas y exploración ambientado en un mundo postapocalíptico, donde los jugadores controlan a una criatura llamada Slugcat, que debe navegar por entornos peligrosos y hostiles mientras busca comida y evita depredadores en un ciclo constante de supervivencia.",
    },
  ];
  return (
    <>
      <div className="w-3/4 h-auto m-auto">
        <div className="mt-30">
          <Slider {...settings}>
            {data.map((d, i) => (
              <div key={i}>
                <div className="bg-slate-400 h-auto text-black rounded-x1 mt-4">
                  <div className="flex flex-col items-center h-[450px] justify-center gap-5 p-5">
                    <div className="h-56">
                      <img src={d.img} className="w-80" />
                    </div>
                    <p className="text-x1 font-semibold">{d.name}</p>
                    <p className="text-center h-20">{d.review}</p>
                    <button className="p-4 bg-slate-600 rounded-md">
                      See trailer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default App;
