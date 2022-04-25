import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllOutfits = () => {
    return axios(`${apiUrl}/outfits`)
}

// index user outfit function for a profile view
export const getAllUserOutfits = (userId) => {
    return axios(`${apiUrl}/outfits/user/${userId}`)
}

// show function
export const getOneOutfit = (outfitId) => {
    return axios(`${apiUrl}/outfits/${outfitId}`)
}

// POST -> create function
export const createOutfit = (user, newOutfit) => {
    return axios({
        url: `${apiUrl}/outfits`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { outfit: newOutfit }
    })
}

// PATCH -> update function
export const updateOutfit = (user, updatedOutfit) => {
    console.log('user', user)
    console.log('this is updatedOutfit', updatedOutfit)
    return axios({
        url: `${apiUrl}/outfits/${updatedOutfit._id}`,
        method: 'PUT',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { outfit: updatedOutfit }
    })
}

// DELETE -> remove function
export const removeOutfit = (user, outfitId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/outfits/${outfitId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}