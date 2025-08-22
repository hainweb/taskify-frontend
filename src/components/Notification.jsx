function Notification({ message, type }) {
  return (
    <div
      className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white ${
        type === "error" ? "bg-red-500" : "bg-green-500"
      }`}
    >
      {message}
    </div>
  );
}
export default Notification;
