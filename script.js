const sections = document.querySelectorAll('.section')
const links = document.querySelectorAll('.nav__lk')
const getId = (link) => link.getAttribute('href').replace('#', '')

const observe = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            links.forEach((link) => {
                if (getId(link) === entry.target.id) {
                    link.classList.add('active')
                    
                } else {
                    link.classList.remove('active')
                }
            })
        }
    })
   

},{
    threshold: 0.9
})

sections.forEach((section) => {
    observe.observe(section)
})

