import ROSLIB from "roslib";
import ROS3D from "roslib";
var ros = new ROSLIB.Ros({
  url: "ws://localhost:9090",
});
var viewer = new ROS3D.Viewer({
  divID: "webViewer",
  width: 800,
  height: 600,
  antialias: true,
  background: "#111111",
});
var tfClient = new ROSLIB.TFClient({
  ros: ros,
  angularThres: 0.01,
  transThres: 0.01,
  rate: 10.0,
  fixedFrame: "/os1_lidar",
});
var cloudClient = new ROS3D.PointCloud2({
  ros: ros,
  tfClient: tfClient,
  rootObject: viewer.scene,
  topic: "/os1_cloud_node/points",
  material: { size: 0.01, color: 0xeeeeee },
});

function Lidar() {
  return (
    <div>
      <h1>Jiwon</h1>
      <div id="webViewer"></div>
    </div>
  );
}

export default Lidar;
