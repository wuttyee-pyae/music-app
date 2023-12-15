import { confirmDialog } from "primereact/confirmdialog";


export const confirmAlert = async (title: string, ques: string) => {
    // try {
        console.log("-- confirm alert service --- ")
        confirmDialog({
            message: ques,
            header: title,
            icon: 'pi pi-exclamation-triangle',
            accept: () => { },
            reject: () => { }
        });
        return null
    // } catch (error) {
    //     // Handle the error here
    //     return Promise.reject(error);
    // }
};