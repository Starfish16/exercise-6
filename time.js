function time(hours)
{
  // TODO: Make this return "Morning", "Afternoon", "Evening" or "Night",
  //       depending on the hour of the day (`hours` is in the range 0 to 23)
  var day = new Date();
  var hours = day.getHours();
  var text;
  
  if (hours => 0 && hours > 21 && hours < 24) {
    text = 'Night';
 } else if (hours => 5 && hours < 12 ) {
    text = 'Morning';
 } else if (hours => 12 && hours < 17) {
    text = 'Afternoon';
 } else if (hours => 17 && hours < 22 ) {
    text = 'Evening';
 } return text;
}

  if (typeof module !== "undefined") {
    module.exports = time;
} else {
    document.write(time(new Date().getHours()));
}
