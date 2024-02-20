function addImage() {
    var imageUrl = document.getElementById("image-url").value;

    if (imageUrl.trim() !== "") {
        var imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.onclick = function() {
            viewImage(imageUrl);
        };

        document.getElementById("gallery").appendChild(imageElement);
    }
}

function viewImage(imageUrl) {
    window.open("view_image.html?url=" + encodeURIComponent(imageUrl), "_blank");
}
