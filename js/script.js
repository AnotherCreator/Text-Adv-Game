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
            button.classList.add('my-3')
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
    // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
    // ' dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip' +
    // ' ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu' +
    // ' fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
    // ' mollit anim id est laborum.'

    { // Poll Tax Arc
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
            ' The next day, they handed over their hard-earned pence to the tax collector.' +
            ' As they walked back home, they had to force down thoughts of joining William.' +
            ' "We have to stay strong," Thomas quietly says. "We have to, for our sake," Margaret replies.',
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
            ' each other from the tax collectors, their lives took on a new, rebellious rhythm. While the fear of punishment lingered,' +
            ' their determination to fight for a better life served as their shield.\n\n' +
            ' And as their resistance grew, they began setting the stage for a larger revolt that would soon shake the foundations of medieval England.',
        options: [
            {
                text: 'Continue',
                nextText: 4
            },
        ]
    },
    { // Storming of London
        id: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
            ' dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip' +
            ' ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu' +
            ' fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
            ' mollit anim id est laborum.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    }
]

startGame()