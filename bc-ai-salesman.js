// bc-ai-salesman.js

// Function to create and append the chatbot button
function createChatbotButton() {
  const chatbotButton = document.createElement("button");
  chatbotButton.textContent = "Chat AI-Salesman";
  chatbotButton.style.position = "fixed";
  chatbotButton.style.bottom = "20px";
  chatbotButton.style.right = "20px";
  chatbotButton.style.zIndex = "9999";
  document.body.appendChild(chatbotButton);

  chatbotButton.addEventListener("click", openChatUI);
}

// Function to open the chat application UI
function openChatUI() {
  // Replace this with your actual chat UI logic
  alert("Chat application UI should open here");
}

// Call the function to create the chatbot button when the script is loaded
createChatbotButton();
