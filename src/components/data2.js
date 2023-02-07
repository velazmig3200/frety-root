/*
needs restructure. organizing by songs is not the best way. there are 
too many duplicates of pieces of songInfo. 
the data structure should follow the hierarchy starting from artist, to 
artist info, album, album info, song, song info/tabs, etc...
*/
export const musicData = {
	list: {
		artist(key) {
			const { list: _, ...newObject } = musicData;
			if (key == "key") return Object.keys(newObject);
			return newObject;
		},
		album(key) {
			let albums = {};
			for (let i in this.artist()) {
				albums = { ...albums, ...this.artist()[i]["album"] };
			}
			if (key == "key") return Object.keys(albums);
			return albums;
		},
		song(key) {
			let songs = {};
			for (let i in this.album()) {
				songs = { ...songs, ...this.album()[i]["song"] };
			}
			if (key == "key") return Object.keys(songs);
			return songs;
		},
		getArtist(searchItem, key) {
			let result = null;
			for (let i in this.artist()) {
				let albums = [{ ...this.artist()[i]["album"] }];
				albums.find(e => {
					if (e[searchItem]) {
						if (key == "key") {
							return (result = i);
						}
						return (result = musicData[i]);
					}
				});
			}
			if (result != null) {
				return result;
			}
			for (let i in this.artist()) {
				let albums = [{ ...this.artist()[i]["album"] }];
				for (let x in albums[0]) {
					let songs = [{ ...albums[0][x]["song"] }];
					songs.find(e => {
						if (e[searchItem]) {
							if (key == "key") {
								return (result = i);
							}
							return (result = musicData[i]);
						}
					});
				}
			}
			return result;
		},
		getAlbum(searchItem, key) {
			let result = null;
			for (let i in this.album()) {
				if (Object.keys(this.album()[i]["song"]).includes(searchItem)) {
					if (key == "key") {
						return (result = i);
					}
					return (result = this.album()[i]);
				}
			}
			return result;
		}
	},
	Gorillaz: {
		image:
			"https://lh3.googleusercontent.com/PbXmq8wbQDuMg1Jlv0VLRhNBD7WlgT7OzAbwi_VR8VxeyD6qhydaKvLR3EM79VqgCwmIIc0kO4vt9Sg=w1440-h600-p-l90-rj",
		album: {
			"Demon Days": {
				release: "2005",
				image: "https://m.media-amazon.com/images/I/51fZzK0crTL._SY580_.jpg",
				song: {
					"Feel Good Inc": {
						bass: {
							G: "|--------------|----------|--------------|----------|--------------|----------|--------------|----------|",
							D: "|--------------|----------|--------------|----------|--------------|----------|--------------|----------|",
							A: "|------------3-|-2--------|-0---0-3-2----|----------|------------3-|-2--------|-0---0-3-2----|----------|",
							E: "|-0---0-2-3----|----------|------------3-|--0-------|-0---0-2-3----|----------|------------3-|--0-------|"
						},
						guitar: {
							e: "",
							B: "",
							G: "",
							D: "",
							A: "",
							E: ""
						},
						ukulele: {
							A: "",
							E: "",
							C: "",
							G: ""
						}
					},
					DARE: {
						bass: {}
					}
				}
			},
			"Plastic Beach": {
				release: "2010",
				image: "https://upload.wikimedia.org/wikipedia/en/d/d1/Plasticbeach452.jpg",
				song: {
					"Melancholy Hill": {
						bass: {}
					}
				}
			}
		}
	},
	"Foster the People": {
		image:
			"https://lh3.googleusercontent.com/mzGNsARMkqn-eWbtk_d_vILqWdKiHGEotbvDCxNasI7OK9QyM4mkMAA8zzMnmQnmzl1iVB4tSfMCk6Oy=w1440-h600-p-l90-rj",
		album: {
			Torches: {
				release: "2011",
				image:
					"https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Torches_foster_the_people.jpg/220px-Torches_foster_the_people.jpg",
				song: {
					"Miss You": {
						bass: {}
					},
					Houdini: {
						bass: {}
					}
				}
			}
		}
	},
	"Yeah Yeah Yeahs": {
		image:
			"https://lh3.googleusercontent.com/_A-7JeKRO2rw8oVT2H2mLpnCF1rIA81XdbAz4xCXho0SvjJzSchdXyVd-tJ2grfpSph48DnyaNpEagA=w1440-h600-p-l90-rj",
		album: {
			"It's Blitz!": {
				release: "2009",
				image:
					"https://i.discogs.com/xnLeU_5z_-3jT6MeA4TH1trcYp3JaXXgKtmWV-7s-UM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3MTU4/NDktMTMyMzM5OTU2/NS5qcGVn.jpeg",
				song: {
					"Heads Will Roll": {
						bass: {}
					}
				}
			}
		}
	},
	"Mac Miller": {
		image:
			"https://lh3.googleusercontent.com/2mW8aHStIR7OpN4ZAEbusTSbNnUoLYRJ6EqkOLx3EL_eCjr5shAgjm4zTxqZubxVOfZracBo=w1440-h600-p-l90-rj",
		album: {
			Circles: {
				release: "2020",
				image:
					"https://upload.wikimedia.org/wikipedia/en/1/15/Mac_Miller_-_Circles.png",
				song: {
					Surf: {
						guitar: {
							e: "",
							B: "",
							G: "",
							D: "",
							A: "",
							E: ""
						}
					}
				}
			}
		}
	}
};
