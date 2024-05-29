var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

const messages = [
    "Welcome to RipHub 2.0 - A Forum for Developers",
    "Explore, Share, and Learn from us",
    "RipHub 2.0 Is Still In Development!",
    "More Coming Soon!",
    "Enjoy Your Stay."
];

const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

function typeMessage(message, index) {
    if (index < message.length) {
        outputElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(() => typeMessage(message, index), 50);
    } else {
        setTimeout(() => clearInput(), 1000);
    }
}

function clearInput() {
    inputElement.innerHTML = '<span class="blinking-cursor">_</span>';
    setTimeout(() => startTyping(), 500);
}

function startTyping() {
    const currentMessage = messages.shift();
    outputElement.innerHTML = '';
    typeMessage(currentMessage, 0);
    messages.push(currentMessage);
}

startTyping();


}
