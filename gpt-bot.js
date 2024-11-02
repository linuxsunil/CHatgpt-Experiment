async function sendToGPT(inputText) {
    const player = GetPlayer(); // Access Storyline variables
    const apiKey = player.GetVar("API_Key"); // Retrieve API key from Storyline variable

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}` // Use the API key here
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": inputText }]
        })
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
}

async function handleSend() {
    const player = GetPlayer();
    const userText = player.GetVar("UserInput"); // Get user input from Storyline

    const botResponse = await sendToGPT(userText); // Call the sendToGPT function
    player.SetVar("BotResponse", botResponse); // Set response in Storyline variable
}
