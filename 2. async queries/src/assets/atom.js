import axios from "axios";
import { atom, selector } from "recoil";

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: selector({
        key: "notificationSelector",    
        get: async () => {
            // sleeping the thread for 5 seconds to observe the white screen 
            await new Promise(r => setTimeout(r, 5000))
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

export const notificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notificationsAtom);
        return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messaging

    }
})

