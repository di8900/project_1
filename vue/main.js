var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    image: './logo.png',
    inStock: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "black",
        variantImage: './black.jfif'
      },
      {
        variantId: 2235,
        variantColor: "white",
        variantImage: './white.jfif'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    updateProduct: function (variantImage){
      this.image = variantImage
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    }
  }
})
