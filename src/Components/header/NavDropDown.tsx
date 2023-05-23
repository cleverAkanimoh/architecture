import DropDownHeading from './DropDownHeading'
import LiNavLinkComp from './LiNavLinkComp'

const NavDropDown = () => (
    <>
        <section>
            <DropDownHeading text="sizes" />

            <ul>
                <LiNavLinkComp path='1/bedroom' text="1 bedroom" />
                <LiNavLinkComp path='2/bedroom' text="2 bedrooms" />
                <LiNavLinkComp path='3/bedroom' text="3 bedrooms" />
                <LiNavLinkComp path='4/bedroom' text="4 bedrooms" />
                <LiNavLinkComp path='5/bedroom' text="5+ bedrooms" />
            </ul>
        </section>

        <section>
            <DropDownHeading text="styles" />

            <ul>
                <LiNavLinkComp path='1/buildings' text="commercial buildings" />
                <LiNavLinkComp path='2/buildings' text="apartments" />
                <LiNavLinkComp path='3/buildings' text="Hotels and Lodges" />
                <LiNavLinkComp path='4/buildings' text="Duplex Designs" />
                <LiNavLinkComp path='5/buildings' text="Modern house plans" />
            </ul>
        </section>

        <section>
            <DropDownHeading text="styles" />

            <ul>
                <LiNavLinkComp path='1/houses' text="small house plans" />
                <LiNavLinkComp path='2/houses' text="beach house plans" />
                <LiNavLinkComp path='3/houses' text="contemporary house plans" />
                <LiNavLinkComp path='4/houses' text="Mediterranean" />
                <LiNavLinkComp path='5/houses' text="farm house plans" />
            </ul>
        </section>

        <section>
            <DropDownHeading text="our favourite" />

            <img src="hh" alt='fav image' />
        </section>
    </>
)

export default NavDropDown