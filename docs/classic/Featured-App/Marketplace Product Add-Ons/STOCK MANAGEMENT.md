---
title: STOCK MANAGEMENT
description: STOCK MANAGEMENT
date: 2025-08-04
author: Chirag Tyagi
---

In the [Multivendor Marketplace](https://marketplace-doc.webkul.com/classic/Introduction/) app for Shopify: Stock Management feature app, the Admin can manage the product stock from his sellers.

Admin can track the shipment while the seller has the choice to select who will fulfill the order, the admin or the seller.

To get this app, you have to pay 10$ (USD) per month over and above the monthly charges of the Multivendor Marketplace App.

### Features

*   Admin can manage the product stock from his seller/vendor.
*   Admin can accept or reject the fulfillment request from sellers.
*   On fulfillment request acceptance by the admin, the seller will send product quantity but cannot update the product quantity on his own.
*   On fulfillment request rejection by the admin, the workflow of the app will be the same as the multivendor marketplace.
*   Admin and seller both at their end can view the list of the accepted and rejected products in the app.
*   Customers can see who has fulfilled the order on the product page.
*   Compatible with the **[Partial Fulfillment](https://webkul.com/blog/shopify-multivendor-marketplace-partial-fulfillment/)** feature.

### Let's see how to Activate the stock management feature app

Go to the feature app section and click on enable as shown in the screenshot below:

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/29112930/AwesomeScreenshot-Feature-Apps-Admin-2019-07-29-16-07-97.png)

Once you have clicked on enable, a new box will open where you need to agree:

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/29113041/AwesomeScreenshot-Feature-Apps-Admin-2019-07-29-17-07-07.png)

Once the charge is approved, the app is enabled and can be used.

To use the app, you need to copy the below line of code and paste it in the 'product.liquid' file template (or product-template,

if exist) to display the fulfillment information on the storefront (product description page).
```liquid
<div id="wk\_ff\_service" style="margin:15px 0; clear:both;">
    <input id="productid" type="hidden" value="{{ product.id }}">
</div>
```
Once the code is added, the customer can see the information if the product is fulfilled by the admin or the seller.

### Admin end

Once the featured app Stock Management is enabled then in configuration menu one new menu will be added:

*   Fulfillment Configuration

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Configuration-_-Admin-5.jpg)

On the Fulfilment Configuration page, the admin needs to add labels and logos to make it visible on the product description page.

Moreover, in this configuration three more following dropdown options will appear for product fulfillment: -

1\. FULFILLMENT BY ADMIN  
  
2\. FULFILLMENT BY SELLER

3\. FULFILLMENT BY BOTH - When you choose this option, one more dropdown named **Fulfilled by In case of both** will appear in which we can choose

ALLOW SELLERS TO FULFILLED THE ORDERS OF THEIR PRODUCTS or ALLOW SELLERS TO CHOOSE THE SPECIFIC FULFILLMENT OPTION FOR THEIR PRODUCTS.

If you choose "ALLOW SELLERS TO CHOOSE THE SPECIFIC FULFILLMENT OPTION FOR THEIR PRODUCTS." then one more dropdown will appear called **Choose Fulfillment On Old Products**. 

In which we can select SELF FULFILLMENT and FULFILLMENT BY ADMIN

![fulfill-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/fulfill-1-1-1200x557.png)

![fulfill-2-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/fulfill-2-1-1200x538.png)

Now, in this case, both you & your seller will have the option to separately fulfill each product in the order from the respective panels in the **Order Details** section of the seller panel.

Product To Be Fulfilled by Admin

![Screenshot-2020-11-10T175429.871](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/Screenshot-2020-11-10T175429.871.png)

Product To Be Fulfilled by the Seller:-

![Screenshot-2020-11-10T173651.079](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/Screenshot-2020-11-10T173651.079.png)

Once the Order gets fulfilled, the details will be shown like this:-

![Screenshot-2020-11-10T173744.029](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/Screenshot-2020-11-10T173744.029.png)

**Points To Be Noted:-**

*   As per the Shipping Cost Distribution Configuration (Payment Configuration):- If the admin will fulfill any respective product's order then the admin will get the shipping cost. If the seller will fulfill any respective product's order then the shipping cost goes to the seller.
*   In case of specific product fulfillment, if the admin fulfills any product's order from Shopify then, the complete order fulfillment will be managed by the admin only from Shopify end.

