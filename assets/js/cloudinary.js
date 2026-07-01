const CLOUD_NAME = "dw5m4wus8";

function cloudinaryImage(item, width) {
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_limit,w_${width}/${item.version}/${item.id}.jpg`;
}

function cloudinaryThumb(item) {
    return cloudinaryImage(item, 600);
}

function cloudinaryFull(item) {
    return cloudinaryImage(item, 1600);
}