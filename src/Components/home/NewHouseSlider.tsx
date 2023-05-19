import { useRef } from 'react'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import data from '../../ts/newHouseProperties'
import NewHouseComp from './NewHouseComp'

export default function NewHouseSlider() {

    let articleRef = useRef<HTMLElement>(null)

    let box = articleRef.current

    let properties = data

    const moveSlideRight = () => {
        if (box != null) {
            let width = box.clientWidth
            box.scrollLeft = box.scrollLeft + width
            console.log(width);
            console.log(box.scrollLeft);
            console.log(articleRef);
        }
    }

    const moveSlideLeft = () => {
        if (box != null) {
            let width = box.clientWidth
            box.scrollLeft = box.scrollLeft - width
            console.log(width);
            console.log(box.scrollLeft);
            console.log(articleRef);
        }
    }

    const propertyMap = properties.map((property) => {
        const { id, path, src, title, price, desc1, desc2, desc3, desc4, desc5, desc6 } = property

        return <NewHouseComp key={id} path={path} src={src} title={title} price={price} desc1={desc1} desc2={desc2} desc3={desc3} desc4={desc4} desc5={desc5} desc6={desc6} />
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

                <article className='properties-container' ref={articleRef}>
                    {propertyMap}
                </article>

            </div>
        </section>
    )
}