let value;
const now=new Date();
const date1=new Date("3-3-1993 08:00:00");
const date2=new Date("september 19 1993");
const date3=new Date("9/19/1993");
value=date1;
value=date2;
value=date3;
value=date1.getDay();
value=date1.getMonth();
value=date1.getDate();

value=date1.getHours();
date1.setMonth(7);

console.log(value);