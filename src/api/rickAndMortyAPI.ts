const BASE_URL = 'https://rickandmortyapi.com/api'

const getCharacters = async () => {
    const res = await fetch(`${BASE_URL}/character`)
    if(!res.ok) throw Error(`Failed to fetch characters: ${res.status}`)
    return res.json()
}
const getCharactersById = async (id : number) => {
    const res = await fetch(`${BASE_URL}/character/${id}`)
    if(!res.ok) throw Error(`Failed to fetch characters: ${res.status}`)
    return res.json()
}

const getLocations = async () => {
    const res = await fetch(`${BASE_URL}/location`)
    if(!res.ok) throw Error(`Failed to fetch locations: ${res.status}`)
    return res.json()
}

const getEpisodes = async () => {
    const res = await fetch(`${BASE_URL}/episode`)
    if(!res.ok) throw Error(`Failed to fetch episodes: ${res.status}`)
    return res.json()
}


export const createCharactersQueryOptions = () => ({
    queryKey: ['characters'],
    queryFn: getCharacters,
});
export const createCharacterQueryOptions = (id : number) => ({
    queryKey: ['characters',id],
    queryFn: () => getCharactersById(id),
});

export const createLocationsQueryOptions = () => ({
    queryKey: ['locations'],
    queryFn: getLocations,
});

export const createEpisodesQueryOptions = () => ({
    queryKey: ['episodes'],
    queryFn: getEpisodes,
});
