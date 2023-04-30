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
            const res = (await fetch(`${apiConfigs.BASE_URL}/books/recommends`, { cache: "no-cache" })).json()
            return res
        },
        getLatest: async (params: { page: number, limit: number }) => {
            const url = new URL(`${apiConfigs.BASE_URL}/books/latest`)
            url.search = new URLSearchParams(JSON.stringify(params)).toString()
            const res = (await fetch(url, { cache: "no-store", })).json()
            return res
        },
        getLatestChapter: async (bookId: number) => {
            const url = new URL(`${apiConfigs.BASE_URL}/books/${bookId}/new-chapter`)
            const res = (await fetch(url)).json()
            return res
        },
        getCompleted: async (params?: { page: number, limit: number }) => {
            const url = new URL(`${apiConfigs.BASE_URL}/books/completed`)
            if (params) {
                url.search = new URLSearchParams(JSON.stringify(params)).toString()
            }
            const res = (await fetch(url, { cache: "no-store", })).json()
            return res
        }
    }
}


export default services