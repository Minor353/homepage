const parent = document.querySelector("body");
const item1 = document.querySelector(".index-img__layer-1");
const item2 = document.querySelector(".index-img__layer-2");
const item3 = document.querySelector(".index-img__layer-3");
const item4 = document.querySelector(".index-img__layer-4");

var center = {
    x: parent.offsetWidth / 2,
    y: parent.offsetHeight / 2
};

parent.onmousemove = function (event) {
    item1.setAttribute(
        'style',
        'transform: translate3d(' + Math.round((center.x - event.pageX) / 15) +
                'px, ' + Math.round((center.y - event.pageY) / 15) + 'px, 0);'
    );

    item2.setAttribute(
        'style',
        'transform: translate3d(' + Math.round((center.x - event.pageX) / 40) +
                'px, ' + Math.round((center.y - event.pageY) / 40) + 'px, 0);'
    );

    item3.setAttribute(
        'style',
        'transform: translate3d(' + Math.round((center.x - event.pageX) / 75) +
                'px, ' + Math.round((center.y - event.pageY) / 75) + 'px, 0);'
    );

    item4.setAttribute(
        'style',
        'transform: translate3d(' + Math.round((center.x - event.pageX) / 100) +
                'px, ' + Math.round((center.y - event.pageY) / 100) + 'px, 0);'
    );

}

  

function initMap() {
    const myMap = {lat: 48.415578, lng: 35.05997};
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: myMap,
        scrollwheel: false
    });
    const marker = new google.maps.Marker({
        position: myMap,
        map: map
    });
}