  const path = require('path');

  const imagesPath = path.resolve('../assets/public');

  const getImage = (req, res) => {
    const { fileName } = req.params;
    const wholePath = `${imagesPath}/${fileName}`;
    return res.sendFile(wholePath);
  };

  module.exports = {
    getImage,
  };