import { ToastContainer, ToastContent, ToastOptions, toast } from "react-toastify";

export const NotificationType = [
  "info",
  "success",
  "warning",
  "error",
] as const;

export const notify = (component: ToastContent<unknown>, options?: ToastOptions<object>) => toast(component, {
  position: "top-right",
  ...options
});

const ToastComponent = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export const NotificationComponent = ({
  message
}:{message: string}) => {
  return (
    <div className="p-4 flex items-center justify-center">
      <h1>{message}</h1>
    </div>
  )
}


export default ToastComponent;