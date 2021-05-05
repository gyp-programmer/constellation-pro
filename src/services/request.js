import { axiosGet } from '../libs/request'

function getData(consName, type) {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: `/api/constellation/getAll?consName=${consName}&type=${type}`,
            success(data) {
                resolve(data.data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}

export {
    getData
}