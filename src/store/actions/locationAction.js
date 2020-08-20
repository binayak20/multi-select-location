import Axios from 'axios';
import * as Types from './types';

export const loadLocations = () => (dispatch) => {
	Axios.get('https://www.meteoblue.com/en/server/search/query3?query=tokyo')
		.then((res) => {
			dispatch({
				type: Types.LOAD_LOCATION,
				payload: {
					location: res.data,
				},
			});
		})
		.catch((error) => {
			console.log(error);
		});
};
