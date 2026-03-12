function parseObject(message) {
  const nickname = message.match(/\[(.*?)\]/)?.[1] || "Unknown";

  return {
    nickname: nickname,
    country: "Unknown"
  };
}

module.exports = {
  parseObject
};
