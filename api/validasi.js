const validasi = require("../lib/validasi");

module.exports = async function(req, res) {
  const { id, serverid } = req.query;

  if (!id || !serverid) {
    return res.status(400).json({
      status: false,
      message: "ID atau Server kosong"
    });
  }

  try {
    const data = await validasi(id, serverid);

    res.status(200).json({
      status: true,
      nickname: data.nickname,
      country: data.country
    });

  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.toString()
    });
  }
};
