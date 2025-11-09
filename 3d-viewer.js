/**
 * 3D Keyring Product Viewer
 * Interactive 360-degree rotation viewer using Three.js
 */

class KeyringViewer3D {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error('3D viewer container not found');
            return;
        }

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.keyring = null;
        this.controls = null;
        this.animationId = null;
        this.isUserInteracting = false;
        this.autoRotate = true;

        this.init();
    }

    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf7f7f7);

        // Camera setup
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        this.camera.position.set(0, 0, 5);

        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.container.appendChild(this.renderer.domElement);

        // Lighting
        this.setupLighting();

        // Create keyring
        this.createKeyring();

        // Controls
        this.setupControls();

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());

        // Start animation
        this.animate();

        // Auto-rotate timeout
        this.setupAutoRotate();
    }

    setupLighting() {
        // Ambient light for overall illumination
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        // Main directional light (key light)
        const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
        mainLight.position.set(5, 5, 5);
        mainLight.castShadow = true;
        mainLight.shadow.mapSize.width = 2048;
        mainLight.shadow.mapSize.height = 2048;
        this.scene.add(mainLight);

        // Fill light from the left
        const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
        fillLight.position.set(-5, 0, 5);
        this.scene.add(fillLight);

        // Rim light from behind
        const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
        rimLight.position.set(0, -5, -5);
        this.scene.add(rimLight);

        // Point lights for metallic highlights
        const pointLight1 = new THREE.PointLight(0xffd700, 0.5, 10);
        pointLight1.position.set(2, 2, 2);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 0.3, 10);
        pointLight2.position.set(-2, -2, 2);
        this.scene.add(pointLight2);
    }

    createKeyring() {
        // Create a group for the keyring
        this.keyring = new THREE.Group();

        // Main circular body (두께감 있는 원형)
        const bodyGeometry = new THREE.CylinderGeometry(1, 1, 0.15, 64);
        const bodyMaterial = new THREE.MeshStandardMaterial({
            color: 0xd4af37, // Gold color
            metalness: 0.9,
            roughness: 0.2,
            envMapIntensity: 1.5
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.rotation.x = Math.PI / 2;
        body.castShadow = true;
        body.receiveShadow = true;
        this.keyring.add(body);

        // Front embossed character (孔 for Confucius)
        const characterGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.1);
        const characterMaterial = new THREE.MeshStandardMaterial({
            color: 0x8B2635, // Burgundy red
            metalness: 0.3,
            roughness: 0.7
        });
        const character = new THREE.Mesh(characterGeometry, characterMaterial);
        character.position.z = 0.1;
        character.castShadow = true;
        this.keyring.add(character);

        // Add Chinese character text (孔)
        this.addTextToKeyring('孔', 0.1);

        // Decorative border ring
        const borderGeometry = new THREE.TorusGeometry(1.05, 0.03, 16, 64);
        const borderMaterial = new THREE.MeshStandardMaterial({
            color: 0xffd700, // Brighter gold
            metalness: 1,
            roughness: 0.1
        });
        const border = new THREE.Mesh(borderGeometry, borderMaterial);
        border.rotation.x = Math.PI / 2;
        this.keyring.add(border);

        // Keyring loop/hole at the top
        const loopGeometry = new THREE.TorusGeometry(0.2, 0.05, 16, 32);
        const loopMaterial = new THREE.MeshStandardMaterial({
            color: 0xc0c0c0, // Silver
            metalness: 0.95,
            roughness: 0.15
        });
        const loop = new THREE.Mesh(loopGeometry, loopMaterial);
        loop.position.set(0, 1.3, 0);
        loop.rotation.x = Math.PI / 2;
        loop.castShadow = true;
        this.keyring.add(loop);

        // Small connecting ring
        const connectorGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.15, 16);
        const connector = new THREE.Mesh(connectorGeometry, loopMaterial);
        connector.position.set(0, 1.1, 0);
        connector.castShadow = true;
        this.keyring.add(connector);

        // Back side engraving circle
        const backCircleGeometry = new THREE.TorusGeometry(0.7, 0.02, 16, 64);
        const backCircle = new THREE.Mesh(borderGeometry, borderMaterial);
        backCircle.position.z = -0.08;
        backCircle.rotation.x = Math.PI / 2;
        this.keyring.add(backCircle);

        this.scene.add(this.keyring);
    }

    addTextToKeyring(text, zPosition) {
        // Note: For production, you'd want to load a Chinese font using THREE.FontLoader
        // For now, we'll use a placeholder approach
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 256;
        canvas.height = 256;

        context.fillStyle = '#ffffff';
        context.font = 'bold 180px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, 128, 128);

        const texture = new THREE.CanvasTexture(canvas);
        const textMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0.9
        });

        const textGeometry = new THREE.PlaneGeometry(0.5, 0.5);
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.z = zPosition + 0.05;
        this.keyring.add(textMesh);
    }

    setupControls() {
        // Mouse/touch interaction for rotation
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        this.renderer.domElement.addEventListener('mousedown', (e) => {
            isDragging = true;
            this.isUserInteracting = true;
            this.autoRotate = false;
        });

        this.renderer.domElement.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaMove = {
                    x: e.offsetX - previousMousePosition.x,
                    y: e.offsetY - previousMousePosition.y
                };

                this.keyring.rotation.y += deltaMove.x * 0.01;
                this.keyring.rotation.x += deltaMove.y * 0.01;

                // Limit x rotation to prevent flipping
                this.keyring.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.keyring.rotation.x));
            }

            previousMousePosition = {
                x: e.offsetX,
                y: e.offsetY
            };
        });

        this.renderer.domElement.addEventListener('mouseup', () => {
            isDragging = false;
            this.isUserInteracting = false;
            // Resume auto-rotate after 2 seconds of inactivity
            setTimeout(() => {
                if (!this.isUserInteracting) {
                    this.autoRotate = true;
                }
            }, 2000);
        });

        // Touch events for mobile
        this.renderer.domElement.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                this.isUserInteracting = true;
                this.autoRotate = false;
                previousMousePosition = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                };
            }
        });

        this.renderer.domElement.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches.length === 1) {
                e.preventDefault();
                const deltaMove = {
                    x: e.touches[0].clientX - previousMousePosition.x,
                    y: e.touches[0].clientY - previousMousePosition.y
                };

                this.keyring.rotation.y += deltaMove.x * 0.01;
                this.keyring.rotation.x += deltaMove.y * 0.01;
                this.keyring.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.keyring.rotation.x));

                previousMousePosition = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                };
            }
        });

        this.renderer.domElement.addEventListener('touchend', () => {
            isDragging = false;
            this.isUserInteracting = false;
            setTimeout(() => {
                if (!this.isUserInteracting) {
                    this.autoRotate = true;
                }
            }, 2000);
        });

        // Mouse wheel zoom
        this.renderer.domElement.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY * 0.001;
            this.camera.position.z = Math.max(3, Math.min(8, this.camera.position.z + delta));
        });
    }

    setupAutoRotate() {
        // Auto-rotate by default
        this.autoRotate = true;
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());

        // Auto-rotate when not interacting
        if (this.autoRotate && this.keyring) {
            this.keyring.rotation.y += 0.005;
        }

        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }

    // Change keyring character (for different philosophers)
    changeCharacter(character) {
        // Remove old keyring
        if (this.keyring) {
            this.scene.remove(this.keyring);
        }

        // Create new keyring with different character
        this.createKeyring();

        // Update the character based on selection
        const characters = {
            'confucius': '孔',
            'laozi': '老',
            'buddha': '佛'
        };

        const colors = {
            'confucius': 0x8B2635, // Burgundy
            'laozi': 0x2c5f2d,     // Dark green
            'buddha': 0xd4af37     // Gold
        };

        // Update character display (would need to rebuild the mesh in production)
        console.log(`Switching to ${character}: ${characters[character]}`);
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.renderer) {
            this.renderer.dispose();
        }
    }
}

// Initialize viewer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the purchase page and Three.js is loaded
    if (typeof THREE !== 'undefined' && document.getElementById('viewer-3d')) {
        window.keyringViewer = new KeyringViewer3D('viewer-3d');
        console.log('✅ 3D Keyring Viewer initialized');
    }
});
