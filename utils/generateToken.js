const generateToken = () => {
    const max = 50000
    const min = 10000
    return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = generateToken;