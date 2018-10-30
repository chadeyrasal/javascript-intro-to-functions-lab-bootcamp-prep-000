function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

var uppercase = 'HELLO'
var lowercase = 'hello'

function logShout(uppercase) {
  console.log(uppercase)
}

function logWhisper(lowercase) {
  console.log(lowercase);
}

function sayHiToGrandma(string) {
  if (string === 'hello'){
    return `I can\'t hear you!`
  } else if (string === 'HELLO') {
    return `YES INDEED!`
  } else if (string === 'I love you, Grandma.') {
    return `I love you, too.`
  }
}
