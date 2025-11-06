/**
 * 3D Model Viewer for Confucius Statue
 * Uses model-viewer web component for GLB rendering
 */

class Model3DViewer {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Load model-viewer library dynamically
        this.loadModelViewerScript();

        // Initialize 3D model viewer once library is loaded
        setTimeout(() => {
            this.initializeViewer();
        }, 1000);
    }

    loadModelViewerScript() {
        if (!document.querySelector('script[src*="model-viewer"]')) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js';
            document.head.appendChild(script);
        }
    }

    initializeViewer() {
        const viewer = document.querySelector('#confucius-3d-model');
        if (!viewer) return;

        // Add interaction handlers
        viewer.addEventListener('load', () => {
            console.log('3D model loaded successfully');
        });

        viewer.addEventListener('error', (event) => {
            console.error('Error loading 3D model:', event);
        });
    }
}

// Initialize viewer
if (typeof window !== 'undefined') {
    window.model3DViewer = new Model3DViewer();
}
