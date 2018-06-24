import Route from "@ember/routing/route";

export default Route.extend({
  beforeModel() {
    this.replaceWith("rentals");
    //this will redirect visiting root "/"
    //to now visit /rentals
  }
});
