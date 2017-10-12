import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').getOrderById(params.order_id);
    // const id = params.order_id;
    // const store = this.get('store');
    // return store.getOrderById(id);
  },
  store: Ember.inject.service()
});
