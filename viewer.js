window.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('renderCanvas');
    const engine = new BABYLON.Engine(canvas, true);
  
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
  
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
  
    // Ganti model path di sini
    const modelPath = "assets/";
    const modelName = "model.obj"; // bisa diganti ke "model.obj"
  
    BABYLON.SceneLoader.Append(modelPath, modelName, scene, function () {
      scene.createDefaultCameraOrLight(true, true, true);
    }, null, function (scene, message) {
      console.error("Error loading model:", message);
    });
  
    engine.runRenderLoop(function () {
      scene.render();
    });
  
    window.addEventListener('resize', function () {
      engine.resize();
    });
  });
  