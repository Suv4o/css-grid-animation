const articles = [
    {
        id: "1",
        title: "Feugiat pretium nibh ipsum consequat",
        image: "https://source.unsplash.com/YvpLGlwNISY/400x600",
    },
    {
        id: "2",
        title: "Turpis cursus in hac habitasse",
        image: "https://source.unsplash.com/78A265wPiO4/400x600",
    },
    {
        id: "3",
        title: "Erat imperdiet sed euismod",
        image: "https://source.unsplash.com/lsoogGC_5dg/400x600",
    },
    {
        id: "4",
        title: "Netus et malesuada",
        image: "https://source.unsplash.com/cssvEZacHvQ/400x600",
    },
    {
        id: "5",
        title: "Euismod lacinia at quis risus sed",
        image: "https://source.unsplash.com/a6a0aJfzxBQ/400x600",
    },
    {
        id: "6",
        title: "Et malesuada fames ac turpis",
        image: "https://source.unsplash.com/9pYZWuU7sc8/400x600",
    },
    {
        id: "7",
        title: "Odio eu feugiat pretium nibh ipsum",
        image: "https://source.unsplash.com/ndN00KmbJ1c/400x600",
    },
    {
        id: "8",
        title: "Consequat id porta nibh venenatis",
        image: "https://source.unsplash.com/xg8z_KhSorQ/400x600",
    },
    {
        id: "9",
        title: "Purus non enim praesent elementum",
        image: "https://source.unsplash.com/mBQIfKlvowM/400x600",
    },
    {
        id: "10",
        title: "Sem integer vitae justo",
        image: "https://source.unsplash.com/-G3rw6Y02D0/400x600",
    },
    {
        id: "11",
        title: "Leo urna molestie at",
        image: "https://source.unsplash.com/9fikco0_dTk/400x600",
    },
    {
        id: "12",
        title: "Tristique senectus et netus",
        image: "https://source.unsplash.com/J6Fdqeb0Vcs/400x600",
    },
    {
        id: "13",
        title: "Neque egestas congue quisque",
        image: "https://source.unsplash.com/c4cWawGBFv8/400x600",
    },
    {
        id: "14",
        title: "Eget egestas purus viverra",
        image: "https://source.unsplash.com/tiL5bdu57i8/400x600",
    },
    {
        id: "15",
        title: "Nibh nisl condimentum id",
        image: "https://source.unsplash.com/9DHyVy-G1rM/400x600",
    },
    {
        id: "16",
        title: "Egestas integer eget aliquet",
        image: "https://source.unsplash.com/KMn4VEeEPR8/400x600",
    },
    {
        id: "17",
        title: "Egestas quis ipsum suspendisse ultrices",
        image: "https://source.unsplash.com/5-jtsfuaLBw/400x600",
    },
    {
        id: "18",
        title: "Consectetur adipiscing elit",
        image: "https://source.unsplash.com/c1Jp-fo53U8/400x600",
    },
    {
        id: "19",
        title: "Sed enim ut sem viverra",
        image: "https://source.unsplash.com/Bkci_8qcdvQ/400x600",
    },
    {
        id: "20",
        title: "Dignissim suspendisse in est",
        image: "https://source.unsplash.com/sC5GMiLSGZQ/400x600",
    },
    {
        id: "21",
        title: "Feugiat pretium nibh ipsum consequat",
        image: "https://source.unsplash.com/YvpLGlwNISY/400x600",
    },
    {
        id: "22",
        title: "Turpis cursus in hac habitasse",
        image: "https://source.unsplash.com/78A265wPiO4/400x600",
    },
    {
        id: "23",
        title: "Erat imperdiet sed euismod",
        image: "https://source.unsplash.com/lsoogGC_5dg/400x600",
    },
    {
        id: "24",
        title: "Netus et malesuada",
        image: "https://source.unsplash.com/cssvEZacHvQ/400x600",
    },
    {
        id: "25",
        title: "Euismod lacinia at quis risus sed",
        image: "https://source.unsplash.com/a6a0aJfzxBQ/400x600",
    },
    {
        id: "26",
        title: "Et malesuada fames ac turpis",
        image: "https://source.unsplash.com/9pYZWuU7sc8/400x600",
    },
    {
        id: "27",
        title: "Odio eu feugiat pretium nibh ipsum",
        image: "https://source.unsplash.com/ndN00KmbJ1c/400x600",
    },
    {
        id: "28",
        title: "Consequat id porta nibh venenatis",
        image: "https://source.unsplash.com/xg8z_KhSorQ/400x600",
    },
    {
        id: "29",
        title: "Purus non enim praesent elementum",
        image: "https://source.unsplash.com/mBQIfKlvowM/400x600",
    },
    {
        id: "30",
        title: "Sem integer vitae justo",
        image: "https://source.unsplash.com/-G3rw6Y02D0/400x600",
    },
    {
        id: "31",
        title: "Leo urna molestie at",
        image: "https://source.unsplash.com/9fikco0_dTk/400x600",
    },
    {
        id: "32",
        title: "Tristique senectus et netus",
        image: "https://source.unsplash.com/J6Fdqeb0Vcs/400x600",
    },
    {
        id: "33",
        title: "Neque egestas congue quisque",
        image: "https://source.unsplash.com/c4cWawGBFv8/400x600",
    },
    {
        id: "34",
        title: "Eget egestas purus viverra",
        image: "https://source.unsplash.com/tiL5bdu57i8/400x600",
    },
    {
        id: "35",
        title: "Nibh nisl condimentum id",
        image: "https://source.unsplash.com/9DHyVy-G1rM/400x600",
    },
    {
        id: "36",
        title: "Egestas integer eget aliquet",
        image: "https://source.unsplash.com/KMn4VEeEPR8/400x600",
    },
    {
        id: "37",
        title: "Egestas quis ipsum suspendisse ultrices",
        image: "https://source.unsplash.com/5-jtsfuaLBw/400x600",
    },
    {
        id: "38",
        title: "Consectetur adipiscing elit",
        image: "https://source.unsplash.com/c1Jp-fo53U8/400x600",
    },
    {
        id: "39",
        title: "Sed enim ut sem viverra",
        image: "https://source.unsplash.com/Bkci_8qcdvQ/400x600",
    },
    {
        id: "40",
        title: "Dignissim suspendisse in est",
        image: "https://source.unsplash.com/sC5GMiLSGZQ/400x600",
    },
    {
        id: "41",
        title: "Feugiat pretium nibh ipsum consequat",
        image: "https://source.unsplash.com/YvpLGlwNISY/400x600",
    },
    {
        id: "42",
        title: "Turpis cursus in hac habitasse",
        image: "https://source.unsplash.com/78A265wPiO4/400x600",
    },
    {
        id: "43",
        title: "Erat imperdiet sed euismod",
        image: "https://source.unsplash.com/lsoogGC_5dg/400x600",
    },
    {
        id: "44",
        title: "Netus et malesuada",
        image: "https://source.unsplash.com/cssvEZacHvQ/400x600",
    },
    {
        id: "45",
        title: "Euismod lacinia at quis risus sed",
        image: "https://source.unsplash.com/a6a0aJfzxBQ/400x600",
    },
    {
        id: "46",
        title: "Et malesuada fames ac turpis",
        image: "https://source.unsplash.com/9pYZWuU7sc8/400x600",
    },
    {
        id: "47",
        title: "Odio eu feugiat pretium nibh ipsum",
        image: "https://source.unsplash.com/ndN00KmbJ1c/400x600",
    },
    {
        id: "48",
        title: "Consequat id porta nibh venenatis",
        image: "https://source.unsplash.com/xg8z_KhSorQ/400x600",
    },
    {
        id: "49",
        title: "Purus non enim praesent elementum",
        image: "https://source.unsplash.com/mBQIfKlvowM/400x600",
    },
    {
        id: "50",
        title: "Sem integer vitae justo",
        image: "https://source.unsplash.com/-G3rw6Y02D0/400x600",
    },
    {
        id: "51",
        title: "Leo urna molestie at",
        image: "https://source.unsplash.com/9fikco0_dTk/400x600",
    },
    {
        id: "52",
        title: "Tristique senectus et netus",
        image: "https://source.unsplash.com/J6Fdqeb0Vcs/400x600",
    },
    {
        id: "53",
        title: "Neque egestas congue quisque",
        image: "https://source.unsplash.com/c4cWawGBFv8/400x600",
    },
    {
        id: "54",
        title: "Eget egestas purus viverra",
        image: "https://source.unsplash.com/tiL5bdu57i8/400x600",
    },
    {
        id: "55",
        title: "Nibh nisl condimentum id",
        image: "https://source.unsplash.com/9DHyVy-G1rM/400x600",
    },
    {
        id: "56",
        title: "Egestas integer eget aliquet",
        image: "https://source.unsplash.com/KMn4VEeEPR8/400x600",
    },
    {
        id: "57",
        title: "Egestas quis ipsum suspendisse ultrices",
        image: "https://source.unsplash.com/5-jtsfuaLBw/400x600",
    },
    {
        id: "58",
        title: "Consectetur adipiscing elit",
        image: "https://source.unsplash.com/c1Jp-fo53U8/400x600",
    },
    {
        id: "59",
        title: "Sed enim ut sem viverra",
        image: "https://source.unsplash.com/Bkci_8qcdvQ/400x600",
    },
    {
        id: "60",
        title: "Dignissim suspendisse in est",
        image: "https://source.unsplash.com/sC5GMiLSGZQ/400x600",
    },
    {
        id: "61",
        title: "Feugiat pretium nibh ipsum consequat",
        image: "https://source.unsplash.com/YvpLGlwNISY/400x600",
    },
    {
        id: "62",
        title: "Turpis cursus in hac habitasse",
        image: "https://source.unsplash.com/78A265wPiO4/400x600",
    },
    {
        id: "63",
        title: "Erat imperdiet sed euismod",
        image: "https://source.unsplash.com/lsoogGC_5dg/400x600",
    },
    {
        id: "64",
        title: "Netus et malesuada",
        image: "https://source.unsplash.com/cssvEZacHvQ/400x600",
    },
    {
        id: "65",
        title: "Euismod lacinia at quis risus sed",
        image: "https://source.unsplash.com/a6a0aJfzxBQ/400x600",
    },
    {
        id: "66",
        title: "Et malesuada fames ac turpis",
        image: "https://source.unsplash.com/9pYZWuU7sc8/400x600",
    },
    {
        id: "67",
        title: "Odio eu feugiat pretium nibh ipsum",
        image: "https://source.unsplash.com/ndN00KmbJ1c/400x600",
    },
    {
        id: "68",
        title: "Consequat id porta nibh venenatis",
        image: "https://source.unsplash.com/xg8z_KhSorQ/400x600",
    },
    {
        id: "69",
        title: "Purus non enim praesent elementum",
        image: "https://source.unsplash.com/mBQIfKlvowM/400x600",
    },
    {
        id: "70",
        title: "Sem integer vitae justo",
        image: "https://source.unsplash.com/-G3rw6Y02D0/400x600",
    },
    {
        id: "71",
        title: "Leo urna molestie at",
        image: "https://source.unsplash.com/9fikco0_dTk/400x600",
    },
    {
        id: "72",
        title: "Tristique senectus et netus",
        image: "https://source.unsplash.com/J6Fdqeb0Vcs/400x600",
    },
    {
        id: "73",
        title: "Neque egestas congue quisque",
        image: "https://source.unsplash.com/c4cWawGBFv8/400x600",
    },
    {
        id: "74",
        title: "Eget egestas purus viverra",
        image: "https://source.unsplash.com/tiL5bdu57i8/400x600",
    },
    {
        id: "75",
        title: "Nibh nisl condimentum id",
        image: "https://source.unsplash.com/9DHyVy-G1rM/400x600",
    },
    {
        id: "76",
        title: "Egestas integer eget aliquet",
        image: "https://source.unsplash.com/KMn4VEeEPR8/400x600",
    },
    {
        id: "77",
        title: "Egestas quis ipsum suspendisse ultrices",
        image: "https://source.unsplash.com/5-jtsfuaLBw/400x600",
    },
    {
        id: "78",
        title: "Consectetur adipiscing elit",
        image: "https://source.unsplash.com/c1Jp-fo53U8/400x600",
    },
    {
        id: "79",
        title: "Sed enim ut sem viverra",
        image: "https://source.unsplash.com/Bkci_8qcdvQ/400x600",
    },
    {
        id: "80",
        title: "Dignissim suspendisse in est",
        image: "https://source.unsplash.com/sC5GMiLSGZQ/400x600",
    },
];

export default articles;
