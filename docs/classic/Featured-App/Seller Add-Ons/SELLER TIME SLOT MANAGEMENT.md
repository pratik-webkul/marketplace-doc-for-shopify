---
title: SELLER TIME SLOT MANAGEMENT
description: SELLER TIME SLOT MANAGEMENT
date: 2025-07-29
author: Chirag Tyagi
---
[Multi-Vendor Marketplace for Shopify](https://webkul.com/blog/shopify-multivendor-marketplace-app-new-upgraded-features/) is here with another featured app called **Seller Time Slot Management**.

**Purpose of the app**: Using this feature app seller and admin can manage opening and closing time for the seller's store. This is a great way to make your customers aware of the seller's availability.

**Pricing:** This feature will have an additional charge of **USD 5 per month** over & above your current Multivendor Marketplace plan charges.

**Caution**: In case the admin changes the time zone, then he has to manually update the time slots of every seller.

Let’s move on to the installation & configuration process!

Enable the following app by visiting:

*   Multi-Vendor **Admin Panel**
*   From the Dashboard, there are the **three dots** on the top-right of the page
*   Click on **Feature Apps**
*   Search for ‘**Seller Time Slot Management**‘ & click on ‘**Enable**‘
*   After accepting the charges, you’ll be good to configure the app!

![collage_3_-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/collage_3_-1.png)

To make this feature display on the frontend, the admin needs to paste a few codes.

The instructions with the codes will be given on the following page:  
**Multivendor Admin Panel** > **Configuration** > **Instruction for Marketplace**

Here, you’ll have these codes:

![Instructions_Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Instructions_Admin-1-1200x597.png)

**Hide add to cart button**: Copy the below-given code and paste it to **product.liquid** template inside the form tag.
```liquid
    <div id="wk_seller_time_slot" data-productid ="{{product.id}}"></div>
```
**Add wk_cart to class of Add to cart button**: Copy the below-given code and paste it to **product.liquid** template inside class of Add to cart button.
```liquid
    wk_cart
```
Copy the below-given code and paste it to **product-template.liquid** template above Add To Cart button.
```liquid
    <span id="wk_cart_error"  style="display:none" >Store Closed, Try after some time</span>
```
**Error Label message for normal cart**: Copy the below-given code and paste it to **cart.liquid** template after Checkout button.
```liquid
    <span id="wk_cart_error"  style="display:none" >Store Closed, Try after some time</span>
```
**Error label message for split cart**: Copy the below-given code and paste it to **wk-cart.liquid** template after Checkout button.
```liquid
    <span id="wk_cart_error_{{vendor | replace: ' ', '_'}}"  style="display:none" >Store Closed, Try after some time</span>
```
If you are having trouble while updating the codes, let us know by emailing at **shopify@webkul.com** or creating a ticket for the same at [**Webkul UV Desk**](https://webkul.uvdesk.com/). We’ll do it for you!

For this, visit **Multivendor Admin Panel** \> **Configuration** > **Time Slot Configuration**.

![Configuration_Admin-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Configuration_Admin-3-1200x597.png)

Enable the first tab to allow your marketplace sellers to create their store's time slots. Next, mention the maximum number of time slots that a seller can create for a day.

The admin can add time slots on the behalf of the sellers by visiting:  
**Multivendor Admin Panel** > **Sellers** > **Sellers Time Slot** > **Add Time Slot**.

![image-24](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/image-24-1200x597.png)

On the redirected page, add the seller email and start filling the slots as per the weekdays. Each slot will have an **opening timing** & a **closing timing**.

![Add_Seller_Time_Slot_Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Add_Seller_Time_Slot_Admin-1200x597.png)

The slot timings that you'll enter for a weekday will be auto-entered for the rest of the days. In case you want to remove for the other days simply click on the day label. Lastly, activate the time slot & save the details.

![Add_Seller_Time_Slot_Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Add_Seller_Time_Slot_Admin-1-1200x597.png)

Coming back to the **Multivendor Admin Panel** > **Sellers** > **Sellers Time Slot** page. Here you can edit or delete the saved slots again:

![image-25](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/image-25-1200x597.png)

The seller can add time slots by visiting:  
**Multivendor Seller Panel** > **Profile** > **Time Slot**

![image-26](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/image-26-1200x597.png)

Add the details as we did on the admin end and save the changes.

![image-27](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/image-27-1200x597.png)

This is how the frontend will look like:

![1-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/06/1-1-1.png)

Store Opened

![2-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/06/2-1.png)

Store Closed

This is how the seller listing page will look like:

![3](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/06/3.png)

Seller Profile Page

**Note**: Customers can filter online & offline sellers on the seller listing page.

![collage_5_-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/collage_5_-3.png)

Product Description Page

![image-63](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/image-63.png)

**Note**: Checkout is not disabled for digital products. Moreover, if a cart includes products from 2 different vendors (one online & one offline), the checkout will be disabled with the message saying the particular store is closed.
