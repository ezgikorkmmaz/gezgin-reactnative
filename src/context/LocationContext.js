import createDataContext from './createDataContext';
import _locationApi from '../components/_locationApi';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return {...state, currentLocation: action.payload};
        default:
            return state;
    }
};

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => (location) => {
    dispatch({type:'add_current_location', payload: location });
};

export const {Context, Provider} = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation},
    {recorging: false, location: [], currentLocation: _locationApi}
);