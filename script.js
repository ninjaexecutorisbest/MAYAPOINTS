const getPoints = (user) => {
    return parseInt(localStorage.getItem(`${user}_points`)) || 0;
};

const setPoints = (user, points) => {
    localStorage.setItem(`${user}_points`, points);
    document.getElementById(`${user}-points`).textContent = points;
};

const changePoints = (user, amount) => {
    let currentPoints = getPoints(user);
    currentPoints += amount;
    setPoints(user, currentPoints);
};

const resetPoints = () => {
    setPoints('sam', 0);
    setPoints('misha', 0);
};

window.onload = () => {
    setPoints('sam', getPoints('sam'));
    setPoints('misha', getPoints('misha'));
};
