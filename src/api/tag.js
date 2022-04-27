import apiUrl from '../apiConfig'
import axios from 'axios'

export const getTagOutfits = (id) => {
    return axios(`${apiUrl}/tags/${id}`)
}
