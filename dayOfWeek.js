function dayOfWeek (n) {
    const day = n;

    let days = ['Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (day >= 1 && day <= 7) {
        console.log(days[n - 1]);
    } else {
        console.log('Invalid day!')
    }

}

dayOfWeek(11);