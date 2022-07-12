import { keyAPI, baseAPI } from '../../lib/API_key.js'


export default async (req, res) => {

    const response = await fetch(`${baseAPI}/trending/movie/week?api_key=${keyAPI}`)
    const data = await response.json();

    res.status(200).json({
        list: data.results  
    });

} 