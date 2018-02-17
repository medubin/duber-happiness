export function hashDays(days) {
    let dayHash = {};
    for(let day of days) {
        dayHash[day.date] = day.happiness;
    }
    return dayHash;
}

export function stringifyDate(date) {
    return date.toISOString().split('T')[0];
}