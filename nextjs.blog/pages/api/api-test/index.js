export default function handler(req, res) {
    console.log("Reached the Hello API!");
    res.status(200).json({ text: 'Hello There!!' });
}