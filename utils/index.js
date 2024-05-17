// Capitalize first letter.
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Format options for Swedish date and time in en-US locale
export const formationTimestamp = (timeStamp) => {
    const date = new Date(timeStamp);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Stockholm',
        hour12: false
    };

    const formattedDate = date.toLocaleString("sv-SE", options);
    return formattedDate;
}