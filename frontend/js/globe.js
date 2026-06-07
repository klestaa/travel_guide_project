
function initializeGlobe() {
    const container = document.getElementById('globeContainer');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000010, 0.9);
    container.appendChild(renderer.domElement);

    camera.position.z = 2.5;

    // Earth mesh
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(
        'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'
    );
    const material = new THREE.MeshStandardMaterial({ map: earthTexture });
    globeEarth = new THREE.Mesh(geometry, material);
    scene.add(globeEarth);

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    // Atmosphere glow
    const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(1.05, 64, 64),
        new THREE.MeshBasicMaterial({ color: 0x4fa3ff, transparent: true, opacity: 0.01 })
    );
    scene.add(atmosphere);

    // Markers
    globeMarkers = new THREE.Group();
    scene.add(globeMarkers);
    addGlobeMarkers();

    // Raycaster for click detection
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    let mouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    renderer.domElement.addEventListener('mousedown', (e) => {
        mouseDown = true;
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
        if (mouseDown) {
            targetRotationY += (e.clientX - mouseX) * 0.01;
            targetRotationX += (e.clientY - mouseY) * 0.01;
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
    });

    window.addEventListener('mouseup', () => { mouseDown = false; });

    renderer.domElement.addEventListener('click', (event) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(globeMarkers.children);
        if (intersects.length) {
            const key = intersects[0].object.userData.key;
            if (key) selectAndDisplay(key);
        }
    });

    let targetZoom = camera.position.z;
    window.addEventListener('wheel', (e) => {
        targetZoom = Math.max(2, Math.min(10, targetZoom + e.deltaY * 0.005));
    });

    function animate() {
        animationId = requestAnimationFrame(animate);
        globeEarth.rotation.x += (targetRotationX - globeEarth.rotation.x) * 0.1;
        globeEarth.rotation.y += (targetRotationY - globeEarth.rotation.y) * 0.1;
        globeEarth.rotation.y += 0.0015;
        if (!mouseDown) targetRotationY += 0.0001;
        camera.position.z += (targetZoom - camera.position.z) * 0.1;
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    });
}

function positionFromLatLng(lat, lng, radius = 1.02) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

function addGlobeMarkers() {
    if (!globeMarkers) return;
    globeMarkers.clear();

    Object.entries(destinationsData).forEach(([key, destination]) => {
        const markerGeo = new THREE.SphereGeometry(0.02, 10, 10);
        const markerMat = new THREE.MeshBasicMaterial({ color: 0xff9afb });
        const marker = new THREE.Mesh(markerGeo, markerMat);
        const position = positionFromLatLng(destination.coordinates.lat, destination.coordinates.lng, 1.02);
        marker.position.copy(position);
        marker.userData.key = key;

        // Country label sprite
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.font = '50px Arial';
        ctx.fillText(destination.country, 10, 30);
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas) }));
        sprite.position.copy(position);
        sprite.scale.set(0.3, 0.15, 1);
        globeMarkers.add(sprite);
        globeMarkers.add(marker);
    });
}

function focusGlobeOnDestination(coords) {
    if (!globeMarkers || !globeEarth) return;
    globeEarth.rotation.y = -coords.lng * Math.PI / 180;
    globeEarth.rotation.x = coords.lat * Math.PI / 180 * 0.5;
    globeMarkers.children.forEach(marker => {
        if (marker.material && marker.material.color) {
            marker.material.color.set(marker.userData.key === currentDestination ? 0xffd6ff : 0xff9afb);
        }
    });
}
