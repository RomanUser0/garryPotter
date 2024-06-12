import { RefObject } from "react"



function scrollPage(headerRef: RefObject<HTMLDivElement>, styles: any, startPosition: number) {

    let lastScroll = 0
    const classHide = () => headerRef.current?.classList.contains(styles)
    const scrollPosition = () => window.scrollY

        window.addEventListener('scroll', () => {
            if (scrollPosition() > lastScroll && !classHide() && startPosition < scrollPosition()) {
                headerRef.current?.classList.add(styles)
            } else if (scrollPosition() < lastScroll && classHide()) {
                headerRef.current?.classList.remove(styles)
            }        
            lastScroll = scrollPosition()
        })

}

export default scrollPage