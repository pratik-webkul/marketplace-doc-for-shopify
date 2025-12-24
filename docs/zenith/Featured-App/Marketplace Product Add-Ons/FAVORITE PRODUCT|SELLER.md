---
title: FAVORITE PRODUCT|SELLER
description: FAVORITE PRODUCT|SELLER
date: 2025-08-04
author: Chirag Tyagi
---

Here's presenting an additional feature in our [Multivendor Marketplace](https://marketplace-doc.webkul.com/classic/Introduction/) app for Shopify: Favorite Product/Seller through which customer gets an option to like products as well as sellers.

### FEATURES

*   Admin can see the list of all the sellers liked by customers in the "sellers" section of the app.
*   Admin can see the list of all the products liked by customers in the "Products" section of the app.
*   Sellers can too see the list of all the customers who liked their profile page in the "Liked customer" section of their account in a multivendor marketplace app.
*   Customers can see the list of their Favorite Products and Sellers from "My Account" section of their Shopify store
*   Customers will also receive the email notification for their favorite seller whenever they will add any new products or make any changes in the existing products. They can also see the "number of likes" on their favorite products as well as on their favorite sellers.

### ACTIVATION IN NEW THEME

Firstly visit the "Feature Apps" section by clicking the (...) three dots in the main menu of your app.

Now Enable the " Favorite Product/Seller" Feature.

![Favorite Product/Seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/favpo.webp)

Once you will click on the "Enable button" then you need to agree on an additional charge of USD 5 per month which are over and above your current multivendor marketplace plan.

![Favorite Product/Seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/favpot.webp)

### FRONT END DISPLAY IN NEW THEME

Now To display the Favorite button on the "Seller profile page", "Products Page" and on Customer's account page,

You need to copy the below-given codes and paste it in the respective .liquid files of your Shopify store.

Copy the below code and paste it into the 'product.liquid' template to display the "Favorite button" on Seller Products.
```liquid
<div class="wk\_like\_btn" style="cursor:pointer; display:none; padding:5px; clear:both;"><a><i class="fa fa-heart-o" id="wk\_icon" data-like="" data-total\_count="" aria-hidden="true"></i></a><input type="hidden" class="customerid" value="{{ customer.id }}"><input type="hidden" class="productid" value="{{ product.id }}" data-vid=""></div>>
```
Copy the below code and paste it into the 'customers/account.liquid' template to display Favorite button on the customer account page
```liquid
<div id="wk-customer-likes" style="clear: both!important; margin:10px 0!important;"><input id="wk-customer-id" type ="hidden" value="{{ customer.id }}"></div>
```
Paste the below code into page.mp\_seller\_profile.liquid template to display the favorite button on the seller profile page.
```liquid
<input type="hidden" class="customerid" id="customerid" value="{{customer.id}}">Favorite Product/Seller  
```
Paste the following code into the 'product.liquid' template -> just next to select call back function
```liquid
$('.productid').attr('data-vid',variant.id)
```
Copy following code and paste into main-product.liquid template to display the "favorite" seller button on seller products.
```liquid
    <div class="mp-mrgn-btm-5 hidden" id="wk-seller-like-block"> <button class="btn button-primary" id="wk-seller-like-btn"><span class="fa fa-thumbs-up"></span> <span id="wk-like-text" data-total-like="" data-total-count ="" data-like=""></span> <span id="wk-like-count"></span></button> <input type="hidden" id="wk-like-label" data-label-like = "Shop Like"> <input type="hidden" id="wk-liked-label" data-label-liked = "Liked"> </div>
```
Copy following code and paste into main-collection-product-grid.liquid template to display the "favorite" seller button on seller collection.
```liquid
    <div class="page-width hidden" id="wk-seller-like-block"><button class="btn button-primary" id="wk-seller-like-btn"><span class="fa fa-thumbs-up"></span><span id="wk-like-text" data-total-like="" data-total-count="" data-like=""></span><span id="wk-like-count"></span></button><input type="hidden" id="wk-like-label" data-label-like="Shop Like"><input type="hidden" id="wk-liked-label" data-label-liked="Liked"><input type="hidden" class="customerid" value="{{ customer.id}}"></div>
```
### FRONT END VIEW

Customers can like the product on the seller products page and can also view the number of likes on that product.

![Favorite Product/Seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/5-15.png)

Customers can like the seller from the "seller profile page".

Favorite Product/Seller

Customers can like the sellers' shop on the Seller's Product Page.

![screenshot_1696412812784](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1696412812784.png)

Customers can also like the sellers' shop on the Seller's Collection Page.

![screenshot_1696412954887](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1696412954887.png)

Customers can also see the list of his/her liked products and liked sellers from the "My Account" section of the Shopify store.

![Favorite Product/Seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/e-2.png)

### ADMIN END

Admin can see the list of all the sellers liked by customers in the multivendor marketplace app.

Sellers >> favorite sellers >> here you can see the list of all sellers liked by customers as well as the number of likes that sellers received from customers.

![Favorite Product/Seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/favsfr.webp)

Admin can see the list of all the products liked by customers in the multivendor marketplace app.

![Favorite Product/Seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/favsthr.webp)


### SELLER END

The seller can too view the number of customers who liked their profile page from their account in the Multivendor marketplace app.

Profile>> Liked customer >> Here you can see the list of customers who liked your profile page

![Favorite Product/Seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/favsfv.webp)


### Multivendor Marketplace App for Shopify: Favorite Product/Seller Demo

Check out: [https://multivendor-marketplace-5.myshopify.com/](https://multivendor-marketplace-5.myshopify.com/)

