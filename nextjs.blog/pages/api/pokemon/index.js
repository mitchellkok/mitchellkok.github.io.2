export default async function handler(req, res) {
    // An API wrapper for the pokeapi endpoint
    console.log("Reached the Pokemon API!");

    // Get the Pokemon name from the user input (assuming it's in the request body)

    const body = JSON.parse(req.body);
    const { pokemonName } = body;

    const callAPI = async () => {
        try {
            console.log("connecting...,", pokemonName)
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const data = await res.json();
            // console.log(data);
            return {text: data};
        } catch (err) {
            console.log(err);
            return {};
        }
    };

    const result = await callAPI();
    // console.log(result)
    res.status(200).json(result);
}