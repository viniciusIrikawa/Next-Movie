import { baseAPI, keyAPI } from '../../lib/API_key.js'

export default async (req, res) => {

    let movie = req.params.q

    const response = await fetch(`${baseAPI}/search/movie?api_key=${keyAPI}&query=${movie}`)
    const data = await response.json();

    res.status(200).json({
        list: data.results
    })

}