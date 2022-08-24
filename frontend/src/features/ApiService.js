import axios from 'axios'
import { getRealEstates, gotRealEstates, noRealEstates } from '../features/estateSlice'

const ApiService = () => async (dispatch) => {

    dispatch(getRealEstates())

    try {
        const response = await axios.get('castles')
        const data = response.data
        localStorage.setItem('REAL-ESTATE-DATA', JSON.stringify(data))
        dispatch(gotRealEstates(data))

    } catch (error) {
        console.error(error.response.data);

        dispatch(noRealEstates({ message: "No data retrieved!" }))
    }
}

export default ApiService;
