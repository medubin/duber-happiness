import $ from "jquery";

export const getDays = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/days',
    })
}

export const createTemplate = (dayData) => {
    return $.ajax({
        method: 'POST',
        url: '/api/days',
        data: {
            day: {
                date: dayData.date,
                happiness: dayData.happiness
            }
        }
    })
}

