const textElement = document.getElementById('story_text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.classList.add('btn-outline-secondary')
            button.classList.add('mx-2')
            button.classList.add('my-2')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: ' In the autumn of 1380, Thomas, a farmer in Brentwood, learns of a new poll tax from the village crier. ' +
            ' The crier notifies every villager that four pence were to be taken from every man and woman over the age of fourteen.\n\n ' +
            ' Thomas, who was already struggling to pay the current tax amount, was absolutely shocked. He immediately headed over to his wife to tell her the news. ' +
            ' Discussing their dire situation, Thomas and his wife, Margaret, realize they cannot afford the tax, not with their current situation.\n\n ' +
            ' Their friend William, who had overheard their discussion, suggests resisting by refusing to pay. He had planned on roping in other farmers in the town to join him.',
        options: [
            {
                text: 'Comply with the poll tax,\n swallowing the pain of this increased burden.',
                nextText: 2
            },
            {
                text: 'Refuse to pay the tax,\n joining the makeshift resistance.',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'Thomas and Margaret sat near their fireplace, thinking about the weight of the new poll tax.' +
            ' When their friend William suggested joining the resistance, his face serious, they listened as he proposed' +
            ' joining his makeshift resistance of other townspeople.\n\n' +
            ' "It\'s too risky," Margaret said, shaking her head. "We\'re just not cut out for a life of fighting." Thomas agreed reluctantly.' +
            ' "We\'ll find a way to pay," he said. William left, disappointed.\n\n' +
            ' The next day, they handed over their hard-earned shilling to the tax collector.' +
            ' As they walked back home, they had to force down thoughts of joining William.' +
            ' "We have to stay strong," Thomas quietly says. "We have to, for our sake," Margaret replies.\n\n',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }

        ]
    },
    {
        id: 3,
        text: 'Thomas and Margaret sat near their fireplace, thinking about the weight of the new poll tax.' +
            ' When their friend William suggested joining the resistance, his face serious, they listened as he proposed' +
            ' joining his makeshift resistance of other townspeople.\n\n' +
            ' "It\'s risky," Margaret said, glancing at Thomas. "But we can\'t keep living like this," he interjected.' +
            ' After a moment, Margaret nodded. "We\'re in," she said.\n\n' +
            ' That night, they met with other villagers in secret.' +
            ' Plans were made to refuse the tax and protest. Thomas and Margaret felt a spark of hope.' +
            ' The following days were filled with covert meetings and whispered plans. Despite the dangers,' +
            ' the sense of unity and purpose among the villagers grew stronger.\n\n' +
            ' As they joined William and other farmers in acts of defiance, tearing down tax notices and protecting' +
            ' each other from collectors, their lives took on a new, rebellious rhythm. The fear of retribution lingered,' +
            ' but the determination to fight for their rights outweighed it. The community\'s resistance grew,' +
            ' setting the stage for the larger revolt that would soon shake the foundations of feudal England.',
        options: [
            {
                text: 'Explore the castle',
                nextText: 4
            },
            {
                text: 'Find a room to sleep at in the town',
                nextText: 5
            },
            {
                text: 'Find some hay in a stable to sleep in',
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 5,
        text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
        options: [
            {
                text: 'Explore the castle',
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: 'While exploring the castle you come across a horrible monster in your path.',
        options: [
            {
                text: 'Try to run',
                nextText: 8
            },
            {
                text: 'Attack it with your sword',
                requiredState: (currentState) => currentState.sword,
                nextText: 9
            },
            {
                text: 'Hide behind your shield',
                requiredState: (currentState) => currentState.shield,
                nextText: 10
            },
            {
                text: 'Throw the blue goo at it',
                requiredState: (currentState) => currentState.blueGoo,
                nextText: 11
            }
        ]
    },
    {
        id: 8,
        text: 'Your attempts to run are in vain and the monster easily catches.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 9,
        text: 'You foolishly thought this monster could be slain with a single sword.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 10,
        text: 'The monster laughed as you hid behind your shield and ate you.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 11,
        text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    }
]

startGame()