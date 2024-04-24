import axios from 'axios';

var muscle = 'biceps'
const getExercise = async () => {
    const config = {
        headers: {
            'X-Api-Key' : 'qh0vKtOGyRDfZSCiraUK+w==YQaTZmyUepvabflF'
        }
    }
    try {
        res = await axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, config)
        console.log(res.data);
    }
    catch (error) {
        console.log(error);
    }
}