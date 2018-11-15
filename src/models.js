export const count = {
	state: 0,
	reducers: {
		increment: s => s + 1,
	},
	effects: dispatch => ({
		async asyncIncrement() {
			await new Promise(resolve => {
				setTimeout(resolve, 1000)
			})
			dispatch.count.increment()
		},
	}),
};

export const word = {
	state: "",
	reducers: {
    iword: s => s + "rematch",
    resetword: s => ""
   }
  };
