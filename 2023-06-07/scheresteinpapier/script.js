
class Game {
  constructor() {
    // Array der möglichen Auswahlmöglichkeiten
    this.choices = ["Scissors", "Stone", "Paper"];
    // Aktueller Rundenstand
    this.round = 0;
    // Anzahl der Siege des Spielers
    this.playerWins = 0;
    // Anzahl der Siege des Computers
    this.computerWins = 0;

    // Eventlistener für den Klick auf die Spielzug-Buttons und den "Play Again"-Button
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', this.handlePlayerMove.bind(this));
      });
      document.getElementById('play-again').addEventListener('click', () => {
        this.resetGame();
      });
    });
  }

  // Methode, um einen zufälligen Spielzug des Computers auszuwählen
  computerPlay() {
    return this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  // Methode, um eine Runde zu spielen und das Ergebnis zurückzugeben
  playRound(playerSelection, computerSelection) {
    // Umwandeln der Auswahl in Kleinbuchstaben für den Vergleich
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(playerSelection, computerSelection)
    // Überprüfen, ob es ein Unentschieden ist
    if(playerSelection === computerSelection) {
      return "It's a tie!";
    } else if(
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "stone" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "stone")
    ) {
      // Überprüfen, wer gewonnen hat
      this.playerWins++;
      this.output();
      return "You win!";
    } else {
      this.computerWins++;
      this.output();
      return "You lose!";
    }
  }

  // Methode zur Behandlung des Spielzug-Buttons des Spielers
  handlePlayerMove(event) {
    // wenn runde kleiner 3 ist
    console.log(this)
    if(this.round < 3) {
      // speichere id des gedrückten Elements in constante
      const playerSelection = event.target.id;
      console.log(playerSelection);
      console.log(event);
      // speichere zufällige wahl des computers in contante
      const computerSelection = this.computerPlay();
      // Ausgabe was Computer gewählt hat
      document.querySelector('#computer').textContent = "Computer chose " + computerSelection;
      // Rückgabewert von Methode playRound abspeichern
      const result = this.playRound(playerSelection, computerSelection);
      document.getElementById('result').textContent = result;

      // Runde um eines erhöhen & Ausgabe der Rundenanzahl
      this.round++;
      document.getElementById('round').innerHTML = "<strong>Round</strong> " + this.round + " of 3";

      if(this.round === 3) {
        document.querySelectorAll('.buttons button').forEach(button => {
          button.disabled = true;
        });
        document.getElementById('play-again').disabled = false;
        this.output();
      }
    }

  }

  // Methode zum Anzeigen des aktuellen Spielstands
  output() {
    document.getElementById('score').textContent = `Player: ${this.playerWins} | Computer: ${this.computerWins}`;
  }

  // Methode zum Zurücksetzen des Spiels
  resetGame() {
    // Zurücksetzen des Rundenstands und des Spielstands
    this.round = 0;
    this.playerWins = 0;
    this.computerWins = 0;
    document.querySelectorAll('.buttons button').forEach(button => {
      button.disabled = false;
    });
    document.querySelector('#play-again').disabled = true;
    document.querySelector('#result').textContent = "";
    document.querySelector('#round').textContent = "";
    this.output();
  }
}

// Initialisierung des Game-Objekts
const game = new Game();
