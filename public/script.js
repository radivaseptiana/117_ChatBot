const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

const messages = [];

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  const content = document.createElement("div");
  content.classList.add("message-content");
  content.textContent = text;
  message.appendChild(content);
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
  return content;
}

