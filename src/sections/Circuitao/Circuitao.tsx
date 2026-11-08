import bannerImg from "../../assets/images/circuitao-banner.svg";
import ArrowButton from "../../components/ui/ArrowButton";
import { circuitao } from "../../data/event";

export default function Circuitao() {
  return (
    <section id="circuitao" className="scroll-mt-20 bg-white px-6 py-16">
      <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-xl shadow-xl">
        <img
          src={bannerImg}
          alt={circuitao.alt}
          width={1536}
          height={1336}
          className="block h-auto w-full"
        />

        <div className="absolute left-1/2 top-[79%] -translate-x-1/2 -translate-y-1/2 scale-75 sm:scale-100">
          <ArrowButton
            href={circuitao.registrationUrl}
            direction="up-right"
            external={circuitao.external}
          >
            Inscreva-se aqui
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
