import { baseAPI, keyAPI } from '../../lib/API_key.js'

export default async (req, res) => {

    const response = await fetch(`${baseAPI}/search/movie?api_key=${keyAPI}&query=${req.query.q}`)
    const data = await response.json();

    res.status(200).json({
        list: data.results
    })

}
