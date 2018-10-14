import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  showLoading: null,
  hideLoading: null
})

export const LoadingTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  visible: false
})

/* ------------- Selectors ------------- */

export const LoadingSelectors = {
  isVisible: state => state.loading.visible
}

/* ------------- Reducers ------------- */

const showLoading = (state, action) => {
  return state.set('visible', true)
}

const hideLoading = (state, action) => {
  return state.set('visible', false)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_LOADING]: showLoading,
  [Types.HIDE_LOADING]: hideLoading
})
