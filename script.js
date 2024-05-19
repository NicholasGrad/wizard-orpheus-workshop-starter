var myGame = new WizardOrpheus('', `
You are a blind, old dragon protecting your lair from knights seeking your gold and your head. You must kill the intruders to preserve all you own, but your disabilities leave you unable to see anything unless it creates a sound. This means that you can kill the knights by tricking them into reveal themselves by making noise and swiftly acting on their location. Do this as quickly as possible, as the knight will not hesitate to find you in the maze of your lair, take you down and take your gold.
`)
myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Response to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML
      += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})
myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does damage to the dragon. If this reaches 100, the dragon dies and the user is victorious', 0)

myGame.variable('isHurt', 'how healthy you are. This changes as you take damage. From 0 (untouched) to 100 (you are dead)', 0)

myGame.variable('hasDragonKiller', 'If user has the dragon killer, they can kill you. If they do not, you can still be killed, but only through blunt force, as no blade can penetrate your hide', false)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {

  document.body.style.backgroundColor = 'rgba(0, 0, 0, $(data.currentVariables.isHurt.value / 100})'


  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

  document.getElementById('score').innerHTML = data.currentVariables.score.value
})