
const panorama = new PANOLENS.ImagePanorama('test.jpg');
const viewer = new PANOLENS.Viewer({
    controlBar: false,
    horizontalView: false,
    cameraFov: 80,
    autoRotate: true,
    autoRotateSpeed: .7,
    viewIndicator: true
});

viewer.add(panorama);
viewer.OrbitControls.noZoom = true;
