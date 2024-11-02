const apiKey = "Your API Key"; // Replace with your actual API key

// Function to send user input to OpenAI and get a response
async function sendToGPT(inputText) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": inputText }]
        })
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
}

// Function to handle user input and display the bot's response
async function handleSend() {
    const userText = document.getElementById("user-input").value;
    const botResponse = await sendToGPT(userText);
    document.getElementById("bot-response").innerText = botResponse;
}
