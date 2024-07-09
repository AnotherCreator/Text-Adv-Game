const textElement = document.getElementById('story_text')
const textHeader = document.getElementById('story_header')
const textEnd = document.getElementById('story_end_style')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)

    textElement.innerText = textNode.text

    textHeader.innerText = textNode.header
    textHeader.style.fontWeight = 'bold'

    textEnd.innerText = textNode.end
    textEnd.style.fontWeight = 'bold'

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
        header: 'The Poll Tax',
        text: ' In the autumn of 1380, Thomas, a farmer in Brentwood, learns of a new poll tax from the village crier. ' +
            ' The crier notifies every villager that four pence were to be taken from every man and woman over the age of fourteen.\n\n ' +
            ' Thomas, who was already struggling to pay the current tax amount, was absolutely shocked. He immediately headed over to his wife to tell her the news. ' +
            ' Discussing their dire situation, Thomas and his wife, Margaret, realize they cannot afford the tax, not with their current situation.\n\n ' +
            ' Their friend William, who had overheard their discussion, suggests resisting by refusing to pay. He had planned on roping in other farmers in the town to join him.',
        end: '',
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
        header: 'The Poll Tax',
        text: ' Thomas and Margaret sat near their fireplace, thinking about the weight of the new poll tax.' +
            ' When their friend William suggested joining the resistance, his face serious, they listened as he proposed' +
            ' joining his makeshift resistance of other townspeople.\n\n' +
            ' "It\'s too risky," Margaret said, shaking her head. "We\'re just not cut out for a life of fighting." Thomas agreed reluctantly.' +
            ' "We\'ll find a way to pay," he said. William left, disappointed.\n\n' +
            ' The next day, they handed over their hard-earned pence to the tax collector.' +
            ' As they walked back home, they had to force down thoughts of joining William.' +
            ' "We have to stay strong," Thomas quietly says. "We have to, for our sake," Margaret replies.',
        end: 'Neutral Ending',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }

        ]
    },
    {  // Join early unrest
        id: 3,
        header: 'The Poll Tax',
        text: ' Thomas and Margaret sat near their fireplace, thinking about the weight of the new poll tax.' +
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
        end: '',
        options: [
            {
                text: 'Continue',
                nextText: 4.1  // Continue to hearing and joining wat tyler
            },
        ]
    },
    { // Joining Wat Tyler
        id: 4.1,
        header: 'The Rebellion Grows',
        text: ' As Thomas and Margaret’s involvement in the local resistance grew more fervent. One evening,' +
            ' as they gathered in a hidden barn with William and other villagers, they heard whispers of a larger' +
            ' movement forming under the leadership of a man named Wat Tyler. His bold actions and calls for widespread' +
            ' rebellion against the oppressive taxes and feudal system ignited their hopes.\n\n' +
            ' “Wat Tyler is gathering a force to march on London,” William announced, his eyes gleaming with determination.' +
            ' “He believes we can compel the king to listen to our demands.”\n\n' +
            ' Thomas and Margaret exchanged a determined glance. The time for local defiance had passed;' +
            ' they felt the call to join the greater cause. “We’ll go,” Thomas said firmly.' +
            ' “We’ve come this far. We must see it through.”\n\n' +
            ' Traveling by night to avoid detection, they made their way to the gathering point ' +
            ' where Tyler’s forces were assembling. The sight was awe-inspiring: hundreds of peasants, farmers, and laborers,' +
            ' all united in their shared struggle. Wat Tyler himself, a charismatic and fierce leader, welcomed them,' +
            ' his presence instilling courage and hope.',
        end: '',
        options: [
            {
                text: 'Continue',
                nextText: 4  // Continue to hearing and joining wat tyler
            },
        ]
    },
    { // Storming of London
        id: 4,
        header: 'The Storming of London',
        text: ' Thomas and Margaret, now fully committed to the cause, followed Wat Tyler’s force as it moved toward London.' +
            ' The sight of so many united under a single banner was awe-inspiring. It was a sea of people, just like us, who wanted a change for the better,' +
            ' Thomas silently thought. ' +
            ' When they reached the outskirts of the city, the tension was indescribable.\n\n' +
            ' As Wat Tyler was leading the group, he had slowly and suddenly turned around,' +
            ' "Remember, we come not as thieves and robbers. We come seeking social justice."\'' +
            ' With Tyler taking the lead, I remember us beginning our march into London.\n\n' +
            ' The rebels stormed through the streets, targeting symbols of oppression. Prisons were broken open,' +
            ' and the magnificent Savoy Palace, home to John of Gaunt, was set ablaze. The rebellion\'s initial momentum' +
            ' was fierce, with the peasants\' rage fueling their actions.\n\n' +
            ' As the chaos unfolded, Thomas and Margaret found themselves at a crossroads. The night was thick with smoke' +
            ' and the cries of a city in turmoil. Wat Tyler’s call for further violent action, given to him by the roars of the rebels, rang in their ears. Yet, ' +
            ' amid the destruction, Margaret\'s eyes met Thomas\'s, filled with uncertainty.\n',
        end: '',
        options: [
            {  // Violent path
                text: 'Continue violently storming\n towards the Tower of London',
                nextText: 10
            },
            {  // Peaceful path
                text: 'Persuade Wat Tyler that our actions\n are affecting innocents\n',
                nextText: 5
            }
        ]
    },
    { // Persuade Wat Tyler
        id: 5,
        header: 'The Peaceful Turn in London',
        text: 'Amid the chaos and destruction, Thomas and Margaret approached Wat Tyler. "We need to stop the violence," Margaret urged.' +
            ' "There\'s another way." Thomas nodded. "If we continue like this, the king will never listen."\n\n' +
            ' Tyler hesitated, his fierce demeanor softening. After a moment, he raised his hand, signaling the rebels to halt.' +
            ' "We\'ll seek a peaceful resolution," he announced. Together, they drafted a list of demands for the king,' +
            ' focusing on justice and reform without further bloodshed.\n\n' +
            ' The following day, they marched peacefully to meet King Richard II.' +
            ' Their decision to change tactics opened a new chapter in their struggle, aiming for lasting change through negotiation.',
        end: '',
        options: [
            {
                text: 'Continue',
                nextText: 6
            }
        ]
    },
    { // advocate for less violence while protecting more people
        id: 6,
        header: 'The Calm Meeting with King Richard II',
        text: ' The day arrived when Wat Tyler, flanked by Thomas and Margaret, stood before King Richard II at Smithfield.' +
            ' The atmosphere was tense but hopeful, with the rebels gathered peacefully around their leader. Tyler,' +
            ' bold and unyielding, presented their demands: the end of serfdom, fair wages, and justice for the oppressed.\n\n' +
            ' Thomas and Margaret watched as the young king listened intently. Richard\'s advisors were wary,' +
            ' their eyes darting between the king and Tyler. Tyler spoke passionately about the peasants\' plight, and for a moment,' +
            ' it seemed as though a peaceful resolution was within reach. The crowd held its breath,' +
            ' sensing the weight of the moment.\n\n' +
            ' When Tyler finished, the king’s advisors stepped forward. "Wat Tyler," one of them declared,' +
            ' "you are under arrest for organizing a rebellion against the crown." The royal guards moved in, restraining Tyler.' +
            ' Gasps and murmurs of discontent rippled through the crowd, but the rebels stayed their hands,' +
            ' watching for the king\'s next move.\n\n' +
            ' Richard II raised his hand to calm both sides. "Justice will be served," he declared.' +
            ' "We will consider your demands." His words, though uncertain, offered a glimmer of hope.' +
            ' Thomas and Margaret, hearts heavy with the apprehension of Tyler but buoyed by the king\'s promise,' +
            ' knew their struggle was far from over but that the seeds of change had been planted.',
        end: '',
        options: [
            {
                text: 'Continue',
                nextText: 9
            }
        ]
    },
    { // End of protests and peaceful disperal of peasants who chose to go against wat tyler
        id: 9,
        header: 'The Peasant Dispersal',
        text: 'After Wat Tyler\'s arrest, Thomas and Margaret stood among the crowd, tension palpable.' +
            ' King Richard II addressed them, promising to consider their demands. With Tyler imprisoned,' +
            ' the rebels dispersed peacefully, heeding the king\'s word.\n\n' +
            ' Over the following days, key rebel leaders were also apprehended for their roles in the revolt.' +
            ' While not all demands were met, significant concessions were achieved: the hated poll tax was abolished,' +
            ' limits on laborers\' wages were not strictly enforced, and free fishing and hunting rights were granted to all.' +
            ' Additionally, there was increased peasant participation in local government, a small but crucial step' +
            ' towards more equitable governance.\n\n' +
            ' Thomas and Margaret, though saddened by the loss of some leaders, felt a sense of accomplishment.' +
            ' Their efforts had not been in vain, and the changes, though incremental, marked the beginning of a' +
            ' shift in the feudal system that had oppressed them for so long. The seeds of change had been sown,' +
            ' promising a better future for their community.',
        end: 'Peaceful Ending',
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
                text: 'Trust King Richard II after making a verbal agreement and return home',
                nextText: 13
            },
            {
                text: 'Demand written proof',
                nextText: 15
            }
        ]
    },
    { // Return home only to have your home village raided by the royal forces and imprisoned for life
        id: 13,
        text: 'STORY OF LISTENING TO KING RICHARD AND HIS FAKE PROMISES',
        options: [
            {
                text: 'Return home',
                nextText: 14
            }
        ]
    },
    { // Return home only to have your home village raided by the royal forces and imprisoned for life
        id: 14,
        text: 'STORY OF RETURNING HOME THINKING RICARD II WILL FULFILL HIS PROMISES ONLY TO BE LATER RAIDED BY ROYAL FORCES AND IMPRISONED',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    { // Wat Tyler demands written proof and gets closer to the king
        id: 15,
        text: 'STORY OF WAT TYLER DEMANDING WRITTEN PROOF AND GETTING CLOSE TO THE KING',
        options: [
            {
                text: 'Continue',
                nextText: 16
            }
        ]
    },
    { // Wat Tyler gets stabbed and dies
        id: 16,
        text: 'STORY OF WAT TYLER DYING BY BEING STABBED',
        options: [
            {
                text: 'Scatter',
                nextText: 17
            },
            {
                text: 'Violently Rally',
                nextText: 19
            }
        ]
    },
    { // Rebel forces scatter
        id: 17,
        text: 'STORY OF REBEL FORCES SCATTERING',
        options: [
            {
                text: 'Continue',
                nextText: 18
            }
        ]
    },
    { // Rebellion ends up collapsing with rebels being forced to live in fear and peasants being further punished and controlled
        id: 18,
        text: 'STORY OF REBELLION COLLAPSING BUT EVENTUALLY LEADING TO CHANGE',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    { // Rebels gets stirred up with the death of wat tyler and violently rallies
        id: 19,
        text: 'STORY OF REBELS VIOLENTLY RALLYING DUE TO WAT TYLER\'S DEATH',
        options: [
            {
                text: 'Continue',
                nextText: 20
            }
        ]
    },
    { // Rebels fight their way out of London and recruit more peasants who are displeased with the royal orders
        id: 20,
        text: 'STORY OF REBELS FIGHTING THEIR WAY OUT OF LONDON AND RECRUITING MORE PEASANTS',
        options: [
            {
                text: 'Continue',
                nextText: 21
            }
        ]
    },
    { // After doing significant damage, the king is forced to address the issue
        id: 21,
        text: 'KING IS FORCED TO AGREE TO THE PEASANT\'S DEMANDS AND ENDS THE REBELLION',
        options: [
            {
                text: 'Continue',
                nextText: 21
            }
        ]
    },
]

startGame()