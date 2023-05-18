import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import data from '../../ts/newHouseProperties'
import NewHouseComp from './NewHouseComp'

export default function NewHouseSlider() {

    let box = document.querySelector('.properties-container') as HTMLDivElement

    let properties = data

    const moveSlideRight = () => {
        let width = box?.clientWidth
        box.scrollLeft = box?.scrollLeft - width
        console.log(width);
        
    }

    const moveSlideLeft = () => {
        let width = box?.clientWidth
        box.scrollLeft = box?.scrollLeft + width
    }


    const propertyMap = properties.map((property) => {
        const { id, path, src, title, price, desc1, desc2, desc3, desc4, desc5, desc6 } = property

        return (
            <div className={`multiSlide-article-style`} key={id}>
                <NewHouseComp path={path} src={src} title={title} price={price} desc1={desc1} desc2={desc2} desc3={desc3} desc4={desc4} desc5={desc5} desc6={desc6} />
            </div>
        )
    })


    return (
        <section className="properties-slider">
            <div>
                <button className="btn-caro-style left-[0] rounded-r-full" onClick={moveSlideLeft} >
                    <VscChevronLeft />
                </button>
                <button className="btn-caro-style right-[0] rounded-l-full" onClick={moveSlideRight} >
                    <VscChevronRight />
                </button>

                <article className='properties-container'>
                    {propertyMap}
                </article>

            </div>
        </section>
    )
}