
const panorama1 = new PANOLENS.ImagePanorama('lunadesangre.jpg');
const panorama2 = new PANOLENS.ImagePanorama('puentehierro.jpg');
const panorama3 = new PANOLENS.ImagePanorama('fabricadeluz.jpg');
const panorama4 = new PANOLENS.ImagePanorama('altarmayor.jpg');

const viewer = new PANOLENS.Viewer({
    container: pano1,
    controlBar: false,
    horizontalView: false,
    cameraFov: 80,
    autoRotate: true,
    autoRotateSpeed: .7,
    viewIndicator: true
});

viewer.add(panorama1);
viewer.OrbitControls.noZoom = true;

const viewer2 = new PANOLENS.Viewer({
    container: pano2,
    controlBar: false,
    horizontalView: false,
    cameraFov: 80,
    autoRotate: true,
    autoRotateSpeed: .7,
    viewIndicator: true
});

viewer2.add(panorama2);
viewer2.OrbitControls.noZoom = true;

const viewer3 = new PANOLENS.Viewer({
    container: pano3,
    controlBar: false,
    horizontalView: false,
    cameraFov: 80,
    autoRotate: true,
    autoRotateSpeed: .7,
    viewIndicator: true
});

viewer3.add(panorama3);
viewer3.OrbitControls.noZoom = true;

const viewer4 = new PANOLENS.Viewer({
    container: pano4,
    controlBar: false,
    horizontalView: false,
    cameraFov: 80,
    autoRotate: true,
    autoRotateSpeed: .7,
    viewIndicator: true
});

viewer4.add(panorama4);
viewer4.OrbitControls.noZoom = true;