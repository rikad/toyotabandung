'use strict';

let _ = target => document.querySelector(target)

function addCarouselEvent() {

    let target = _('.home__carousel')
    let initialX, lastX, distanceX;
    let statePosition = 0;
    let carousel = _('.carousel__container')
    let allowCarousel = {}
    let screenWidth = target.offsetWidth

    target.addEventListener('touchstart', 
        function(e) {
            initialX = e.touches[0].pageX
            
            let imgAmount = carousel.childElementCount
            let transXLimit = ( imgAmount * -100 ) + 100

            if ( statePosition < 0 && statePosition > transXLimit  ) {
                allowCarousel.toLeft = true
                allowCarousel.toRight = true
            }

            else if ( statePosition >= 0 ) {
                allowCarousel.toLeft = false
                allowCarousel.toRight = true
            }

            else if ( statePosition <= transXLimit ) {
                allowCarousel.toLeft = true
                allowCarousel.toRight = false
            }

        }
    ,false)



    target.addEventListener('touchmove', 
        function(e) {
            carousel.classList.remove('carousel__transition--on')
            lastX = e.touches[0].pageX
            distanceX = initialX - lastX
            if ( distanceX > (screenWidth * .05) )
                carousel.style.transform = `translateX( calc(${statePosition}vw + ${ -distanceX + (screenWidth * .05) }px ) )`
            else if ( -distanceX > (screenWidth * .05 ) )
                carousel.style.transform = `translateX( calc(${statePosition}vw + ${ -distanceX - (screenWidth * .05) }px ) )`

        }
    ,false)


    target.addEventListener('touchend',
        function(e){
            let distanceRatio = distanceX / screenWidth
            let positifyRatio = ( distanceRatio < 0 ) ? -distanceRatio : distanceRatio

            carousel.style.transform = `translateX(${statePosition}vw)`

            if ( lastX < initialX && positifyRatio >= .125 ) {
                if ( allowCarousel.toRight ) {
                    statePosition -= 100
                    carousel.style.transform = `translateX(${statePosition}vw)`
                }
                else carousel.style.transform = `translateX(${statePosition}vw)`
            }

            else if ( lastX > initialX && positifyRatio >= .125  ) {
                if ( allowCarousel.toLeft ) { 
                    statePosition += 100
                    carousel.style.transform = `translateX(${statePosition}vw)`
                }
                else carousel.style.transform = `translateX(${statePosition}vw)`
            }

            carousel.classList.add('carousel__transition--on')
        }
    ,false)
}

function SHOW_CAR_MODEL(model) {
    let target = _('.model__vehicle')
    let finalTemplate = ''
    let template = v => (
        `<div class='vehicle__card'>
            <div class='card__image' style='background : url("src/img/car/${v.id}/${v.id}-320.jpg") no-repeat center center; background-size : 100% auto;'></div>
            <div class='card__info'>
                <span class='info__name'>${v.name}</span>
                <span class='info__price'>START FROM - Rp ${v.startPrice}</span>
                <div id='${v.id}' class='info__button' onclick='SHOW_VEHICLE_DETAIL(this.id)'>KNOW MORE</div>
            </div>
        </div>`
    )

    let car = vehicle[model]            
    let arrangeTemplate = v => finalTemplate+= v
    
    car.map( item => arrangeTemplate( template( item ) ) )
    target.innerHTML = finalTemplate
    
    let z = 0;
    let x = target.childElementCount
    for ( let i = 0; i < x; i++  ) {
        target.children[i].style.animationDelay = `${z}ms`
        target.children[i].classList.add('vehicle__card--animation')
        target.children[i].style.animationFillMode = 'forwards'
        z += 200;
    }

}


function changeColor(car,color) {
    _('.car__image').style.backgroundImage= `url("src/img/car/${car}/variant/${color}.jpg")`;
    _('.car__image').style.backgroundSize = '100% auto';
}

function addContent(car) {

    let vehicle = productDetail[car]
    _('.car__name').textContent = vehicle.vehicleName
    _('.spec-displacement').textContent = vehicle.specification.displacement
    _('.spec-torque').textContent = vehicle.specification.torque
    _('.spec-panjang').textContent = vehicle.specification.length
    _('.spec-lebar').textContent = vehicle.specification.width
    _('.spec-tinggi').textContent = vehicle.specification.height

    let vColor = productDetail[car].vehicleColor;
    changeColor(car, vColor[0])

    let finalTemplate = ''
    let template = v => (
        `<span style='background:#${v}' onclick='changeColor("${car}", "${v}")'></span>`
    )
    let arrangeTemplate = v => finalTemplate+= v

    let target = _('.car__color')
    vColor.map( item => arrangeTemplate( template( item ) ) )
    target.innerHTML = finalTemplate
}

function SHOW_VEHICLE_DETAIL(car) {
    let target = _('.price__table > tbody')
    let vehicle = productDetail[car].vehiclePrice
    let finalTemplate = ''
    let template = v => (
        `<tr>
            <td class='col__type'>${v.type}</td><td class='col__price'>${v.priceString}</td>
        </tr>`
    )
    let arrangeTemplate = v => finalTemplate+= v

    _('.model__vdetail').classList.add('model__vdetail--showen')
    _('.model__vdetail').classList.remove('model__vdetail--hidden')

    addContent(car)

    vehicle.map( item => arrangeTemplate( template( item ) ) )
    target.innerHTML = finalTemplate   
}

(function(){
    addCarouselEvent()
    SHOW_CAR_MODEL('SEDAN')
    ADD_DROPDOWN_EVENT()
    setOrder()
}());

function ADD_DROPDOWN_EVENT() {
    let target = [].slice.call(document.querySelectorAll('.dropdown-list > span'));
    target.map( item => item.addEventListener('click', selectModel, false) )
}

function openDropdown() {
    let target =  _('.dropdown-list')
    target.classList.remove('list--hidden')
    target.classList.add('list--showen')
}

function selectModel(e) {
    let selected = e.target.textContent
    let target =  _('.dropdown-list')
    target.classList.add('list--hidden')
    target.classList.remove('list--showen')
    SHOW_CAR_MODEL(selected)
}

function closeDetail() {
    _('.model__vdetail').classList.add('model__vdetail--hidden');
    _('.model__vdetail').classList.remove('model__vdetail--showen');
}


function navigationPage(page) {
    let pages = [ 'promo', 'pricelist', 'credit' ]
    pages.map( p =>  {
        if( p === page ) 
            _(`#${p}`).style.display = 'flex';
        else 
            _(`#${p}`).style.display = 'none';
    })
}

function slidePromo() {
    let target = _('.container__slide')
    target.style.transform = 'translateX(-75vw)';
}

function setOrder(x) {
    let targetArray = [].slice.call(document.querySelectorAll('.container__slide > div'));
    let i = 1;
    targetArray.map( element => {
        element.style.order = i
        i+=1
    })
}

function setSlide(x) {
    let targetArray = [].slice.call(document.querySelectorAll('.container__slide > div'));
    targetArray.map( i => {
        let currentOrder = parseInt(i.style.order)
        let sumOrder = currentOrder + x

        if      ( sumOrder > 4 )    i.style.order = 1
        else if ( sumOrder < 1 )    i.style.order = 4
        else                        i.style.order = sumOrder
    })

}

function closeChat() {
    let target = _('.greetings-chat')
    target.style.display = 'none';
}

function openContact() {
    let target = _('#contact')
    target.classList.remove('contact--hidden');
    target.classList.add('contact--showen')
}

function closeContact() {
    let target = _('#contact')
    target.classList.remove('contact--showen');
    target.classList.add('contact--hidden')
}
