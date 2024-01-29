import $ from 'jquery';
import "slick-carousel"

export class Laptop{
    constructor() {
        $('.carousel').slick({
            dots: false,
            slidesToShow: 4,
        })
    }
}
