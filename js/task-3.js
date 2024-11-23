// Function to sort users by the number of friends
const sortByDescendingFriendCount = (users) => {
    return users
        .toSorted((a, b) => b.friends.length - a.friends.length);
};

// Sample user data
const users = [
    {
        name: "Moore Hensley",
        friends: ["Sharron Pace"],
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"],
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        gender: "male"
    },
    {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"],
        gender: "female"
    },
    {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"],
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"],
        gender: "female"
    }
];

// Event listener for the button to sort users and display them
document.getElementById('sortButton').addEventListener('click', () => {
    const sortedUsers = sortByDescendingFriendCount(users);
    document.getElementById('result').textContent = JSON.stringify(sortedUsers, null, 2);
});
