---
title: PRODUCT REVIEW
description: PRODUCT REVIEW
author: Chirag Tyagi
---

Do you want your customers to rate & review your marketplace products?  
If yes, then we are here with another add-on for the [MultiVendor Marketplace App](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/) for Shopify called **Product Review**!

**PURPOSE**:

After purchasing an item, customers can rate it to share their experience. Admins can also send post-purchase review emails to collect feedback.

**CHARGES**:

This feature will have an additional charge of **USD 7 per month** over & above your current Multivendor Marketplace plan.

### Enabling the featured app

Enable the app by accessing the following:

*   Multi-Vendor **Admin Panel**
*   From the Dashboard, hover over the **three dots** on the top-right of the page
*   Click on **Feature Apps**
*   Search for ‘**Product Review**‘ & click on ‘**Enable**‘
*   After accepting the charges, you’ll be good to configure the app!

![Feature-Apps-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview1.webp)

### Adding Codes

To make this feature display on the front end, the admin needs to paste a few codes.

The following page will provide instructions along with the codes.  
**Multivendor Admin Panel** \> **Configuration** > **Instruction for Marketplace**

Here, you'll have these codes:

Adding a configuration to replace the default currency symbol displayed in the seller panel with a custom text/symbol of the admi

In the '**product.liquid**' template:
``` liquid
    {% capture wk_product_review %}{% include "mvm-product-review" %}{% endcapture %} {% unless wk_product_review contains "Liquid error" %} {{ wk_product_review }} {% endunless %}

    <div class="wk_product_rating" style="display:flex"><div class="wk_rate_product_div" class="rateit" style="font-size:1.3em"></div><p class="wk_total_prpd_rev" style="font-size: 16px;color: #F13F3F;margin:4px;"></p></div>
```
For '**customers/account.liquid**' template:
```liquid
    <div id="wk-your-reviews"> <input id="wk-cstm-email" type="hidden" value="{{ customer.email }}"> </div>
```
For **'product-card-grid.liquid**' template to show ratings on collection page:
```liquid
    {% include "mvm-product-collection-review" %}
```
If you are having trouble while updating the codes, let us know by emailing at **shopify@webkul.com** or creating a ticket for the same at [**Webkul UV Desk**](https://webkul.uvdesk.com/). We’ll do it for you!

### Configuration: Admin Panel

The admin needs to configure the app by visiting:

*   Multi-Vendor **Admin Panel**
*   From the dashboard, go to **Configuration**
*   Click on **Product Review Configuration** from the drop-down menus.

![Dashboard-Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview2.webp)

On the following page, you’ll find these options under **Product Review Configuration**:

*   **Auto-approve product review**: From this option, you can automatically approve newly added reviews on your marketplace products.
*   **The seller can enable/disable customer reviews on the product**: By this option, the seller can approve or disapprove the review on their products.
*   **Only Verified customers can review your product**: From this option, restrict that to leave a review, the customer must have bought that product before.

![Configuration-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview3.webp)

*   **Review Category Structure**: Enable this option if you want to provide a review category to your customers.  
    Further, enter the review category names.
*   **Send an email after an order has been placed to review the product**: From this option, an email will be sent to the customer after an order has been placed to review the product.
    *   **Choose when you need to send the email to the customer**: At the time of delivery or fulfillment.
    *   **Review mail after how many days of order placed**: Enter the number of days.
*   **Allow customers to upload images for review the product:** If the admin enables this option, then they can allow customers to upload images while adding a review.
*   **Google widget for review:** By enabling this option, the admin can add a Google widget for review.

![Gender](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview4.webp)

**Allow Customer to select their Gender**: The “ Allow customer to select their gender” configuration is present under the product review configuration section of the multivendor marketplace panel.

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview5.webp)

Allows the customer to select their gender while submitting their review for the product.

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/gender2-1200x545.webp)

The Admin and seller will be able to view the gender of the customer who placed this review in the product review section.

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview6.webp)

*   There is no configuration from the seller's end  
    

Front end
---------

Seller Profile Page:

![Seller-Profile-–-Multivendor-Marketplace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Seller-Profile-%E2%80%93-Multivendor-Marketplace-1163x1024.png)

This is how the review widget will look like on your product description page:

![Beige-Overcoat-–-multivendor-product-review](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Beige-Overcoat-%E2%80%93-multivendor-product-review-1052x1024.png)

