"use strict";

const getWeekends = (format) => {
    const shortweekends = ['sat', 'sun'];
    const longweekends = ['saturday', 'sunday'];
    
    if (format === 'short') {
        return shortweekends;
    } 
     return longweekends;
};

console.log(getWeekends('short'));