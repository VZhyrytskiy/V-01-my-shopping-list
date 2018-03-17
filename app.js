const data = {
  items: [
    { text: 'Banana', checked: true },
    { text: 'Apples', checked: false }
  ],
  title: 'My Shopping List',
  newItem: ''
};

new Vue({
  el: '#app',
  data,
  methods: {
    addItem: function() {
      const text = this.newItem.trim();

      if (text) {
        this.items.push({
          text,
          checked: false
        });
        this.newItem = '';
      }
    }
  }
});
