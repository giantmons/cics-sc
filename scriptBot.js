// Get elements
const chatbotContainer = document.getElementById("chatbot-container");
const chatbotMessages = document.getElementById("chatbot-messages");
const toggleChatbotButton = document.getElementById("toggle-chatbot");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Responses
const responses = {
  "hello": "Hello! How can I help you?",
  "hello cics": "Hello! How can I help you?",
  "hi": "Hi! How can I help you?",
  "how to pay for membership fee?": "Just click the payment button located at the top-right part of the webpage, this will direct you to payment page!",
  "how to pay for membership fee": "Just click the payment button located at the top-right part of the webpage, this will direct you to payment page!",
  "paano magbayad?": "Just click the payment button located at the top-right part of the webpage, this will direct you to payment page!",
  "paano magbayad": "Just click the payment button located at the top-right part of the webpage, this will direct you to payment page!",
  "courses you offer": "You can find information about our courses on the Academics page.",
  "saan pwede mag email": "You can email us at cicsscalangilan@g.batstate-u.edu.ph",
};

// Function to add a message to the chat window
function addMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user" : "bot");
    messageElement.innerText = message;
    chatbotMessages.appendChild(messageElement);
}

// Function to handle user input
function handleUserInput() {
  const userMessage = userInput.value.toLowerCase();
  addMessage("user", userMessage);

// Check if there is a response for the user's input
  if (responses.hasOwnProperty(userMessage)) {
    addMessage("chatbot", responses[userMessage]);
  } else {
    addMessage("chatbot", "I'm sorry, I don't have the answer to that. Please contact our support for more information.");
  }

  userInput.value = "";
}

// Function to toggle chatbot visibility
function toggleChatbot() {
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
      chatbotContainer.style.display = "block";
    } else {
      chatbotContainer.style.display = "none";
    }
  }
  
// Event listener for toggle button
toggleChatbotButton.addEventListener("click", toggleChatbot);
sendButton.addEventListener("click", handleUserInput);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleUserInput();
  }
});

// Function to handle Enter key press in the input field
function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleUserInput();
    }
}
