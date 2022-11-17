/*
needs restructure. organizing by songs is not the best way. there are 
too many duplicates of pieces of songInfo. 
the data structure should follow the hierarchy starting from artist, to 
artist info, album, album info, song, song info/tabs, etc...
*/
export const tabData = {
	"feel good inc": {
		songInfo: {
			Song: "Feel Good Inc",
			Artist: "Gorillaz",
			Album: "Demon Days",
			Release: "2005",
			"Artist Image":
				"https://lh3.googleusercontent.com/PbXmq8wbQDuMg1Jlv0VLRhNBD7WlgT7OzAbwi_VR8VxeyD6qhydaKvLR3EM79VqgCwmIIc0kO4vt9Sg=w1440-h600-p-l90-rj",
			Instruments: "Bass, Guitar, Ukulele"
		},
		bass: {
			G: "|---------------|----------|-----------------|-----------|---------------|----------|-----------------|-----------|",
			D: "|---------------|----------|-----------------|-----------|---------------|----------|-----------------|-----------|",
			A: "|-------------3-|-2--------|0----0-3-2-------|-----------|-------------3-|-2--------|0----0-3-2-------|-----------|",
			E: "|0---0-2-3------|----------|---------------3-|--0--------|0---0-2-3------|----------|---------------3-|--0--------|"
		},
		guitar: {
			e: "|0------|2------|0------|0------|",
			B: "|0------|3------|1------|0------|",
			G: "|0------|4------|2------|0------|",
			D: "|2------|4------|2------|2------|",
			A: "|2------|2------|0------|2------|",
			E: "|0------|-------|-------|0------|"
		},
		ukulele: {
			A: "|2------|0------|0------|0------|",
			E: "|3------|2------|0------|2------|",
			C: "|4------|2------|0------|2------|",
			G: "|0------|2------|2------|2------|"
		}
	},
	"pumped up kicks": {
		songInfo: {
			Song: "Pumped Up Kicks",
			Artist: "Foster the People",
			Album: "Torches",
			Release: "2011",
			"Artist Image": "",
			Instruments: "Bass"
		},
		bass: {
			G: "|----------------|----------------|----------------|----------------|",
			D: "|----------------|----------------|1----1----1-----|----------------|",
			A: "|----------------|----------1--3--|-------------3--|1----1---1----4-|",
			E: "|1----1----1--3--|4----4----------|----------------|------------3---|"
		}
	},
	"melancholy hill": {
		songInfo: {
			Song: "Melancholy Hill",
			Artist: "Gorillaz",
			Album: "Plastic Beach",
			"Artist Image":
				"https://lh3.googleusercontent.com/PbXmq8wbQDuMg1Jlv0VLRhNBD7WlgT7OzAbwi_VR8VxeyD6qhydaKvLR3EM79VqgCwmIIc0kO4vt9Sg=w1440-h600-p-l90-rj",
			Release: "2010"
		}
	},
	"heads will roll": {
		songInfo: {
			Song: "Heads Will Roll",
			Artist: "Yeah Yeah Yeahs",
			Album: "It's Blitz!",
			"Artist Image": "",
			Release: "2009"
		},
		bass: {
			G: "",
			D: "",
			A: "",
			E: ""
		}
	}
};
