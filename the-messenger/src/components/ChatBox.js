import React from 'react'

function ChatBox({show}) {
  return (
    <div>
      <div>ChatBox</div>
      <div id='chatView'>{show.map((item, index) => { return <div key={index}><span>{item.user}</span>{item.message}</div> })}</div>
    </div>
  )
}

export default ChatBox