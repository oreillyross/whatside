const NOTIFY_TIME = 1500;

export const useNotifyHook = () => {
    const clearNotification = () => {
      setTimeout(() => {
        // TODO: Dispatch action to clear notification message
      }, NOTIFY_TIME);
    };
  
    const notifyUser = (message, isError = false) => {
      // TODO: Dispatch action to enable notification message
      clearNotification();
    };
  
    return { notifyUser };
  };