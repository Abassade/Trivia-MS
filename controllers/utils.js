module.exports = function(date){
    
    const month = ['January', 'February', 'March',
     'April', 'May', 'June', 'July', 'August',
      'September', 'October',
       'November', 'December'];

       const month_index = date.getMonth();

       return date.getDate()+' '+month[month_index]+' '+date.getFullYear();
}