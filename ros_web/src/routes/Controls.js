import ROSLIB from "roslib";
import Camera from "../components/Camera";
function Controls() {
  var ros = new ROSLIB.Ros({
    url: "ws://localhost:9090",
  });
  ros.on("connection", function () {
    document.getElementById("status").innerHTML = "Connected";
  });

  ros.on("error", function (error) {
    document.getElementById("status").innerHTML = "Error";
  });

  ros.on("close", function () {
    document.getElementById("status").innerHTML = "Closed";
  });

  return (
    <div>
      <h1>Jiwon Ros Web</h1>
      <p>
        Connection status : <span id="status"></span>
      </p>
      <Camera />
    </div>
  );
}

export default Controls;
