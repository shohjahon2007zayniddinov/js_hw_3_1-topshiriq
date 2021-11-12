let enter = +prompt('Son kiriting men uni toq yoki juftligini aytaman')
while (enter == 0 || isNaN(enter)) {
    enter = +prompt('Iltimos Natural son kiriting');
}
if (enter % 2 == 0) {
    alert('Siz kiritgan son juft : '  + enter);
} 
else if (enter % 2 == 1) {
    alert('Siz kiritgan son toq : ' + enter);
}