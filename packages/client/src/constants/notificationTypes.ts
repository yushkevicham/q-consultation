export const TEXT_NOTIFICATION = 'NOTIFICATION'
export const CONCLUSION_NOTIFICATION = 'CONCLUSION'
export const DIALOG_NOTIFICATION = 'DIALOG'
export const APPOINTMENT_NOTIFICATION = 'APPOINTMENT'
export const CLOSE_SESSION_NOTIFICATION = 'CLOSE_SESSION'

export type NotificationTypes =
  | typeof TEXT_NOTIFICATION
  | typeof CONCLUSION_NOTIFICATION
  | typeof DIALOG_NOTIFICATION
  | typeof APPOINTMENT_NOTIFICATION
  | typeof CLOSE_SESSION_NOTIFICATION
