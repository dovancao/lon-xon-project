import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import I18n from '../I18n'
import Const from '../Config/Const'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  notifyInfo: ['message', 'options'],
  notifySuccess: ['message', 'options'],
  notifyWarning: ['message', 'options'],
  notifyError: ['message', 'options']
})

export const LoadingTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  id: -1,
  type: null,
  title: null,
  message: null,
  closeInterval: Const.NOTIFIER_CLOSE_INTERVAL,
  tapToCloseEnabled: true
})

/* ------------- Selectors ------------- */

export const NotifierSelectors = {
}

/* ------------- Reducers ------------- */

let globalId = 0

const createState = (type, title, message, options) => {
  const id = globalId++

  let closeInterval = Const.NOTIFIER_CLOSE_INTERVAL
  let tapToCloseEnabled = true
  if (options) {
    closeInterval = options.closeInterval !== undefined ? options.closeInterval : closeInterval
    tapToCloseEnabled = options.tapToCloseEnabled !== undefined ? options.tapToCloseEnabled : tapToCloseEnabled
  }

  return { id, type, title, message, closeInterval, tapToCloseEnabled }
}

const notifyInfo = (state, action) => {
  const { message, options } = action

  return state.merge(createState('info', I18n.t('title_info'), message, options))
}

const notifySuccess = (state, action) => {
  const { message, options } = action

  return state.merge(createState('success', I18n.t('title_success'), message, options))
}

const notifyWarning = (state, action) => {
  const { message, options } = action

  return state.merge(createState('warn', I18n.t('title_warning'), message, options))
}

const notifyError = (state, action) => {
  const { message, options } = action

  return state.merge(createState('error', I18n.t('title_error'), message, options))
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.NOTIFY_INFO]: notifyInfo,
  [Types.NOTIFY_SUCCESS]: notifySuccess,
  [Types.NOTIFY_WARNING]: notifyWarning,
  [Types.NOTIFY_ERROR]: notifyError
})
