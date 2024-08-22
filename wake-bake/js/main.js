(function () {
    document.addEventListener('click', burgerInit)
    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger__icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        }
        else { document.body.classList.remove('body--opened-menu') }


    }

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            document.body.classList.remove('body--opened-modal')
        }

    })

    const tabControl = document.querySelector('.tab-control')
    tabControl.addEventListener('click', toggleTab)
    function toggleTab(e) {
        const tab = e.target.closest('.tab-control__link')
        if (!tab) return
        e.preventDefault()
        if (tab.classList.contains('tab-control__link--active')) return
        const tabContentID = tab.getAttribute('href')
        document.querySelector('.tab-content--show').classList.remove('tab-content--show')
        document.querySelector(tabContentID).classList.add('tab-content--show')
        document.querySelector('.tab-control__link--active').classList.remove('tab-control__link--active')
        tab.classList.add('tab-control__link--active')
    }

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
            
            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return;
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');
            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            }
            else {
                accordionContent.style.maxHeight = null
            }
        })

    });

})()