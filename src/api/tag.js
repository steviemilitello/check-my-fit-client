import apiUrl from '../apiConfig'
import axios from 'axios'

// index user outfit function for a profile view
export const getCasualOutfits = () => {
    return axios(`${apiUrl}/tags/casual`)
}