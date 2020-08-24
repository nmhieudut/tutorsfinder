import axios from 'axios';
function getTutors() {
    return new Promise((resolve, reject) => {
        axios
            .get('https://5f4229f8d4b4790016fd7741.mockapi.io/tutors')
            .then(res => {
                const data = [];
                data.push(res);
                resolve(data);
                //console.log("Data:", data);
            })
            .catch(error => {
                console.log(error);
                reject(error);
            })
    })
}
// function createTutors() {
//     return new Promise((resolve, reject) => {
//         axios
//             .post('https://5f4229f8d4b4790016fd7741.mockapi.io/tutors')
//             .then(res => {
//                 const data = [];
//                 data.push(res);
//                 resolve(data);
//                 console.log("Data:", data);
//             })
//             .catch(error => {
//                 console.log(error);
//                 reject(error);
//             })
//     })
// }
function deleteTutor(id) {
    return new Promise((resolve, reject) => {
        axios
            .delete(`https://5f4229f8d4b4790016fd7741.mockapi.io/tutors/${id}`)
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                console.log(error);
                reject(error);
            })
    })
}
export default {
    getTutors,
    deleteTutor
}