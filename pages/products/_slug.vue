<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-half">
          <img src="http://via.placeholder.com/620x620" alt="Product name" />
        </div>
        <div class="column is-half">
          <section class="section">
            <h1 class="title is-4">{{product.name}}</h1>
            <p v-if="product.description">{{product.description}}</p>

            <hr />
            <span class="tag is-rounded is-medium is-dark" v-if="!product.in_stock">Out of Stock</span>

            <span class="tag is-rounded is-medium">{{product.price}}</span>
          </section>
          <section class="section">
            <form action>
              <Variation
                v-for="(variations, type) in product.variations"
                :key="type"
                :variations="variations"
                :type="type"
                v-model="form.variation"
              />

              <div class="field has-addons" v-if="form.variation">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select name="quantity" id="quantity" v-model="form.quantity">
                      <option :value="v" v-for="v in parseInt(form.variation.stock_count)" :key="v">{{v}}</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <button type="submit" class="button is-info">Add to cart</button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Variation from "@/components/products/Variation";
export default {
  data() {
    return {
      product: null,
      form: {
        variation: "",
        quantity: 1
      }
    };
  },

  components: {
    Variation
  },

  watch: {
      'form.variation' () {
          this.form.quantity = 1;
      }
  },

  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`products/${params.slug}`);

    return {
      product: response.data
    };
  }
};
</script>