Customers can add an image while adding a review:

![REview](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/06/image-66-1200x494.png)

This is how the reviews & ratings will look like:

![screencapture-multivendor-product-review-myshopify-products-beige-overcoat-2020-01-09-19_36_44-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/screencapture-multivendor-product-review-myshopify-products-beige-overcoat-2020-01-09-19_36_44-1-1075x1024.png)

Ratings on the collection page:

![123](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/123.png)

Moreover, the customer can view & edit the reviews given by him by visiting the **account** section:

![Account-–-multivendor-product-review-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Account-%E2%80%93-multivendor-product-review-1-1200x597.png)

On the redirected page:  
Clicking on the **Edit** button will give you a pop-up where you can edit & submit the review again.

![product-review-–-multivendor-product-review](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/product-review-%E2%80%93-multivendor-product-review-1200x647.png)

Show Review Status on Shopify Customer Account Page
---------------------------------------------------

![review status](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/reviewstatus-1200x543.webp)

To enhance transparency and user experience, the app now displays the **review status** (Approved or Pending) directly on the **Shopify Customer Account Page**.

This allows customers to easily track whether their submitted reviews have been approved by the store admin or are still pending for moderation.

As shown in the screenshot above:

*   If the review is **approved**, a green “Approved” label will be visible.
*   If the review is still under moderation, a yellow “Pending” label will be shown.

This small yet significant update helps build trust with customers and keeps them informed about their contributions to the store.

Mail Notification on Review Edit by Customer
--------------------------------------------

To ensure that merchants stay informed about customer interactions, the app now supports **email notifications whenever a customer edits an existing product review**.

This helps store owners to:

*   Stay aware of any changes in customer feedback.
*   Take timely action if the updated review indicates an issue.
*   Maintain accurate moderation and approval workflows.

This feature ensures better communication between the store and the customers and improves overall store management efficiency.

Customers now have the option to specify their gender when submitting a review.

![Gender](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/gendert.webp)

  
Customers can filter reviews by selecting a specific star rating bar.

![Review](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/review.webp)

The pagination feature for the review list allows customers to control how many reviews they view at a time.

![Pagination](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/pagination.webp)

Customers can click on the **"View all reviews"** option to see more reviews.

When they select this option on a Shopify product page, they will be redirected to another page displaying all reviews for that product.  

![REviews](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/allreviews.webp)

Only logged-in customers will be able to see the product reviews on that page, while other customers will see a blank page.

**NOTE:** For this app, we strictly follow UTC time zone, so when a review is given, the time shown is according to UTC_._

### Admin end

The reviews added by the customers can be monitored by the admin by visiting:

**Multivendor Admin Panel** > Hover over **Products** > Select **Product Review** from drop-down menus.

If 'review auto-approve' is disabled, the admin must manually approve reviews.  
  
Moreover, the admin can also **deny** the customer reviews (no matter what the status is; approved/pending).

![Admin-Product-Review-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview7.webp)

To have a complete look into the customer review, the admin can also check it out by visiting individual products.

**Multivendor Admin Panel** > **Products** > **Product Listing** > **Edit**:

![Product-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview8.webp)

On the bottom of the **edit product** page, you'll have a **'reviews & ratings'** section. Here, you need to click on the **manage reviews** button. Refer:

![Edit-Product-Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview9.webp)
Clicking on this, you'll land on the '**Manage Reviews & Rating**' page. From here, the admin can again **approve** or **decline** the review.

![Admin-Manage-Reviews-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/prodiuctreview10.webp)

### Seller end

Similarly, the seller will have all the reviews added to his products by the customers. For this, visit:

**Multivendor Seller Panel** > Hover over **Products** > Select **Product Review** from drop-down menus.

The seller can enable or disable reviews only if the admin has granted permission in the product review configuration section.

![Product-Review-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview11.webp)

Moreover, the seller can also monitor the reviews in depth by editing the product (as shown above for the admin panel).

The most reviewed products of your marketplace will be displayed on your marketplace dashboard for both seller & admin.

Admin Dashboard
---------------

![Dashboard-Admin-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview12.webp)

Seller Dashboard
----------------

![Dashboard-Seller-•-Multivendor-MarketPlace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/productreview13.webp)

This was all about the **Product Review** Add-on for the **Multivendor Marketplace** for **Shopify**.
