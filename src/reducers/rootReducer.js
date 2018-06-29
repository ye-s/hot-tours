import { combineReducers } from 'redux';
import { tourReducer } from './tourReducer';
import { dayPickerReducer } from './dayPickerReducer';

export default combineReducers({
    tourReducer,
    dayPickerReducer
});