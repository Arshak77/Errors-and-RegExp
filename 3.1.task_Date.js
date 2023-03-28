function dayOfYear(diffInDays){
    const date1 = new Date('dayOfYearStart');
    const date2 = new Date('dayOfYearEnd');
    const diffInMilliseconds = date1 - date2;
    const diffInSeconds = diffInMilliseconds / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;
    return diffInDays
}
console.log(dayOfYear("12/13/2020"))

