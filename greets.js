let userName = "Nagendra";
let currentHour = new Date().getHours();
let message = "";

if(currentHour < 12)
{
    message = 'Good Morning ${userName}!';
}
else if(currentHour < 17)
{
    message = "Good Afternoon ${userName}!";
}
else
{
    message = `Good Evening ${userName}!`;
}

console.log(message);