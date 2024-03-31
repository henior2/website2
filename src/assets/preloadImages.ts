
const list: HTMLImageElement[] = []

const loaded: string[] = []

type func = (image: string) => void

const onImgLoad_list: func[] = []

const onImgLoad = (func: func) => {
	onImgLoad_list.push(func)
}

const preloadImages = async (images: string[]) => {
		images.forEach((image) => {
			console.log(`Preloading ${image}`)
			const img = new Image()
			img.onload = () => {
				console.log(`Loaded ${image}`)
				loaded.push(image)
				onImgLoad_list.forEach((func) => {
					func(image)
				})
				const index = list.indexOf(img)
				if (index !== -1) {
					// remove image from the array once it's loaded
					// for memory consumption reasons
					list.splice(index, 1)
				}
			}
			list.push(img)
			img.src = image
		})
}

export { preloadImages, loaded, onImgLoad }