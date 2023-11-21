import toast from "react-hot-toast";

const notifyError = (message) =>
  toast.error(message, {
    duration: 6000,
    style: {
      backgroundColor: "rgb(220 38 38)",
      color: "#FFFFFF",
    },
    iconTheme: {
      primary: "#FFFFFF",
      secondary: "rgb(220 38 38)",
    },
  });

const notifySuccess = (message) =>
  toast.success(message, {
    duration: 3000,
    style: {
      backgroundColor: "#FFFFFF",
      color: "rgb(0 0 0)",
    },
    iconTheme: {
      primary: "rgb(0 0 0)",
      secondary: "#FFFFFF",
    },
  });

export { notifyError, notifySuccess };
