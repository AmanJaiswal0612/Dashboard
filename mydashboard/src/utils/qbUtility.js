import { notification } from 'antd';

export const showNotification = ({type,message}) => {
    notification[type]({
      message: type === 'success' ? 'Success' : 'Error',
      description: message,
    });
};