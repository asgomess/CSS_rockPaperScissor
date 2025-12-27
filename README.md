📘 README.md Section (Frontend Focus)
🕹️ Rock Paper Scissors: DOM Edition
A lightweight, interactive web game developed to demonstrate advanced DOM Manipulation and Asynchronous JavaScript.

🚀 Key Features
Programmatic UI Generation: The entire application structure (containers, players, buttons) is created via document.createElement, showcasing a deep understanding of the Document Object Model.

Asynchronous UX: Utilizes setTimeout to synchronize visual move reveals with the announcement of the winner, creating a more engaging "reveal" effect for the user.

Game Logic Engine: Implements a clean conditional logic system to determine winners between Player 1 and Player 2 based on randomized inputs.

Dynamic Asset Loading: Programmatically updates image sources (src) and CSS classes based on real-time game state.

🛠️ Tech Stack
Language: JavaScript (ES6+)

Styling Interface: Dynamic CSS Class Injection

Pattern: Event-Driven Programming

📂 Code Highlights
Winner Logic: A centralized determineWinner function that maps game rules to boolean logic.

Event Architecture: A robust click listener on the "PLAY ROUND" button that triggers the full game lifecycle: move generation, UI update, and result notification.
