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
            {  // Pay the tax
                text: 'Comply with the poll tax,\n swallowing the pain of this increased burden.',
                nextText: 2
            },
            {  // Refuse to pay tax
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
    {  // Join early unrest
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
                nextText: 4  // Continue to the storming of London
            },
        ]
    },
    { // Storming of London
        id: 4,
        text: 'STORMING OF LONDON STORY',
        options: [
            {  // Violent path
                text: 'Continue violenty storming towards the Tower of London',
                nextText: 10
            },
            {  // Peaceful path
                text: 'Realize that the rebellion has taken a violent turn' +
                    'and you choose to protect the innocent',
                nextText: 5
            }
        ]
    },
    { // Protect the citizens being targeted by wat tyler
        id: 5,
        text: 'STORY OF PROTECTING FIGURES BEING TARGETED BY WAT TYLER',
        options: [
            {
                text: 'Continue',
                nextText: 6
            }
        ]
    },
    { // advocate for less violence while protecting more people
        id: 6,
        text: 'STORY OF ADVOCATING FOR LESS VIOLENCE AS A BARGAINING CHIP',
        options: [
            {
                text: 'Continue',
                nextText: 7
            }
        ]
    },
    { // Meeting at Mile End (Peaceful) w/ Richard II
        id: 7,
        text: 'STORY OF PEACEFUL MEETING W/ RICHARD II TO DEMAND CHANGES',
        options: [
            {
                text: 'Continue',
                nextText: 8
            }
        ]
    },
    { // Compromises with the peasants and while he cant fulfill all their demands, he can do some of them
        id: 8,
        text: 'STORY OF PEACEFUL COMPROMISE WITH THE PEASANTS',
        options: [
            {
                text: 'Continue',
                nextText: 9
            }
        ]
    },
    { // End of protests and peaceful disperal of peasants who chose to go against wat tyler
        id: 9,
        text: 'STORY OF PEACEFUL ENDING',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    { // Destroy Properties
        id: 10,
        text: 'STORY OF DESTROYING PROPERITIES',
        options: [
            {
                text: 'Continue',
                nextText: 11
            }
        ]
    },
    { // Kill political, noble figures
        id: 11,
        text: 'STORY OF KILLING NOBLE, ROYAL FIGURES DETERMINED BY WAT TYLER',
        options: [
            {
                text: 'Continue',
                nextText: 12
            }
        ]
    },
    { // Violent + Forceful meeting with King Richard II
        id: 12,
        text: 'STORY OF MEETING KING RICHARD II AND DEMAND CHANGES',
        options: [
            {
                text: 'Trust King Richard II after making a verbal agreement',
                nextText: 13
            },
            {
                text: 'Trust King Richard II after making a verbal agreement',
                nextText: 13
            }
        ]
    },
]

startGame()