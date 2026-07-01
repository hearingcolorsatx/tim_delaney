function buildIcons(item) {

    if (!item.links) return "";

const icons = {
    spotify: {
        family: "brands",
        icon: "fa-spotify"
    },

    apple: {
        family: "brands",
        icon: "fa-apple"
    },

    soundcloud: {
        family: "brands",
        icon: "fa-soundcloud"
    },

    youtube: {
        family: "brands",
        icon: "fa-youtube"
    },

    ethereum: {
        family: "brands",
        icon: "fa-ethereum"
    },

    guitar: {
        family: "solid",
        icon: "fa-guitar"
    },

    music: {
        family: "solid",
        icon: "fa-music"
    },

    palette: {
        family: "solid",
        icon: "fa-palette"
    },

    camera: {
        family: "solid",
        icon: "fa-camera"
    }
};

    let html = '<ul class="icons">';

    Object.entries(item.links).forEach(([service, url]) => {

        if (!url) return;

        const icon = icons[service];

        html += `
        <li>
            <a href="${url}" target="_blank" rel="noopener noreferrer">
                <i class="fa-${icon.family} ${icon.icon}"></i>
            </a>
        </li>
        `;
    });

    html += "</ul>";

    return html;

}

const gallery = document.querySelector("#main");

if (gallery && Array.isArray(galleryItems)) {
	gallery.innerHTML = "";

	galleryItems.forEach((item) => {
		const article = document.createElement("article");
		article.className = "thumb";

        article.innerHTML = `
            <a href="${cloudinaryFull(item)}" class="image">
                <img src="${cloudinaryThumb(item)}" alt="${item.alt}">
            </a>

            <h2>${item.title}</h2>

            <p>${item.description}</p>

            ${buildIcons(item)}
        `;
		gallery.appendChild(article);
	});
}