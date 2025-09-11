---
title: Easy Group Buy app
description: Easy Group Buy app
author: Chirag Tyagi
---

The [Easy Group Buy app](https://webkul.com/blog/shopify-group-buy-app-documentaion/) is now integrated with the [Multi-vendor Marketplace App](https://marketplace-doc.webkul.com/classic/Introduction/) for Shopify.

Enabling this feature app, you can allow the customer to create a group or join the existing groups to purchase the products at a discounted price.

**Features:**

*   This app allows sellers to add “group buy” products to the app.
*   They need to enter a discount percentage, Minimum member limit per group, and group product validity.
*   Customers can create private groups and invite other customers to join the groups to purchase products at discounted prices.
*   Sellers can also allow customers to create a public group i.e. anyone can join the group.
*   Offering Group buying can reduce cart abandonment and increase conversion rates.
*   Increase average order value, as buyers save more when they buy more in a single checkout.

Let’s dig deeper and know the app configurations.

### **Admin Panel Configurations:**

First, the admin needs to enable the Easy Group buy feature app by navigating to the feature apps section

![Enable group buy feature app](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/enableapp-1200x530.webp)

If you haven’t already installed the [Easy Group Buying app for Shopify](https://webkul.com/blog/shopify-group-buy-app-documentaion/) in your store, you will be asked to install it first.

![enable group buy feature app](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/groupbuy-1200x606.webp)

### **Admin Shopify Configuration:**

For Admin Shopify end-related configuration Kindly refer to the user guide: [**Admin Shopify Documentation**](https://webkul.com/blog/shopify-group-buy-app-documentaion/)

### **Code Pasting for Online Store 2.0**

If you are using [Online Store 2.0](https://www.shopify.com/partners/blog/shopify-online-store) (e.g., Dawn), **you will need** to follow the steps to add the codes.

**To display** the “Group Buy” widget on the product page, you can use either of the following methods:

#### **Method 1 :**

You can add it directly to the theme. **After installing** the app on the store, **navigate to** Online Store >> Themes >> Customize.

**Additionally,** you can either set this as the default option for all products **or** look for the specific product applicable for buying in groups **and then** add the block accordingly.

![code pasting](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/codepasting.webp)

This is how the block will appear on the page, you can easily drag and adjust the block from the left-hand menu options.

The effects are shown, **allowing** you to easily decide where to add the app block.

![code pasting for app](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/codepastingblock.webp)

#### **Method 2 :**

To show “Group Buy” products on the product description page, add the below code into **main-product.liquid** template file:-
```liquid
Note:- Make sure to paste the code just after ‘</product-form>‘

    <div id='wk_group_buy_product' pid='{{ product.id }}' cid='{{ customer.id|default: 0 }}' cemail='{{ customer.email|default: 0 }}'></div>
```
    
```liquid
Code to display “Group Buy Account” include in the **account.liquid** file on top of the liquid file:

    <button type="button" style="border-radius: 2px;border: 2px solid black;background: inherit;display: block;margin: 0 auto;"><a href="pages/group-buy-account" style="color: black;text-decoration: none;font-size:20px;">{{shop.metafields.wk_group_buy_labels.translation_labels.group_buy_account_btn|default: "Group Buy Account"}}</a></button>
```
### **Group Buy Product Listing**:-

![Group Buy product listing](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/productlisting.webp)

On **Product Page:**–

![Product page](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/productpage.webp)

On the storefront, the customers will have two options whether to create a new group or join an existing group.

You can allow customers to create any of the two groups either public groups or private groups.  
You can **visit the Global Configuration** & **manage the group settings**.

### **CASE 1: Public Group**

A public group will be shown to all customers and anyone can join a public group

In this case, anyone can create groups and purchase the “group buy product”. Clicking the **Create Group** button, the customer will simply enter the group name.

Then, click the **Create Group & Buy** button and proceed to purchase the product.

![Public group](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/customerend.webp)

The customer can Join the existing groups and buy products.

![customer end view](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/privategroup.webp)

### **CASE 2: Private Group**

A private group will be shown only to the invitees. Note:- Only those customers can join the group who are invited.

Clicking the Create Group button, the customer will enter the group name, enter email. Thus, an email will be sent to the invitee.

**After that,** click the **Create Group & Buy** button **and then** proceed to purchase the product.

![customer end view](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/privategroup-1.webp)

### **Customer end**

For customer end-related details kindly refer to this link: [Customer End- User Guide](https://webkul.com/blog/shopify-group-buy-app-documentaion/#customer-end)

### Seller Panel

Sellers can add products for buying in groups by navigating to **Product>>product listing>> Add group buy**

![Add group buy product](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/addgroupbuy-1200x575.webp)

Set group buy **duration, discount**, and **member limit**.

![Edit Products](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/addgroupbuyproduct-1012x1024.webp)

You can see and edit products added to the groups by navigating to Product >> Group Buy Products.

![Edit Group Buy Products](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/groupbuyproducts-1200x575.webp)

You can access groups by navigating to Product >> Group Buy Groups.

![Groups listing page](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/02/grouplisting-1200x575.webp)

