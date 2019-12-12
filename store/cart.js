export const state = () => ({
    variations : []
})

export const mutations = {
    SET_VARIATIONS (state, variations) {
        state.variations = variations
    }
}

export const actions = {
    async getCart ({ commit }) {
        let response = await this.$axios.$get('cart')

        commit('SET_VARIATIONS', response.data.variations)

        return response

    }
}

