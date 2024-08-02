function toggleNavigation(navIsOpen: boolean | undefined) {
    const navContent = document.querySelector<HTMLElement>(".navigation-content")
    const navContainer = document.querySelector<HTMLElement>(".nav-container")
    const toggleButton = document.querySelector<HTMLElement>(".nav__toggle-btn")

    if (!navContainer || !navContent || !toggleButton) {
        throw new ReferenceError("Navigation element not found.")
    }

    navContainer.style.display = navIsOpen ? "none" : "block"

    // Make nav content smaller or larger depending on is the nav already open or not
    navContent.style.width = navIsOpen ? "50px" : "100%"
    navContent.style.height = navIsOpen ? "50px" : "100px"
    navContent.style.marginTop = navIsOpen ? "50px" : "-1px"
    navContent.style.paddingBottom = navIsOpen ? "50px" : "300%"
    navContent.style.borderRadius = navIsOpen ? "10px 0 0 10px" : "0"

    // Rotate toggle button
    // toggleButton.style.transform = navIsOpen ? "rotate(180deg)" : "fa-angles-left rotate(360deg)"
}

export default toggleNavigation



