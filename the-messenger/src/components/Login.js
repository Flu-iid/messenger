import React from 'react'

function Login() {
  return (
    <div>
        <form onSubmit={(e) => { e.preventDefault() }}>
            <label htmlFor="user">user</label>
            <input id="user" type="text" minLength={"3"}/>
            <label htmlFor="pass">pass</label>
            <input id='pass' type="email" />
            <button type="submit">login</button>
        </form>
    </div>
  )
}

export default Login