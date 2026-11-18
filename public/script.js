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

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = userInput.value.trim();
  if (!message) {
    return;
  }

  // ========================
  // Tampilkan pesan user
  // ========================
  addMessage(message, "user");
  // Simpan pesan user
  messages.push({
    role: "user",
    content: message,
  });
  // Kosongkan input
  userInput.value = "";
  // Disable input sementara
  userInput.disabled = true;
  const button = chatForm.querySelector("button");
  button.disabled = true;
  button.textContent = "Menunggu...";

  // ========================
  // Buat bubble AI kosong
  // ========================
  