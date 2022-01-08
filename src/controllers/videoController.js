export const trendingVideos = (req, res) => res.render("home");

export const search = (req, res) => res.send("Search");

export const watch = (req, res) => res.send(`Watch Video ${req.params.id}`);

export const edit = (req, res) => res.send(`Edit Video ${req.params.id}`);

export const deleteVideo = (req, res) => res.send(`Delete Video ${req.params.id}`);

export const upload = (req, res) => res.send("Upload Video");