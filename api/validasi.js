process.removeAllListeners('warning')

const validasi = require("../lib/validasi")

module.exports = async function(req,res){

const { id, serverid } = req.query

try{

const data = await validasi(id,serverid)

res.json({
status:true,
nickname:data["in-game-nickname"] || data.nickname,
country:data.country
})

}catch(err){

res.json({
status:false,
message:err.toString()
})

}

}
