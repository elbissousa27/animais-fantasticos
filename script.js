const classAtivo = 'ativo'
function initTab(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length) {

        tabContent[0].classList.add(classAtivo);

        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove(classAtivo);
            });
            tabContent[index].classList.add(classAtivo);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTab();

function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    if(accordionList.length){

        accordionList[0].classList.add(classAtivo);
        accordionList[0].nextElementSibling.classList.add(classAtivo);

        function activeAccordion(event){
            this.classList.toggle(classAtivo);
            this.nextElementSibling.classList.toggle(classAtivo);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion()

function initScrollSuave(){

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);


        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });


        // forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave()

function initanimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
        const windowMetade = window.innerHeight*0.6;

        function animaScroll(){
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible){
                    section.classList.add('ativo');
                }
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
initanimacaoScroll();
