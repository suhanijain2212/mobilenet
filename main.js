Webcam.set({
width: 310,
height: 300,
image_format: 'png',
png_quality: 90,

constaints: {
    facingMode: "environment"
}
});
camera = document.getElementById("camera");

webcam.attach('#camera');
