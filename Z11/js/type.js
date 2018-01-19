// set up text to print, each item in array is new line
var aText = new Array(
"-5142.02 , -10333.76",
"-4132.67 , -4751.32",
"1942.44 , -89.52",
"-721.1 , -2731.02",
"",
"-5038.04 , -102.72",
"14021.45 , 4298.01",
"4769.58 , -2162.9",
"9364.66 , -6879.87",
"8717.4 , 8899.66",
"6875.92 , 5980.07",
"6654.19 , -15428.59",
"2802.19 , -899.37",
"",
"",
"",
"",
"8838.13 , -5085.86",
"-5148.29 , -10245.37",
"",
"",
"10203.25 , 5698.68",
"10559.83 , -3087.1",
"4716.6 , 5436.59",
"1452.52 , 6123.67",
"-5038.04 , -102.72",
"",
"",
"",
"13549.11 , -557.08",
"",
"-5522.5 , -15297.86",
"4192.68 , -5442.18",
"198.02 , -16421.64",
"-6151.77 , -17023.45",
"7087.76 , 167.46",
"-4835.31 , 3155.78",
"11114.02 , 8366.03",
"5016.62 , -10608.46",
"-933.86 , -10467.89",
"",
"",
"",
"",
"7408.35 , -10781.94",
"1269.1 , -5714.42",
"7934.71 , -12824.51",

);






var iSpeed = 25; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 25; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter();
