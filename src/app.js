const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  // "Popcorn",
  // "Gemwoman",
  // "Bolt",
  // "Antwoman",
  // "Mask",
  // "Tiger",
  // "Captain",
  // "Catwoman",
  // "Fish",
  // "Hulk",
  // "Ninja",
  // "Black Cat",
  // "Volverine",
  // "Thor",
  // "Slayer",
  // "Vader",
  // "Slingo"
];

class Player {
  constructor(id, name, type) {
    // Progression 1: Create member variables and assign values
    this.id = id
    this.name = name
    this.type = type
    this.strength = this.getRandomStrength()
    this.image = "images/super-" + (id + 1) + ".png"
  }
  // getting random strength
  getRandomStrength = () => {
    let strength = Math.floor(Math.random() * 100);
    return strength
  };

  // getImage

  // Progression 2: Create a player for displaying
  view = () => {
    // Accumulate HTML template
    // Type your code here
    let player = document.createElement("p")
    player.classList.add("player")
    player.setAttribute("data-id", this.id)
    
    player.innerHTML = 
    `<img src="${this.image}">
    <div class="name">${this.name}</div>
    <div class="strength">${this.strength}</div>`

    return player;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here
    this.players = players.map((player, i) => {
      let type = i % 2 == 0 ? "hero" : "villain"
      return new Player (i, player, type)
    })
  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

// uncomment this part -- only after you complete progression 3
window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}
