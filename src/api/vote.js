import apiUrl from '../apiConfig'
import axios from 'axios'

// POST -> create function
export const createVote = (user, outfitId, vote) => {
    console.log("user, outfitId, vote", user, outfitId, vote);
    return axios({
        url: `${apiUrl}/vote/${outfitId}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { vote: { vote: vote } }

    })
}