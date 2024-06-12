






function lockScroll(activeScroll: boolean) {
    const body = document.getElementsByTagName('body')[0]
    if (activeScroll) {
        body?.classList.add('lockScroll')
        return
    }
    body?.classList.remove('lockScroll')


}



export default lockScroll


