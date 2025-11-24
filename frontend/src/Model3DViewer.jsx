import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '@google/model-viewer';

const Model3DViewer = ({ modelPath, alt = "3D Furniture Model", className = "" }) => {
  useEffect(() => {
    // Ensure model-viewer is registered
    if (!customElements.get('model-viewer')) {
      import('@google/model-viewer');
    }
  }, []);

  return (
    <motion.div 
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <style>
        {`
          model-viewer::part(default-progress-bar) {
            display: none;
          }
        `}
      </style>
      <model-viewer
        src={modelPath}
        alt={alt}
        auto-rotate
        camera-controls
        rotation-per-second="30deg"
        camera-orbit="0deg 75deg 105%"
        min-camera-orbit="auto 0deg auto"
        max-camera-orbit="auto 180deg auto"
        interaction-prompt="none"
        shadow-intensity="1"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '0.5rem',
          background: 'transparent'
        }}
      />
    </motion.div>
  );
};

export default Model3DViewer;