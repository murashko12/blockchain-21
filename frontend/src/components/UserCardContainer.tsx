import { useState } from "react";

const UserCardContainer = () => {
    const [cardList, setCardList] = useState<any[]>([])
    const deckOfCards = [
        // Черви (Hearts)
        { id: 1, suit: 'hearts', value: '2', symbol: '2♥', color: 'red' },
        { id: 2, suit: 'hearts', value: '3', symbol: '3♥', color: 'red' },
        { id: 3, suit: 'hearts', value: '4', symbol: '4♥', color: 'red' },
        { id: 4, suit: 'hearts', value: '5', symbol: '5♥', color: 'red' },
        { id: 5, suit: 'hearts', value: '6', symbol: '6♥', color: 'red' },
        { id: 6, suit: 'hearts', value: '7', symbol: '7♥', color: 'red' },
        { id: 7, suit: 'hearts', value: '8', symbol: '8♥', color: 'red' },
        { id: 8, suit: 'hearts', value: '9', symbol: '9♥', color: 'red' },
        { id: 9, suit: 'hearts', value: '10', symbol: '10♥', color: 'red' },
        { id: 10, suit: 'hearts', value: 'J', symbol: 'J♥', color: 'red' },
        { id: 11, suit: 'hearts', value: 'Q', symbol: 'Q♥', color: 'red' },
        { id: 12, suit: 'hearts', value: 'K', symbol: 'K♥', color: 'red' },
        { id: 13, suit: 'hearts', value: 'A', symbol: 'A♥', color: 'red' },
      
        // Бубны (Diamonds)
        { id: 14, suit: 'diamonds', value: '2', symbol: '2♦', color: 'red' },
        { id: 15, suit: 'diamonds', value: '3', symbol: '3♦', color: 'red' },
        { id: 16, suit: 'diamonds', value: '4', symbol: '4♦', color: 'red' },
        { id: 17, suit: 'diamonds', value: '5', symbol: '5♦', color: 'red' },
        { id: 18, suit: 'diamonds', value: '6', symbol: '6♦', color: 'red' },
        { id: 19, suit: 'diamonds', value: '7', symbol: '7♦', color: 'red' },
        { id: 20, suit: 'diamonds', value: '8', symbol: '8♦', color: 'red' },
        { id: 21, suit: 'diamonds', value: '9', symbol: '9♦', color: 'red' },
        { id: 22, suit: 'diamonds', value: '10', symbol: '10♦', color: 'red' },
        { id: 23, suit: 'diamonds', value: 'J', symbol: 'J♦', color: 'red' },
        { id: 24, suit: 'diamonds', value: 'Q', symbol: 'Q♦', color: 'red' },
        { id: 25, suit: 'diamonds', value: 'K', symbol: 'K♦', color: 'red' },
        { id: 26, suit: 'diamonds', value: 'A', symbol: 'A♦', color: 'red' },
      
        // Трефы (Clubs)
        { id: 27, suit: 'clubs', value: '2', symbol: '2♣', color: 'black' },
        { id: 28, suit: 'clubs', value: '3', symbol: '3♣', color: 'black' },
        { id: 29, suit: 'clubs', value: '4', symbol: '4♣', color: 'black' },
        { id: 30, suit: 'clubs', value: '5', symbol: '5♣', color: 'black' },
        { id: 31, suit: 'clubs', value: '6', symbol: '6♣', color: 'black' },
        { id: 32, suit: 'clubs', value: '7', symbol: '7♣', color: 'black' },
        { id: 33, suit: 'clubs', value: '8', symbol: '8♣', color: 'black' },
        { id: 34, suit: 'clubs', value: '9', symbol: '9♣', color: 'black' },
        { id: 35, suit: 'clubs', value: '10', symbol: '10♣', color: 'black' },
        { id: 36, suit: 'clubs', value: 'J', symbol: 'J♣', color: 'black' },
        { id: 37, suit: 'clubs', value: 'Q', symbol: 'Q♣', color: 'black' },
        { id: 38, suit: 'clubs', value: 'K', symbol: 'K♣', color: 'black' },
        { id: 39, suit: 'clubs', value: 'A', symbol: 'A♣', color: 'black' },
      
        // Пики (Spades)
        { id: 40, suit: 'spades', value: '2', symbol: '2♠', color: 'black' },
        { id: 41, suit: 'spades', value: '3', symbol: '3♠', color: 'black' },
        { id: 42, suit: 'spades', value: '4', symbol: '4♠', color: 'black' },
        { id: 43, suit: 'spades', value: '5', symbol: '5♠', color: 'black' },
        { id: 44, suit: 'spades', value: '6', symbol: '6♠', color: 'black' },
        { id: 45, suit: 'spades', value: '7', symbol: '7♠', color: 'black' },
        { id: 46, suit: 'spades', value: '8', symbol: '8♠', color: 'black' },
        { id: 47, suit: 'spades', value: '9', symbol: '9♠', color: 'black' },
        { id: 48, suit: 'spades', value: '10', symbol: '10♠', color: 'black' },
        { id: 49, suit: 'spades', value: 'J', symbol: 'J♠', color: 'black' },
        { id: 50, suit: 'spades', value: 'Q', symbol: 'Q♠', color: 'black' },
        { id: 51, suit: 'spades', value: 'K', symbol: 'K♠', color: 'black' },
        { id: 52, suit: 'spades', value: 'A', symbol: 'A♠', color: 'black' }
    ]

    const addCard = () => {
        const remainingCards = deckOfCards.filter(card => 
            !cardList.some(c => c.id === card.id)
        )
      
        if (remainingCards.length === 0) {
            return
        }
      
        const randomIndex = Math.floor(Math.random() * remainingCards.length)
        const randomCard = remainingCards[randomIndex]
      
        setCardList(prevList => [...prevList, randomCard]);
    }

    return (
        <div className="rounded-xl  bg-gray-400 !w-2/3 h-1/4 flex items-center justify-center gap-2 py-2">
            <button onClick={addCard} className="border border-dashed h-[80%] w-32 cursor-pointer rounded-xl">+</button>
            {
                cardList?.map((item) => (
                    <div key={item.id} className="h-[80%] w-32 cursor-pointer bg-white rounded-xl flex items-center justify-center">
                        <p style={{ color: item.color }} className={`text-3xl text text-${item.color}-500`}>{item.symbol}</p>
                    </div>
                ))
            }
            
        </div>
    )
}

export default UserCardContainer