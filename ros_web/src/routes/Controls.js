import ROSLIB from "roslib";
import Control from "../components/Control";
function Controls() {
  var ros = new ROSLIB.Ros({
    url: "ws://localhost:3030",
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
      <Control />
    </div>
  );
}

export default Controls;
