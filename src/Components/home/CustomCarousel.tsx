import { VscChevronLeft, VscChevronRight } from "react-icons/vsc"
import ImageArea from "./ImageArea"

export default function CustomCarousel() {
  return (
    <section className="res-caurosel h-[32vw] relative hidden sm2:flex overflow-y-hidden">
      <div>
        <button className="btn-caro-style left-[0] rounded-r-full">
          <VscChevronLeft />
        </button>
        <button className="btn-caro-style right-[0] rounded-l-full">
          <VscChevronRight />
        </button>

        <article className="flex relative">
          <ImageArea
            to=""
            src={''}
            title=""
          />
        </article>

      </div>
    </section>
  )
}