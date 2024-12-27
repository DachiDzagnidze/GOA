//! 1. && (AND ოპერატორი)
//! 2. || (OR ოპერატორი)

// 1. "გადავიდეთ თუ არა ტესტში"
// some არის მეთოდი რომელიც გამოიყენება მასივში
// და ის აბრუნებს true-ს თუ ერთ ელემენტიც 
// აკმაყოფილებს მოცემულ პირობას
function shouldTakeTest(scores, authors) {
    const result = scores.some(score => score >= 50) || authors.includes("teacher");
    console.log("Should take the test: " + result);
    return result;
}

// 2. "შეგვიძლია თუ არა გასვლა გარეთ"
function canGoOutside(weather, timeAvailable, ready) {
    const result = (weather === "good" || timeAvailable > 0) && ready;
    console.log("Can go outside: " + result);
    return result;
}

// 3. "გადავდგათ თუ არა ნაბიჯი"
function shouldStepForward(barrier, spaceAvailable, signal) {
    const result = (!barrier && spaceAvailable) || signal === "yes";
    console.log("Should step forward: " + result);
    return result;
}

// 4. "უნდა ავიღოთ თუ არა ნივთი"
function shouldPickUpItem(itemAvailable, allowedToTake, othersDontNeed) {
    const result = (itemAvailable && allowedToTake) || othersDontNeed;
    console.log("Should pick up item: " + result);
    return result;
}

// 5. "უნდა გავიხსენოთ თუ არა ინფორმაცია"
function shouldRecallInfo(taskRelevant, infoNeeded, timeAvailable) {
    const result = (taskRelevant || infoNeeded) && timeAvailable;
    console.log("Should recall info: " + result);
    return result;
}

// 6. "უნდა დავიძინოთ თუ არა"
function shouldGoToSleep(isLate, isTired, wakeUpEarly, lightsOff) {
    const result = (isLate && isTired) || (wakeUpEarly && lightsOff);
    console.log("Should go to sleep: " + result);
    return result;
}

// 7. "უნდა წავიდეთ თუ არა წვეულებაზე"
function shouldGoToParty(friendsAgreed, noWorkTomorrow, partyNearby) {
    const result = (friendsAgreed && noWorkTomorrow) || partyNearby;
    console.log("Should go to party: " + result);
    return result;
}

// 8. "უნდა დავრჩეთ თუ არა სახლში"
function shouldStayHome(weather, noPlans) {
    const result = (weather === "rainy" || weather === "snowy") && noPlans;
    console.log("Should stay home: " + result);
    return result;
}

// 9. "უნდა გავიდეთ სირბილზე თუ არა"
function shouldGoRunning(weather, shoesAvailable, friendReady) {
    const result = (weather === "dry" && shoesAvailable) || friendReady;
    console.log("Should go running: " + result);
    return result;
}

// 10. "უნდა ვუყუროთ თუ არა ფეხბურთს"
function shouldWatchFootball(day, noTasks, favoriteTeamPlaying) {
    const result = ((day === "Saturday" || day === "Sunday") && noTasks) || favoriteTeamPlaying;
    console.log("Should watch football: " + result);
    return result;
}
