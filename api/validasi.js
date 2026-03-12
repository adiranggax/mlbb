import validasi from "../lib/validasi.js"

export default async function handler(req, res) {

res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
res.setHeader("Access-Control-Allow-Headers", "Content-Type")

if (req.method === "OPTIONS") {
return res.status(200).end()
}

try {

const { id, serverid } = req.query

const data = await validasi(id, serverid)

res.status(200).json({
status: true,
nickname: data["in-game-nickname"],
country: data.country
})

} catch (err) {

res.status(200).json({
status: false,
message: "ID tidak ditemukan"
})

}

}
