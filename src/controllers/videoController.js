export const trendingVideos = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => res.send("Search");

export const watch = (req, res) => {
    res.render("watch", { pageTitle: "Watch", videoNumber: req.params.id});
}

export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });

export const deleteVideo = (req, res) => res.send(`Delete Video ${req.params.id}`);

export const upload = (req, res) => res.send("Upload Video");