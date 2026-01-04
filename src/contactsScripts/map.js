import { fetchData } from '../utils/fetchData.js';
import { initMenu } from '../utils/menu.js';
import { setIcon } from './mapIcon.js';

const isGitHubPages = window.location.hostname === 'kakbi.github.io';

const basePath = isGitHubPages ? '/real-estate-website' : ''; // Для GitHub Pages указываем репозиторий, локально оставляем пустым

document.addEventListener('DOMContentLoaded', async () => {
    // const data = await fetchData('../../data/data.json');
    const data = await fetchData(`${basePath}/data/data.json`);

    var map = L.map('map').setView([49.01464593084217, 31.252700508048274], 6);

    data.forEach((obj) => {
        L.marker([obj.latitude, obj.longitude], {
            // icon: setIcon('../data/images/iconHouse.png', [36, 36]),
            icon: setIcon(`${basePath}/data/images/iconHouse.png`, [36, 36]),
        })
            .addTo(map)
            .bindPopup(
                `<b>${obj.type}<br>$${obj.price}</b><br>Adress: ${obj.location.address}`
            );
    });

    L.marker([46.484457320538084, 30.734480080285376], {
        // icon: setIcon('../data/images/iconOffice.png', [56, 56]),
        icon: setIcon(`${basePath}/data/images/iconOffice.png`, [56, 56]),
    })
        .addTo(map)
        .bindPopup(
            `<b>Our head office<br>120 Deribasovskaya St</b><br>You can find us here`
        )
        .openPopup();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    initMenu();
});
