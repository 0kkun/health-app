import axios from 'axios';

export const ApiGetTest = (URL:string):void => {
    axios
        .get(URL)
        .then((results) => {
            console.log(results.data);
        })
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
        });
};