import React from 'react'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import data from '../../ts/newHouseProperties'
import NewHouseComp from './NewHouseComp'

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
        const { id,path, src, title, price, desc1, desc2, desc3, desc4, desc5, desc6 } = property;
        let position = 'newSlide';
        if (propertyIndex === index) {
            position = 'currentSlide'
        }
        if (propertyIndex === index - 1 || (index === 0 && propertyIndex === properties.length - 1)) {
            position = 'prevSlide'
        }

        return (
            <div className={`${position} slide-article-style grid sm2:grid-cols-2 sm2:gap-8`} key={id}>
                <NewHouseComp path={path} src={src} title={title} price={price} desc1={desc1} desc2={desc2} desc3={desc3} desc4={desc4} desc5={desc5} desc6={desc6}  />
            </div>
        )
    })


    return (
        <section className="w-full h-[250px] relative flex overflow-hidden">
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