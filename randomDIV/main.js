/**
 * Created by Вероника on 22.07.2016.
 */
;(function () {
    "use strict";

    let btn = document.querySelector('#clickMe'),
        offsetX = 0,
        offsetY = 0,
        activeElement;

    btn.addEventListener('click', function () {
        let getRandomColor = () =>{
            let letters = '0123456789ABCDEF'.split(''),
                color = '#',
                colorLen = 6;

            for (let i = 0; i < colorLen; i++ ) {
                color += letters[Math.floor(Math.random() * letters.length)];
            }

            return color;
        },
        mouseDwn = (e) => {
            activeElement = e.target;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
        },
        mouseMve = (e) => {
            if (activeElement) {
                activeElement.style.top = (e.clientY - offsetY) + 'px';
                activeElement.style.left = (e.clientX - offsetX) + 'px';
            }
        },
        mouseUp = (e) => {
            activeElement = null;
        };

        let element = document.createElement('div'),
            style ='position: absolute;width: 234px;height: 234px;top: 100px; left:100px';

        style+=';background-color: '+ getRandomColor();
        element.setAttribute("style", style);
        document.body.appendChild(element);

        element.addEventListener("mousedown", mouseDwn);
        element.addEventListener("mousemove", mouseMve);
        element.addEventListener("mouseup", mouseUp);
    });
})();
