---
title: SELLER AND CUSTOMER BADGE
description: SELLER AND CUSTOMER BADGE
date: 2025-07-29
author: Chirag Tyagi
---
**Seller and customer badge** is an effective way to boost the productivity & engagement of your marketplace sellers.

It is a fact that badges keep up the zeal or motivation to work harder towards success.

It's good to recognize your sellers if they are working hard to uplift your online store.

Hence, thinking from the same viewpoint, we came up with another most requested feature app for our [Multivendor Marketplace for Shopify](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/): **Seller and Customer Badge**.

Customer badges on the other hand can be used to indicate various attributes of a customer, such as their level of activity, reliability, and trustworthiness.

These also help in building trust between the sellers and customers.

🚀 **Purpose:**

Using this application, you can create & assign multiple seller and customer badges on your marketplace.

Customers can see the seller badges assigned badges on the shop/seller profile page and Vendors can see them from the seller panel.

Sellers can see the customer badges assigned to the customers while accepting and fulfilling the orders.

🚀 **Features:**

*   Create & assign unlimited seller and customer badges
*   Enhance & motivate your marketplace sellers
*   You can also assign badges according to their sales performance
*   Award the [best-rated seller](https://webkul.com/blog/product-review-multi-vendor-marketplace-for-shopify/) with the badge
*   Badges will improve seller authenticity toward the customers
*   Badges will indicate verified and active customers.

**App charges:** This feature will have an additional charge of **USD 7 per month** over & above your current Multivendor Marketplace plan.

Let's move to the installation & configuration process of the following feature app.

### Installation

Visit the '**Feature Apps**' section from the Multivendor Marketplace **Admin Panel**. Search for the **Seller and Customer Badge** app & click on **Enable**.

![screenshot_1684332485356](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge1.webp)

### Adding Badges

To add badges, visit Multivendor Marketplace **Admin Panel** > **Sellers** > **Badge Listing** > **Add Badge**

![Seller-Badges-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge2.webp)

Further, on the redirected page, enter the following details:

*   Badge Name
*   Badge for (seller, customer, both)
*   Description
*   Status (Enable/Disable)
*   Upload Badge Logo (logo can be uploaded of any dimension but the recommended dimension is 185x185 px.)

![screenshot_1684324147921](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge3.webp)

This is how a new custom badge can be added. Coming back to the badge listing page, it will show all the added badges on the store from where you can edit, disable or delete them.

![screenshot_1684324254698](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbage4.webp)

### Assigning Badges to Seller

For this, visit Multivendor Marketplace **Admin Panel** > **Sellers** > **Sellers Listing** > **Edit Seller**

![Seller-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge5.webp)

Further, on the redirected page, under the section **Seller Badges**:  
You need to click on **Add Badges** & select the badge you want to assign from the dropdown list.

![Edit-Seller-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge6.webp)

You can assign more than one badge to a seller. Further, the admin can also remove the assigned badge as well as hide it from displaying on the storefront.

![Edit-Seller-Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge7.webp)

### Seller Panel

The seller will be able to see all the assigned badges from the seller panel. Visit Multivendor Marketplace **Seller Panel** > Profile > My Account.

Furthermore, under the section **Seller Badges**, all the assigned badges will be listed.

![My-Account-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge8.webp)

### Assigning badges to customers

For this, visit Multivendor **Marketplace Admin Panel > Sellers > Customer Badge> Add customer badge.**

![screenshot_1684324597737](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge9.webp)

Further, on the redirected page.

You will need to first validate the customer through his/her e-mail address.

![screenshot_1684324725406](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge10.webp)

Once the e-mail is validated, you can assign the badges to the customer.

![screenshot_1684324921611](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge11.webp)

To view all the badges assigned to the customers, go to **Marketplace Admin panel> Sellers>customer badges.**

![screenshot_1684325019431](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge12.webp)

The customer badges will be visible to the sellers on their respective seller panel while accepting/fulfilling the order.

![seller_side_customer_badge_](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/seller_side_customer_badge_-1200x577.png)

### Allow seller to view customer badges

The Admin can decide if he wants the seller to view the badges assigned to the customers.

For this, visit **Marketplace Admin panel> configuration> Badges configuration.**

![screenshot_1684325611069](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerbadge14.webp)

Adding code for seller and customer badges
------------------------------------------

To add the code for seller and customer badge, you can simple click on the "auto-inject" code in the instruction for marketplace section on the configuration menu.

For this, visit the **marketplace admin panel>configuration>Instruction for marketplace>click "auto inject".**

![screenshot_1684332098595](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1684332098595-1200x563.png)

Frontend
--------

This is how the customer badge will appear on the customer account page.

![screenshot_1684334233871](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1684334233871.png)

This is how the seller badges will appear on the storefront.

![screenshot_1684333750965](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1684333750965.png)

You can also display the seller badges on the product description page by adding a single line of code.

To have this, just add this code to the '**product-template.liquid**' file and save:
```liquid
    <div id="wk_seller_badge_div" data-productid="{{ product.id }}"></div>
```
Refer:

![download](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/download-1200x557.png)

Where to find this liquid file?
-------------------------------

1.  From your **Shopify** **admin**, go to **Online Store** > **Themes**.
2.  Click **Actions** > **Edit code**.
3.  Further, search for the '**product-template.liquid**' file & paste the code.

This is how the seller badges will look on the product description page:

![Coffee-Mug-–-tarang-shop2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/Coffee-Mug-%E2%80%93-tarang-shop2-1200x770.png)