You will have the Fulfillment Request menu on sellers menu as shown in the screenshot below:

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Configuration-_-Admin-6.jpg)

In the fulfillment request page, the admin can see all the fulfillment requests from the sellers.

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Fulfillment-Request-Admin.png)

### Seller End

New sub-menu 'Fulfillment configuration' will be added in the configuration menu of the seller panel:

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Dashboard-Seller-•-Multivendor-MarketPlace-1-1.png)

When you click on the Fulfilment configuration, you will get the option to choose who will fulfill the product for the customer.

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Screenshot-25.png)

The seller can select whether he/she wants to fulfill the products on his own or wants the admin to fulfill the products.

**In the case of Self-Fulfillment:**
------------------------------------

Once the seller selects the **Self-fulfillment** service, the seller needs to upload a fulfillment logo to show it to the customers on the product description page and save the settings.

Thus, the seller will fulfill the products on his own in this case.

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Fulfillment-Service-Seller-•-Multivendor-MarketPlace.png)

**In Case of Fulfillment by admin:**
------------------------------------

The seller can simply select the service and proceed to send the desired product quantity to the admin for fulfillment.

Go to edit product page, set a product quantity and send it to admin for fulfillment.

### How the seller sends products to the merchant

Let's see how the seller sends the product quantity to the merchant so that he can fulfill the order for the customers.

Go to the products >> product listing >> click on edit:

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Product-_-Seller-•-Multivendor-MarketPlace.jpg)

Click on More Action >> Send It:

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Edit-Product-_-Seller-•-Multivendor-MarketPlace.jpg)

Enter the quantity and click on send to the merchant:

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Edit-Product-_-Seller-•-Multivendor-MarketPlace-1-1.jpg)

The seller can see the products list sent to the admin in-stock products page in the product menu.

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Fulfillment-Product-_-Admin.jpg)

**PLEASE NOTE:-**
-----------------

If the admin has enabled the [Multilocation Inventory Feature](https://webkul.com/blog/shopify-multivendor-marketplace-multi-location-inventory/) & added multiple locations then,

the admin can receive the product quantity at any of the locations except custom fulfillment service location.

If the seller selects the Self Fulfillment service then the products will be fulfilled at the seller's default location.

You can also enable the "Send to merchant" configuration in the case of "Fulfilled by both" and "Fulfilled by Admin".

This configuration will allow the seller to send the ordered product to the admin and then they can manage the fulfillment upon receiving the product from the seller.

![send-to-merchant-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/send-to-merchant-1-1200x560.png)

In the case of **Fulfilled by both** when you go to the 'Edit product page' and select 'Admin fulfillment' then there are two new options in send to merchant.

1.  Before Delivery - In this case, the flow will be similar to the same mentioned above in the blog
2.  After Delivery - For this case, Please continue to read below to understand the full flow

"Before delivery" and "After delivery" options would also be available in case of **Fulfilled by Admin** selected in fulfillment configuration.

![ss1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/ss1.png)

When an order is placed for products that have **After Delivery** selected, on admin side order will show as "Waiting for Approval".

![waiting-for-approval](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/waiting-for-approval-1200x487.png)

And at the Seller side, they would get the option of **Ship to Merchant** as shown below:

![ahio-to-merchant-](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/ahio-to-merchant--1200x581.png)

Clicking on button, seller can update the merchant about the Shipped product by providing the necessary details as shown below:

![details](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/details.png)

Once Seller ships product to Merchant, Admin will get an option to confirm that they received the order from Seller.

![confirm-](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/confirm--1200x519.png)

Once the Merchant confirms it then they can fulfill the order. Please refer to the below image.

![fufill](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/fufill-1200x505.png)

Admin can also check these order lists by going to Admin Panel >> Orders >> Order Stock Management list.

Here admin would be able to see the order status and other details as shown below:

![list](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/list-1200x406.png)

### Shopify Store Front

If the seller selects the product "fulfilled by the admin" then it will be shown on the product page.  
Please refer to the screenshot below:  

![Multivendor Marketplace for Shopify: Stock Management](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Designer-Shoes-–-stock-management-demo.png)

### Demo

Follow the below links to use the demo of the Stock Management Feature app: [https://stock-management-demo.myshopify.com/pages/multi-vendor-stock-management](https://stock-management-demo.myshopify.com/pages/multi-vendor-stock-management)
