import apiConfigs from "./apiConfigs"


const services = {
    cate: {
        getCates: async () => {
            const res = (await fetch(`${apiConfigs.BASE_URL}/cates`)).json()
            return res
        }
    },
    book: {
        getSlides: async () => {
            const res = (await fetch(`${apiConfigs.BASE_URL}/books/slides`)).json()
            return res
        },
        getRecommends: async () => {
            const res = (await fetch(`${apiConfigs.BASE_URL}/books/recommends`, { cache: "no-store" })).json()
            return res
        }
    }
}


export default services