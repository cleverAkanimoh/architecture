import React from 'react'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import ImageArea from './ImageArea'
import data from '../../ts/properties'

export default function NewHouseSlider() {

    const [index, setIndex] = React.useState(0)
    const properties = data

    React.useEffect(() => {
        const lastIndex = properties.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, properties])

    React.useEffect(() => {
        let sliderInterval = setInterval(() => setIndex(index + 1), 10000);

        return () => clearInterval(sliderInterval);
    }, [index])

    const moveSlideRight = () => setIndex(prevIndex => prevIndex + 1)

    const moveSlideLeft = () => setIndex(prevIndex => prevIndex - 1)


    const propertyMap = properties.map((property, propertyIndex) => {
        const { id, path, src, title } = property;
        let position = 'nextSlide';
        if (propertyIndex === index) {
            position = 'activeSlide'
        }
        if (propertyIndex === index - 1 || (index === 0 && propertyIndex === properties.length - 1)) {
            position = 'lastSlide'
        }

        return (
            <div className={`${position} slide-article-style`} key={id} >
                <ImageArea to={path} src={src} title={title} />
            </div>
        )
    })


    return (
        <section className="res-caurosel h-[32vw] relative hidden sm2:flex overflow-hidden">
            <div>
                <button className="btn-caro-style left-[0] rounded-r-full" onClick={moveSlideLeft} >
                    <VscChevronLeft />
                </button>
                <button className="btn-caro-style right-[0] rounded-l-full" onClick={moveSlideRight} >
                    <VscChevronRight />
                </button>

                <article>
                    {propertyMap}
                </article>

            </div>
        </section>
    )
}