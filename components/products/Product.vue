<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is4by3">
                <nuxt-link :to="{name: 'products-slug', params: {slug: product.slug} }">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
                </nuxt-link>
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <nuxt-link :to="{name: 'products-slug', params: {slug: product.slug} }" class="title is-5"> {{product.name}}</nuxt-link>
                </div>
            </div>
            <div class="content">
                <p v-if="product.description">
                    {{product.description}}
                </p>
                <span class="tag is-rounded is-medium is-dark" v-if="!product.in_stock">Out of Stock</span>
                <span class="tag is-rounded is-medium">{{product.price}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            required: true,
            type: Object
        }
    }
}
</script>