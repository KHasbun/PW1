let carousel = () => {
    let carouselHolder;
    let carouselTracker;
    let carouselItems;
    let carouselItemsLength;
    let carouselIndex=0;


    function init() {
        const carouselHolder = document.querySelector('.carousel');
        const carouselTracker = carouselHolder.querySelector('.carousel-track');
        const carouselItems = carouselTracker.children;
    
        console.log(carouselItems);
    
        Array.from(carouselItems).forEach((item) => {
            const nodesWithLazyLoading = item.querySelectorAll('[data-src]');
            nodesWithLazyLoading.forEach(node => {
                switch(node.tagName) {
                    case 'IMG':
                        node.setAttribute('src', node.dataset.src);
                        break;
                    case 'SOURCE':
                        node.setAttribute('srcset', node.dataset.src);
                        break;
                    default:
                        break;
                }
            });
        });
    }
    

    init()



}


document.addEventListener('DOMContentLoaded',carousel);