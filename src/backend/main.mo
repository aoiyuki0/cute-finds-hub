import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Float "mo:core/Float";

actor {
  public type ProductId = Text;
  public type CategoryId = Text;
  public type ComparisonGroupId = Text;

  public type Product = {
    id : ProductId;
    title : Text;
    description : Text;
    rating : Float;
    priceHint : Text;
    imageUrl : Text;
    category : CategoryId;
    comparisonGroup : ?ComparisonGroupId;
  };

  public type Category = {
    id : CategoryId;
    name : Text;
  };

  public type ComparisonGroup = {
    id : ComparisonGroupId;
    name : Text;
    productIds : [ProductId];
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Text.compare(product1.title, product2.title);
    };

    public func compareByRating(product1 : Product, product2 : Product) : Order.Order {
      Float.compare(product1.rating, product2.rating);
    };
  };

  let products = Map.fromIter<ProductId, Product>(
    [
      (
        "hyggzz-puppy-blanket",
        {
          id = "hyggzz-puppy-blanket";
          title = "HYGGZ Puppy Blanket";
          description = "Soft and calming dog blanket, perfect for small breeds. Double-layered fleece with a plush feel.";
          rating = 4.5;
          priceHint = "$12.99 (Check for discounts)";
          imageUrl = "https://dogproductimage.com";
          category = "blankets";
          comparisonGroup = ?("blanket-comparison-1");
        },
      ),
      (
        "budget-dog-bed",
        {
          id = "budget-dog-bed";
          title = "Cozy Cave Dog Bed";
          description = "Budget-friendly cave bed designed for comfort and warmth. Ideal for puppies.";
          rating = 4.7;
          priceHint = "$19.99 (Sale Price)";
          imageUrl = "https://dogbedimage.com";
          category = "dog_beds";
          comparisonGroup = ?("blanket-comparison-1");
        },
      ),
    ].values()
  );

  let categories = Map.fromIter<CategoryId, Category>(
    [
      (
        "blankets",
        {
          id = "blankets";
          name = "Dog Blankets";
        },
      ),
      (
        "dog_beds",
        {
          id = "dog_beds";
          name = "Dog Beds";
        },
      ),
    ].values()
  );

  let comparisonGroups = Map.fromIter<ComparisonGroupId, ComparisonGroup>(
    [
      (
        "blanket-comparison-1",
        {
          id = "blanket-comparison-1";
          name = "Best Puppy Blankets";
          productIds = ["hyggzz-puppy-blanket", "budget-dog-bed"];
        },
      ),
    ].values()
  );

  // Core Query Methods
  public query ({ caller }) func listCategories() : async [Category] {
    categories.values().toArray();
  };

  public query ({ caller }) func listProductsByCategory(categoryId : CategoryId) : async [Product] {
    products.values().toArray().filter(
      func(product) {
        product.category == categoryId;
      }
    );
  };

  public query ({ caller }) func getProduct(productId : ProductId) : async Product {
    switch (products.get(productId)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getComparisonGroup(comparisonGroupId : ComparisonGroupId) : async ComparisonGroup {
    switch (comparisonGroups.get(comparisonGroupId)) {
      case (null) { Runtime.trap("Comparison group not found") };
      case (?group) { group };
    };
  };

  public query ({ caller }) func listComparisonGroups() : async [ComparisonGroup] {
    comparisonGroups.values().toArray();
  };
};
