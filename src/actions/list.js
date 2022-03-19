import {ADD_SEASON, REMOVE_SEASON, MARK_AS_WATCHED} from './action.types';

export const addSeason = season => ({
  type: ADD_SEASON,
  payload: season,
});

export const removeSeason = id => ({
  type: REMOVE_SEASON,
  payload: id,
});

export const markSeason = id => ({
  type: MARK_AS_WATCHED,
  payload: id,
});
