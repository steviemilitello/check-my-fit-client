import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllOutfits = () => {
    return axios(`${apiUrl}/outfits`)
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
        data: { place: newOutfit }
    })
}