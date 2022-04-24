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