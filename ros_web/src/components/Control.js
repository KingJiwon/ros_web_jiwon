function Control() {
  return (
    <div>
      <h1>Jiwon Ros Web</h1>
      <p>
        Connection status : <span id="status"></span>
      </p>
      <img
        src="http://localhost:8080/stream?topic=/usb_cam/image_raw"
        style={{ width: "100%", border: "1px dashed #555555" }}
        alt={"ROS"}
      />
    </div>
  );
}
export default Control;
