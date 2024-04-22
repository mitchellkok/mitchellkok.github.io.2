export default async function handler(req, res) {
    // An API wrapper for the pokeapi endpoint
    console.log("Reached the Pokemon API!");

    // Get the Pokemon name from the user input (assuming it's in the request body)
    var pokemonName = 'bulbasaur';
    try {
        console.log(req.body, typeof req.body)
        var body = {};
        if (typeof req.body === 'string') {
            body = JSON.parse(req.body);
        } else {
            body = req.body;
        }
        pokemonName = body.pokemonName;
    }
    catch {
        console.log("Failed API call");
        res.status(400).json({ message: 'Invalid JSON format' })
    }

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