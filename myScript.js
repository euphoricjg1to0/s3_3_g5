const virtualPet = {
    name: "Fluffy",
    type: "Hamster",
    age: 1,
    happiness: 50,
    hunger: 50,
    evolve: function() {
        if (this.happiness > 80 && this.hunger < 20) {
            this.type = "Fire Hamster";
            this.name = "Blaze";
        } else if (this.happiness < 30 && this.hunger > 70) {
            this.type = "Giant Hamster";
            this.name = "Shadow";
        }
        this.updateImage();
    },
    feed: function(amount) {
        this.hunger -= amount;
        this.happiness += amount / 2;
        this.updateStatus();
    },
    play: function(time) {
        this.happiness += time;
        this.hunger += time / 2;
        this.updateStatus();
    },
    powerUp: function() {
        this.age += 1;
        this.happiness -= 10;
        this.hunger += 10;
        this.evolve();
        this.updateStatus();
    },
    updateStatus: function() {
        document.getElementById('petStatus').innerHTML = `
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Type:</strong> ${this.type}</p>
            <p><strong>Age:</strong> ${this.age}</p>
            <p><strong>Happiness:</strong> ${this.happiness}</p>
            <p><strong>Hunger:</strong> ${this.hunger}</p>
        `;
    },
    updateImage: function() {
        let imageUrl = '';
        if (this.type === "Fire Hamster") {
            imageUrl = 'images/Fire_hamster.jpg';  // Replace with the actual image URL
        } else if (this.type === "Giant Hamster") {
            imageUrl = 'images/Giant_hamster.jpg';  // Replace with the actual image URL
        } else {
            imageUrl = 'images/hamster.webp';  // Replace with the default dragon image URL
        }
        document.getElementById('petImage').innerHTML = `<img src="${imageUrl}" alt="${this.type}">`;
    }
};

function feedPet() {
    virtualPet.feed(20);
}

function playWithPet() {
    virtualPet.play(30);
}

function power() {
    virtualPet.powerUp();
}

// Initial display of the pet's status and image
virtualPet.updateStatus();
virtualPet.updateImage();

