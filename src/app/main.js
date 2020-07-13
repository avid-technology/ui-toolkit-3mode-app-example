/**
 * Copyright 2019 by Avid Technology, Inc.
 */
import * as styles from './main.scss';

export default class ApplicationContainer {
    getTitle() {
        return 'Draw your circles!!!';
    }
    render(element) {
        const div_disp = document.createElement('DIV');
        div_disp.classList.add(styles.disp);
        element.appendChild(div_disp);

        const svg_disp = document.createElement('DIV');
        svg_disp.classList.add(styles.svg_disp);
        element.appendChild(svg_disp);

        const div_tr_up = document.createElement('DIV');
        div_tr_up.classList.add(styles.triangle_up);

        const div_tr_down = document.createElement('DIV');
        div_tr_down.classList.add(styles.triangle_down);

        const div_square = document.createElement('DIV');
        div_square.classList.add(styles.square);

        const div_tr_right = document.createElement('DIV');
        div_tr_right.classList.add(styles.triangle_right);
        
        div_disp.appendChild(div_tr_up);
        div_disp.appendChild(div_tr_down);
        div_disp.appendChild(div_square);
        div_disp.appendChild(div_tr_right);

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('id', 'svg_id');
        svg_disp.appendChild(svg);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('id', 'hide_me');
        text.setAttribute('x', '250');
        text.setAttribute('y', '250');
        text.innerHTML = 'Click HERE!';
        svg.appendChild(text);

        svg.addEventListener('click', function () {
            const div_to_hide = document.getElementById('hide_me');
            div_to_hide.setAttribute('display', 'none');
            const r = getRandom(4, 50);
            const h = 500;
            const w = 800;
            const max_x = w - r;
            const max_y = h - r;
            const container = document.getElementById('svg_id');
            const circles = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circles.setAttribute('cx', getRandom(r, max_x));
            circles.setAttribute('cy', getRandom(r, max_y));
            circles.setAttribute('r', r);
            circles.setAttribute('fill', randomColors());
            container.appendChild(circles);
        });

        const btn = document.createElement('BUTTON');
        btn.classList.add(styles.button);
        btn.innerHTML = 'Print this page';

        btn.addEventListener('click', function () {
            window.print();
        });

        svg_disp.appendChild(btn);

        function getRandom(min, max) {
            return min + (Math.random() * (max - min));
        }

        function randomColors() {
            return '#' + Math.random().toString(16).substr(-6);
        }
    }
}
