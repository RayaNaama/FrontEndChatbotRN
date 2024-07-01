document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        const chatBox = document.getElementById('chat-box');
        
        // Display user message
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);
        
        // Clear the input
        document.getElementById('user-input').value = '';

        // Simulate a bot response
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = 'This is a bot response.';
        chatBox.appendChild(botMessage);

        // Scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

// Optional: handle Enter key to send message
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});
