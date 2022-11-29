let users = [
    {
        id: 1,
        name: "Diana Prince",
        alter_ego: "Wonder Woman",
        phone: 916542,
        email: "prince@justiceleage.dc"
    },
    {
        id: 2,
        name: "Bruce Wayne",
        alter_ego: "Batman",
        phone: 916542,
        email: "wayne@justiceleage.dc"
    },
    {
        id: 3,
        name: "Dinah Lance",
        alter_ego: "Black Canary",
        phone: 785235,
        email: "lance@justiceleage.dc"
    },
    {
        id: 4,
        name: "Clark Kent",
        alter_ego: "Superman",
        phone: 654786,
        email: "kent@justiceleage.dc"
    }
];

function getAllUsers() {
    return users;
}

function getUser(id) {
    const foundUser = users.filter(user => {
        return user.id === id
    });
    return foundUser;
}

function addUser(user) {
    users.push(user);
    return users;
}

module.exports = { getAllUsers, addUser, getUser };