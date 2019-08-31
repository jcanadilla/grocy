- Stock improvements
  - You can now print a "Location Content Sheet" with the current stock per location - new button at the top of the stock overview page
  - The product description now can have formattings (HTML/WYSIWYG editor like for recipes)
- Chores improvements
  - New option "Due date rollover" per chore which means the chore can never be overdue, the due date will shift forward each day when due
- Equipment improvements/fixes
  - Fixed that the delete button not always deleted the currently selected equipment item
- General improvements/fixes
  - Improved the handling which entry page to use with disabled feature flags (thanks @nielstholenaar)
  - Fixed that the Userfield type "Preset list" had always the caption "Product group" instead of the configured one (thanks @oncleben31)
  - Userfields of type "checkbox" are rendered as a checkmark in tables when checked (instead of "1" as till now)
- API improvements
  - New endpoint `/stock/shoppinglist/remove-product` to remove a product from a shopping list (thanks @Forceu)
  - When adding a product (through `stock/product/{productId}/add` or `stock/product/{productId}/inventory`) with omitted best before date and if the given product has "Default best before days" set, the best before date is calculated based on that (so far always today was used which is still the case when no date is supplied and also the product has no "Default best before days set) (thanks @Forceu)
  - Field `stock_amount` of endpoint `/stock/products/{productId}´ now returns `0` instead of `null` when the given product is not in stock (thanks @Forceu)
  - New endpoint `/objects/{entity}/search/{searchString}` search for objects by name (contains search)
  - It's now also possible to provide the API key via a query parameter (same name as the header, so `GROCY-API-KEY`)