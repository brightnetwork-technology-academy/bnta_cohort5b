/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

//Type "node ArraysSolution.js" to run in terminal

 stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

 /**
  * Q1.
  * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
  */
    // push adds to the end of the array
    stations.push("King's Cross");
    console.log(stations);
 
 
 
 /**
  * Q2.
  * It doesn't go as far as Dundee either, so remove it from the start of the array.
  */

    //shift removes an element from the beginning of an array
    stations.shift();
    console.log(stations);
 
 
 
 /**
  * Q3.
  * How many stations are on the line?
  */
 
    stationCount = stations.length;
    console.log("There are " + stationCount + " stations.");
 
 
 
 /**
  * Q4.
  * Which station is the third stop?
  */
    // Index in JS begins with 0 for the first element
    thirdStation = stations[2];
    console.log("The third station is " + thirdStation);
 
 
 
 /**
  * Q5.
  * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
  */

    // First find the index of "North Berwick"
    const indexOfNorthBerwick=stations.indexOf("North Berwick");
    // Check the index
    console.log(indexOfNorthBerwick);
    stations[indexOfNorthBerwick]="Berwick-upon-Tweed";

    //  //Or you can simply select the index yourself 
    //  stations[1]="Berwick-upon-Tweed";

    console.log(stations);
 
 
 
 /**
  * Q6.
  * How did Leeds get on there? Better remove it.
  */

    // First find the index of Leeds in the stations array using indexOf
    const indexOfLeeds=stations.indexOf("Leeds");
    // Use splice to remove existing "Leeds" element from the array
    // The first argument in splice is the index and second argument is the number of elements
    stations.splice(indexOfLeeds,1);

    console.log(stations);
 
 
 
 /**
  * Q7.
  * We forgot about Darlington! Add it to the route between Newcastle and York.
  */

    // Using the form given as:
    // array.splice(index, number of elements, element, element);
    //where index is the index of element "York" and number of elements is zero in order to not remove anything
    const indexOfYork=stations.indexOf("York");
    stations.splice(indexOfYork,0,'Darlington');
    console.log(stations);
 
 
 
 /**
  * Q8.
  * Is Durham one of the stops?
  */
 
    stoppingAtDurham = stations.includes("Durham");
    console.log(stoppingAtDurham);
 
 
 /**
  * Q9.
  * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
  */

    if (stoppingAtDurham==true){
        console.log("Yay Durham")
    }else{
        console.log("Aww...")
    }