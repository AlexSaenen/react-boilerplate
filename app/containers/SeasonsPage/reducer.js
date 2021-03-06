/*
 *
 * SeriesPage reducer
 *
 */

import { fromJS, Map } from 'immutable';
import {
  LOAD_SEASONS,
  LOAD_SEASONS_SUCCESS,
  LOAD_SEASONS_ERROR,
} from './constants';

const initialState = fromJS({
  seasons: false,
  loading: false,
  error: false,
});

function seasonsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SEASONS:
      return state
      .set('loading', true)
      .set('error', false)
      .set('seasons', false);
    case LOAD_SEASONS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('seasons', Map(
          action.payload.map(
            (season) => [season.path, ({ ...season })]
          )
        ));
    case LOAD_SEASONS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default seasonsPageReducer;
