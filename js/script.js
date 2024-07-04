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
            button.classList.add('my-4')
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
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
            'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
            'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
            'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
            'mollit anim id est laborum.',
        options: [
            {
                text: 'Take the goo',
                setState: { blueGoo: true },
                nextText: 2
            },
            {
                text: 'Leave the goo',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        options: [
            {
                text: 'Trade the goo for a sword',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, sword: true },
                nextText: 3
            },
            {
                text: 'Trade the goo for a shield',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true },
                nextText: 3
            },
            {
                text: 'Ignore the merchant',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
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