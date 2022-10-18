import React from "react";

function MessageBox1({ text, setText, setShow }) {
  return (
    <div>
      <div>MessageBox1</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          id="userInput1"
          value={text.message}
          onChange={(e) => {
            setText({user:1, message: e.target.value});
          }}
          type="text"
        />
        <button
          type="submit"
          onClick={() => {
            setShow((last) => { return [...last, text] });
            setText({user:1, message: "" });
          }}
        >
          send
        </button>
      </form>
    </div>
  );
}

export default MessageBox1;
