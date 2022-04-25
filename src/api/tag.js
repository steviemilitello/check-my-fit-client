import apiUrl from '../apiConfig'
import axios from 'axios'

// index outfits based on tag
export const getVintageOutfits = () => {
    return axios(`${apiUrl}/tags/vintage`)
}

export const getCasualOutfits = () => {
    return axios(`${apiUrl}/tags/casual`)
}

export const getGrungeOutfits = () => {
    return axios(`${apiUrl}/tags/grunge`)
}

export const getGothOutfits = () => {
    return axios(`${apiUrl}/tags/goth`)
}

export const getPunkOutfits = () => {
    return axios(`${apiUrl}/tags/punk`)
}

export const getBohoOutfits = () => {
    return axios(`${apiUrl}/tags/boho`)
}

export const getArtsyOutfits = () => {
    return axios(`${apiUrl}/tags/artsy`)
}

export const getDateNightOutfits = () => {
    return axios(`${apiUrl}/tags/datenight`)
}

export const getSummerLookOutfits = () => {
    return axios(`${apiUrl}/tags/summerlook`)
}

export const getSpringLookOutfits = () => {
    return axios(`${apiUrl}/tags/springlook`)
}

export const getFallLookOutfits = () => {
    return axios(`${apiUrl}/tags/falllook`)
}

export const getWinterLookOutfits = () => {
    return axios(`${apiUrl}/tags/winterlook`)
}

export const getWesternOutfits = () => {
    return axios(`${apiUrl}/tags/western`)
}

export const getSexyOutfits = () => {
    return axios(`${apiUrl}/tags/sexy`)
}

export const getSportyOutfits = () => {
    return axios(`${apiUrl}/tags/sporty`)
}

export const getFormalOutfits = () => {
    return axios(`${apiUrl}/tags/formal`)
}

export const getDayOutfits = () => {
    return axios(`${apiUrl}/tags/day`)
}

export const getEveningOutfits = () => {
    return axios(`${apiUrl}/tags/evening`)
}