import React from 'react'

export default function RootLayout({ 
    children,
    modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html>
        <body>
            {children}
            {modal}
            <div id='modal-root'/>
        </body>
    </html>
  )
}
