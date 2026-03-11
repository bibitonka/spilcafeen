import placeholderImage from "../assets/imageplaceholder.jpg"
import catanImage from "../assets/catan.png"
import cardsAgainstHumanityImage from "../assets/cardsagainsthumanity.png"
import secretHitlerImage from "../assets/secrethitler.png"
import explodingKittensImage from "../assets/explodingkittens.png"
import clueImage from "../assets/clue.png"
import terraImage from "../assets/terra.png"
import trivialPursuitImage from "../assets/triviapursuit.png"
import deadOfWinterImage from "../assets/deadofwinter.png"
import dominoImage from "../assets/domino.png"
import jengaImage from "../assets/jenga.png"
import scrabbleImage from "../assets/scrabble.png"

export const initialGames = [
        {
            id: 1,
            name: "CATAN",
            players: "3-4",
            duration: "1-2h",
            shelf: "C2",
            difficulty: "medium",
            category: "strategy",
            condition: "used very good",
            image: catanImage,
            description: "Negotiate, trade, and build settlements on the island of Catan in this modern strategy classic.",
            videoTutorial: "https://youtu.be/nB28h-yh3T4?si=8Zs3PNBFtnNgHIim",
            shelfCount: 1
        },
        {
            id: 2,
            name: "Cards Against Humanity",
            players: "3-10",
            duration: "30 minutes",
            shelf: "D1",
            difficulty: "easy",
            category: "funny",
            condition: "new in stock",
            image: cardsAgainstHumanityImage,
            description: "A party card game for horrible people. Match ridiculous prompts with even more ridiculous answers.",
            videoTutorial: "https://youtu.be/liyWMJhkgKs?si=FA6dZl_VJV5CWNhR",
            shelfCount: 1
        },
        {
            id: 3,
            name: "Secret Hitler",
            players: "5-10",
            duration: "45 minutes",
            shelf: "B3",
            difficulty: "medium-difficult",
            category: "combat",
            condition: "used good",
            image: secretHitlerImage,
            description: "A dramatic hidden role game of political intrigue, deception, and deduction set in 1930s Germany.",
            videoTutorial: "https://youtu.be/mbGXIDYdtas?si=BxXI8JQlli4NSl5K",
            shelfCount: 1
        },
        {
            id: 4,
            name: "Exploding Kittens",
            players: "2-5",
            duration: "10-30 minutes",
            shelf: "B5",
            difficulty: "easy",
            category: "cards",
            condition: "used average",
            image: explodingKittensImage,
            description: "A fast, chaotic card game about kittens, explosions, and creative ways to avoid certain doom.",
            videoTutorial: "https://youtu.be/RzbAt-xKZZU?si=Kn8O8fW2tUMfUSCG",
            shelfCount: 1
        },
        {
            id: 5,
            name: "Clue",
            players: "3-6",
            duration: "40 minutes",
            shelf: "C4",
            difficulty: "medium",
            category: "mystery",
            condition: "new arriving",
            image: clueImage,
            description: "The classic mystery game of who did it, where, and with what weapon in a sprawling mansion.",
            videoTutorial: "https://youtu.be/Vib1LsK4Ln4?si=dXwjNIVEABFW3jMp",
            shelfCount: 1
        },
        {
            id: 6,
            name: "Terra",
            players: "2-6",
            duration: "45 minutes",
            shelf: "E2",
            difficulty: "easy-medium",
            category: "trivia",
            condition: "used very good",
            image: terraImage,
            description: "A geography and facts trivia game where you place guesses on a world map to score points.",
            videoTutorial: "https://youtu.be/VuzJU-oftKw?si=TbVJRWRtbq9kxtI_",
            shelfCount: 1
        },
        {
            id: 7,
            name: "Trivial Pursuit",
            players: "2-5",
            duration: "1 hour",
            shelf: "E3",
            difficulty: "easy",
            category: "trivia",
            condition: "used good",
            image: trivialPursuitImage,
            description: "Answer questions from classic trivia categories and race to fill your scoring wheel first.",
            videoTutorial: "https://youtu.be/4VfDkkXefQY?si=vDUH7aGc70CL4GjP",
            shelfCount: 1
        },
        {
            id: 8,
            name: "Dead of Winter",
            players: "2-5",
            duration: "1-2 hours",
            shelf: "D4",
            difficulty: "medium-difficult",
            category: "horror",
            condition: "very used - to be replaced",
            image: deadOfWinterImage,
            description: "A story-driven survival game set in a frozen zombie apocalypse with secret personal objectives.",
            videoTutorial: "https://youtu.be/6la-2F6EtyM?si=hwvPmeZsuuLCCnwL",
            shelfCount: 1
        },
        {
            id: 9,
            name: "Domino",
            players: "2-6",
            duration: "20-40 minutes",
            shelf: "A1",
            difficulty: "easy",
            category: "family",
            condition: "used average",
            image: dominoImage,
            description: "A classic tile game of matching numbers, building chains, and blocking your opponents.",
            videoTutorial: "https://youtu.be/jMHJhZlAbdc?si=rx6HFXLGL8rvW4sO",
            shelfCount: 1
        },
        {
            id: 10,
            name: "Jenga",
            players: "1-8",
            duration: "20 minutes",
            shelf: "A7",
            difficulty: "easy",
            category: "suspense",
            condition: "new in stock",
            image: jengaImage,
            description: "Pull wooden blocks from a teetering tower and stack them on top without making it collapse.",
            videoTutorial: "https://youtu.be/HqVI1YX0wcQ?si=_WcFuyQjKnj-DR9P",
            shelfCount: 1
        },
        {
            id: 11,
            name: "Scrabble",
            players: "2-4",
            duration: "45-90 minutes",
            shelf: "A8",
            difficulty: "easy",
            category: "family",
            condition: "used good",
            image: scrabbleImage,
            description: "Form interlocking words on the board to score points from your letter tiles.",
            videoTutorial: "",
            shelfCount: 1
        }
    ]

