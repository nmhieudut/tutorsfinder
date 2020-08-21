import axios from 'axios';
function getTutors() {
    return new Promise((resolve, reject) => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const data = [];
                data.push(res);
                resolve(data);
                console.log("Data:", data);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            })
    })
}
export default {
    getTutors
}