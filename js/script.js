const joy = document.querySelector(".joy");
const love = document.querySelector(".love");
const fear = document.querySelector(".fear");
const hate = document.querySelector(".hate");

var modal;

//Script for the modal
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.modal');
    modal = M.Modal.init(elem);
    console.log(modal);
  });

//Adding Moods to the database

joy.addEventListener('click', (e) => {

    mood = e.target.getAttribute("data-mood");
   saveMood(mood);
   modal.open();
    })

love.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood");
   saveMood(mood);
   modal.open();
    })

fear.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood");
   saveMood(mood);
   modal.open();
    })

hate.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood");
   saveMood(mood);
   modal.open();
    })

//Function to save selected mood
function saveMood(mood){
    db.collection('moods').doc().set({
        emotion: mood,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
       })
       .then( () => {
        console.log("saved")
       })
}


let currentDate = new Date().getTime();
let timePeriod = new Date(currentDate - 3600000);
console.log(timePeriod.toString());


function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

function getMoods(){
var currentMoodContainer = document.querySelector("#currentMoodContainer")
    db.collection("moods").where("createdAt", ">=", timePeriod)
    .onSnapshot((querySnapshot) => {
        var currentMoods = [];
        querySnapshot.forEach((doc) => {
            currentMoods.push(doc.data().emotion);
        });
        var mostCommon = mode(currentMoods);
        if(mostCommon == "joy"){
            console.log("current mood is joy")
            currentMoodContainer.innerHTML = `<img class="buildingMood joy" data-mood="joy" src="/publicMoodNew/assets/joy.png" alt="" width="20%">`
        }
    
        if(mostCommon == "love"){
            console.log("current mood is love")
            currentMoodContainer.innerHTML = `<img class="buildingMood joy" data-mood="joy" src="/publicMoodNew/assets/love.png" alt="" width="20%">`
        }
    
        if(mostCommon == "fear"){
            console.log("current mood is fear")
            currentMoodContainer.innerHTML = `<img class="buildingMood joy" data-mood="joy" src="/publicMoodNew/assets/fear.png" alt="" width="20%">`
        }
    
        if(mostCommon == "hate"){
            console.log("current mood is hate")
            currentMoodContainer.innerHTML = `<img class="buildingMood joy" data-mood="joy" src="/publicMoodNew/assets/hate.png" alt="" width="20%">`
        }
    });

   

}

getMoods();

