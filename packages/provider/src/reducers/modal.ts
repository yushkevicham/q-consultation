import * as Types from '../actions'

export type ModalReducer = {
  [T in Types.ModalType]: boolean
} & {
  providerId?: QBUser['id']
  clientId?: QBUser['id']
  appointmentId?: QBAppointment['_id']
  file?: File
}

const initialState: ModalReducer = {
  appointmentId: undefined,
  AppointmentActionModal: false,
  AssignModal: false,
  ConclusionModal: false,
  EditNotesModal: false,
  FinishModal: false,
  LogoutModal: false,
  ShareLinkModal: false,
  SkipModal: false,
  LanguageModal: false,
  CameraModal: false,
  AppointmentDetailsModal: false,
  SaveRecordModal: false,
  CreateAppointmentModal: false,
}

type ModalAction =
  | Types.ModalAction
  | Types.LogoutSuccessAction
  | Types.QBInitFailureAction

export default (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case Types.TOGGLE_SHOW_MODAL:
      return {
        ...state,
        [action.payload.modal]: !state[action.payload.modal],
        providerId: action.payload.providerId,
        clientId: action.payload.clientId,
        appointmentId: action.payload.appointmentId,
        file: action.payload.file,
      }
    case Types.LOGOUT_SUCCESS:
    case Types.QB_INIT_FAILURE:
      return initialState
    default:
      return state
  }
}
