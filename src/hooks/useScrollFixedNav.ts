import { useCallback, useEffect, useState } from "react"

export default function useScrollFixedNav(value: number) {
    const [scrolled, setScrolled] = useState(false)

    const onScrolling = useCallback(() => window.scrollY > value ? setScrolled(true) : setScrolled(false), [scrolled])

    useEffect(() => {
        window.onscroll = onScrolling

        return () => window.removeEventListener('scroll', onScrolling)
    }, [])

    return scrolled;
}