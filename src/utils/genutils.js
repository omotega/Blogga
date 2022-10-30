function calculateReadingTime(body) {
    const readtime = Math.round(body.split(' ').length / 200);
    const readingTime = readtime < 1 ? `${readtime + 1} mins read` : `${readtime} mins read`
    return readingTime;
}

module.exports = {
    calculateReadingTime,
}