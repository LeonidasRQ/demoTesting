const user = [
    {
        name: "Diana Prince",
        alterEgo: "Wonder Woman",
        phone: 916542,
        email: "prince@justiceleage.dc"
    },
    {
        name: "Bruce Wayne",
        alterEgo: "Batman",
        phone: 916542,
        email: "wayne@justiceleage.dc"
    },
    {
        name: "Dinah Lance",
        alterEgo: "Black Canary",
        phone: 785235,
        email: "lance@justiceleage.dc"
    },
    {
        name: "Clark Kent",
        alterEgo: "Superman",
        phone: 654786,
        email: "kent@justiceleage.dc"
    }
];

function getAllUsers() {
    return user;
}

module.exports = { getAllUsers };