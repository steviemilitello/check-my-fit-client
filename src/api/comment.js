import apiUrl from '../apiConfig'
import axios from 'axios'

// POST -> create function
export const createComment = (user, newComment) => {
    return axios({
        url: `${apiUrl}/comments/${outfitId}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { comment: newComment }

    })
}

// DELETE -> remove function
export const removeComment = (user, outfitId, commId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/delete/${outfitId}/${commId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}