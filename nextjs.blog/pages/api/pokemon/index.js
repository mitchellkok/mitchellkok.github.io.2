export default async function handler(req, res) {
    // An API wrapper for the pokeapi endpoint
    console.log("Reached the Pokemon API!");
    const callAPI = async () => {
        try {
            console.log("connecting...")
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
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