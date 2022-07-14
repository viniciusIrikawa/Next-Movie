import { baseAPI, keyAPI } from '../../../lib/API_key'

export default async (req, res) => {

    const response = await fetch(`${baseAPI}/movie/${req.query.id}?api_key=${keyAPI}`)
    const data = await response.json();

    res.status(200).json({
        info: data
    })

}
