import { selector } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from "../atoms/atoms";

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get})=>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messaginAtomCount = get(messagingAtom);

        return networkAtomCount+jobsAtomCount+notificationAtomCount+messaginAtomCount
        
    }
})