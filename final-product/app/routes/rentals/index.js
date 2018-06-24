import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    /*
    we added a call to fetch all rentals. Let's implement our newly
    generated rentals/index route by moving this findAll call
    from the parent rentals route to our new sub-route.
    */
    return this.get("store").findAll("rental");
  }
});
