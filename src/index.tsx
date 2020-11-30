import ReactNotification, { store } from 'react-notifications-component'

import 'react-notifications-component/dist/theme.css'

const Index = (message: string, type?: string, title?: string) => {
  switch (type) {
    case 'success':
      store.addNotification({
        title,
        message,
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
      break

    case 'info':
      store.addNotification({
        title,
        message,
        type: 'info',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
      break

    case 'warning':
      store.addNotification({
        title,
        message,
        type: 'warning',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
      break

    case 'error':
      store.addNotification({
        title,
        message,
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
      break

    default:
      store.addNotification({
        title,
        message,
        type: 'default',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      })
      break
  }
}

export default Index

export { ReactNotification as Grid }
