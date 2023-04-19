import DropDownHeading from './DropDownHeading'
import LiNavLinkComp from './LiNavLinkComp'

const NavDropDown = () => (
    <>
        <section>
            <DropDownHeading text="sizes" />

            <ul>
                <LiNavLinkComp path='1/bedroom' children="1 bedroom" />
                <LiNavLinkComp path='2/bedroom' children="2 bedrooms" />
                <LiNavLinkComp path='3/bedroom' children="3 bedrooms" />
                <LiNavLinkComp path='4/bedroom' children="4 bedrooms" />
                <LiNavLinkComp path='5/bedroom' children="5+ bedrooms" />
            </ul>
        </section>

        <section>
            <DropDownHeading text="styles" />

            <ul>
                <LiNavLinkComp path='1/buildings' children="commercial buildings" />
                <LiNavLinkComp path='2/buildings' children="apartments" />
                <LiNavLinkComp path='3/buildings' children="Hotels and Lodges" />
                <LiNavLinkComp path='4/buildings' children="Duplex Designs" />
                <LiNavLinkComp path='5/buildings' children="Modern house plans" />
            </ul>
        </section>

        <section>
            <DropDownHeading text="styles" />

            <ul>
                <LiNavLinkComp path='1/houses' children="small house plans" />
                <LiNavLinkComp path='2/houses' children="beach house plans" />
                <LiNavLinkComp path='3/houses' children="contemporary house plans" />
                <LiNavLinkComp path='4/houses' children="Mediterranean" />
                <LiNavLinkComp path='5/houses' children="farm house plans" />
            </ul>
        </section>

        <section>
            <DropDownHeading text="our favourite" />

            <img src="hh" alt='fav image' />
        </section>
    </>
)

export default NavDropDown