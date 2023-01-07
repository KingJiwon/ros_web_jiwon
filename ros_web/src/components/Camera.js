function Camera() {
  return (
    <div>
      <div id="stereo_img">
        <img
          src="http://localhost:8080/stream?topic=/usb_cam/image_raw"
          style={{ width: "30%", border: "1px solid" }}
          alt={"ROS"}
        />
        <img
          src="http://localhost:8080/stream?topic=/usb_cam/image_raw"
          style={{ width: "30%", border: "1px solid" }}
          alt={"ROS"}
        />
      </div>
      <div id="after_img">
        <img
          src="http://localhost:8080/stream?topic=/semantic_color"
          style={{ width: "30%", border: "1px solid" }}
          alt={"ROS"}
        />
      </div>
    </div>
  );
}
export default Camera;
