


    switch (new Date().getDay()) {

        case 0:
            exports.day = "Sunday";
            break;
        case 1:
        exports.day = "Monday";
            break;
        case 2:
        exports.day = "Tuesday";
            break;
        case 3:
        exports.day = "Wednesday";
            break;
        case 4:
        exports.day = "Thursday";
            break;
        case 5:
        exports.day = "Friday";
            break;
        case 6:
        exports.day = "Saturday";
            break;
    }

    switch(new Date().getMonth()){
     
        case 0:
        exports.month = "January";
        exports.num_month = 1;
        break;
        case 1:
        exports.month = "February";
        exports.num_month = 2;
        break;
        case 2:
        exports.month = "March";
        exports.num_month = 3;
        break;
        case 3:
        exports.month = "April";
        exports.num_month = 4;
        break;
        case 4:
        exports.month = "May";
        exports.num_month = 5;
        break;
        case 5:
        exports.month = "June";
        exports.num_month = 6;
        break;
        case 6:
        exports.month = "July";
        exports.num_month = 7;
        break;
        case 7:
        exports.month = "August";
        exports.num_month = 8;
        break;
        case 8:
        exports.month = "September";
        exports.num_month = 9;
        break;
        case 9:
        exports.month = "October";
        exports.num_month = 10;
        break;
        case 10:
        exports.month = "November";
        exports.num_month = 11;
        break;
        case 11:
        exports.month = "December";
        exports.num_month = 12;
        break;

    }
exports.date = new Date().getDate();

exports.year = new Date().getFullYear();
