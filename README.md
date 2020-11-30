# react-og-notifications

> Notification lib by OG Developer

[![NPM](https://img.shields.io/npm/v/react-og-notifications.svg)](https://www.npmjs.com/package/react-og-notifications) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-og-notifications

or

yarn add react-og-notifications
```

## Usage

```tsx
import React from 'react'

import Button from 'react-og-buttons'
import notification, { Grid as NotificationsGrid } from 'react-og-notifications'

import GlobalStyle from './styles'

const App = () => {
  function defaultNotification() {
    notification(
      'Message notificaction default',
      'default',
      'Notification default'
    )
  }

  function successNotification() {
    notification(
      'Message notificaction success',
      'success',
      'Notification success'
    )
  }

  function warningNotification() {
    notification(
      'Message notificaction warning',
      'warning',
      'Notification warning'
    )
  }

  function infoNotification() {
    notification('Message notificaction info', 'info', 'Notification info')
  }

  function errorNotification() {
    notification('Message notificaction error', 'error', 'Notification error')
  }

  return (
    <>
      <GlobalStyle />
      <NotificationsGrid />
      <div>
        <Button onClick={defaultNotification}>Notification</Button>
        <Button typeStyle='success' onClick={successNotification}>
          Success notification
        </Button>
        <Button backgroundColor='#40a3b9' onClick={infoNotification}>
          Info notification
        </Button>
        <Button typeStyle='warning' onClick={warningNotification}>
          Warning notification
        </Button>
        <Button typeStyle='danger' onClick={errorNotification}>
          Error notification
        </Button>
      </div>
    </>
  )
}

export default App
```

## License

MIT © [odenirdev](https://github.com/odenirdev)
