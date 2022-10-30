
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const getHeroById = (id) => {
    return heroes.find( hero => hero.id === id )
}

console.log(getHeroById(2))


const getHeroesByOwner = (owner) => {
    return heroes.filter( hero => hero.owner === owner )
}

console.log(getHeroesByOwner('Marvel'))
