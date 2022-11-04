function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
        </li>
    `
}

let delay = -0.4
function createCard(date, day, games) {
    delay = delay + 1
    return `
        <div class="card" style="animation-delay ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('.cards').innerHTML =
    createCard("21/11", "segunda", createGame("england", "07:00", "iran") +
                                     createGame("senegal", "13:00", "netherlands") +
                                     createGame("us", "16:00", "wales")
    ) +
    createCard("22/11", "sábado", createGame("brazil", "07:00", "cameroon") +
                                    createGame("wales", "13:00", "netherlands") +
                                    createGame("us", "16:00", "iran")
    
    ) +
    createCard("22/11", "sábado", createGame("brazil", "07:00", "cameroon") +
                                    createGame("wales", "13:00", "netherlands") +
                                    createGame("us", "16:00", "iran")
    
    ) +
    createCard("22/11", "sábado", createGame("brazil", "07:00", "cameroon") +
                                    createGame("wales", "13:00", "netherlands") +
                                    createGame("us", "16:00", "iran")
    
    )