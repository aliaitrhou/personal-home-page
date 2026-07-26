import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: "js" });
draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

interface LoadGLTFModelOptions {
  receiveShadow?: boolean;
  castShadow?: boolean;
}

export function loadGLTFModel(
  scene: THREE.Scene,
  glbPath: string,
  options: LoadGLTFModelOptions = { receiveShadow: true, castShadow: true },
): Promise<THREE.Group> {
  const { receiveShadow, castShadow } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco);

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "dog";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow ?? true;
        obj.castShadow = castShadow ?? true;
        scene.add(obj);

        obj.traverse(function (child) {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = castShadow ?? true;
            child.receiveShadow = receiveShadow ?? true;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      },
    );
  });
}
