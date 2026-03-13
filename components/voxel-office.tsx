import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { loadGLTFModel } from "../lib/model";
import { OfficeSpinner, OfficeContainer } from "./voxel-office-loader";

const VoxelOffice: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const refRenderer = useRef<THREE.WebGLRenderer>(null);

  const urlDogGLB = "/3d_obj/office.glb";

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      renderer.setSize(scW, scH);
    }
  }, []);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;

      const scene = new THREE.Scene();

      const target = new THREE.Vector3(-0.5, 0.3, 0);
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI),
      );

      const scale = scH * 0.0062 + 1.2;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 2.0; // Adjust speed of rotation
      controls.target = target;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      let req: number | null = null;

      const animate = () => {
        req = requestAnimationFrame(animate);

        controls.update();
        renderer.render(scene, camera);
      };

      loadGLTFModel(scene, urlDogGLB, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      return () => {
        if (req !== null) {
          cancelAnimationFrame(req);
        }
        controls.dispose();
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <OfficeContainer ref={refContainer}>
      {loading && <OfficeSpinner />}
    </OfficeContainer>
  );
};

export default VoxelOffice;
