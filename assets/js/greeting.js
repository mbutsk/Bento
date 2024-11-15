// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

if (hour >= 23 || hour < 6) {
	document.getElementById('greetings').innerText = gree1.replace("$", name);
} else if (hour >= 6 && hour < 12) {
	document.getElementById('greetings').innerText = gree2.replace("$", name);
} else if (hour >= 12 && hour < 17) {
	document.getElementById('greetings').innerText = gree3.replace("$", name);
} else {
	document.getElementById('greetings').innerText = gree4.replace("$", name);
}
