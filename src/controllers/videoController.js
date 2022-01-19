
const fakeUser = {
    name: "Insun",
    isLogin: true,
};

let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 59,
        createdAt: "2 minutes ago",
        id: 1
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 59,
        createdAt: "2 minutes ago",
        id: 2
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 59,
        createdAt: "2 minutes ago",
        id: 3
    }
];

export const trendingVideos = (req, res) => {
    return res.render("home", { pageTitle: "Home", fakeUser, videos });
};

export const search = (req, res) => res.send("Search");

export const watch = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1];
    res.render("watch", { pageTitle: `Watching ${video.title}`, fakeUser, video});
};

export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });

export const deleteVideo = (req, res) => res.send(`Delete Video ${req.params.id}`);

export const upload = (req, res) => res.send("Upload Video");