import React from 'react';
import { askForPermissionToReceiveNotifications} from '../service/push-notifications';

const NotificationButton = () => (
    <button onClick={askForPermissionToReceiveNotifications}>
        Clique aqui para receber notificações
    </button>
);

export default NotificationButton; 