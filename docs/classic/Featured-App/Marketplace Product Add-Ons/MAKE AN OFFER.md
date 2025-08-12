---
title: MAKE AN OFFER
description: MAKE AN OFFER
date: 2025-08-04
author: Chirag Tyagi
---

We are here with another featured app "Make an offer" within the [Multivendor Marketplace for Shopify](https://store.webkul.com/Shopify-Multi-Vendor-Marketplace.html).

You can create "Make an Offer" products and get the request quotes from the customers on any of those products within the [Multivendor Marketplace for Shopify](https://marketplace-doc.webkul.com/classic/Introduction/).

And as you have all the details of your customers to easily contact them and pursue them for the purchase.

This app will help you to increase the conversion rate as well as reduce the abandoned cart on your store.

With "Make an Offer" app, you can improve sales and retain customers by providing them with amazing offers.

This featured app will cost you **10$ per month** apart from the monthly cost of the Multivendor Marketplace for Shopify app.

Once you enable the feature app, you will get some additional features.

### Features

*   Help to convert your store visitors to customers by providing the best offers.
*   Admin can enable this "Make an offer" feature for the sellers.
*   Both admin and Sellers can create "Make an Offer" products.
*   It helps to send the email notification to the seller/admin as per the app configuration.
*   We provide you the option of label translation, you can change the label on your own.
*   The seller can get the right to disable the "Add to cart" button and add the "Request a quote" option for the product.
*   You can edit the field in "Make an offer" for the customer.

**The video tutorial is available now check below:**

### How to activate the "Make an offer" App

You can enable this feature from the "featured app" menu of the Multivendor Marketplace for Shopify app.

Just click on the enable button and use this feature on your store. Which will cost you 10$ USD per month in addition to the Multivendor app plan.

Dashboard>> Feature Apps>> Make an offer>> Click on **Enable** button.

![Make an Offer](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot-36.png)

Once you enable the 'Make an Offer' feature within your app, you accept the additional monthly charges for this feature.

Which the system adds to the Multivendor Marketplace for Shopify app charges.

![Make an Offer2](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Screenshot3-1.png)

### How to Create "Make an Offer" Products

Both admin and Sellers can create "Make an Offer" Products from their respective panel. You can visit the "Products" section of the Multivendor Marketplace for Shopify app.

Clicking on the "Add Product" button on the "Product Listing Page", choose the product type as "Make an Offer" product and fill the rest of the details to create a product.

![Make an Offer3](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Screenshot-11.png)

**Admin Panel:**
----------------

Similarly, Your sellers too can create "Make an Offer" Products from the "Product" section of the Multivendor Marketplace for Shopify app.

![Make an Offer4](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Screenshot-1-5.png)

**Seller Panel:**
-----------------

![Make an Offer5](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Screenshot-2-6.png)

Once you create the 'Make an Offer' product, the system lists it on the 'Product Listing' page.

### Front End Display

In order to apply this “Make an offer” feature on the products, seller end and on the customer end, simply copy and paste the following codes in the respective liquid files on your Shopify store.

1. To display the “Make an offer” button on the front end

->> Copy the below-given code into the product.liquid template(or product-template,if exist)
```liquid
<div id="wk\_make\_an\_offer" data-pid ="{{product.id}}" data-vid ="{{variant.id}}" {% if customer.id %} data-cid ="{{customer.id}}"{% endif %} style="display:none; padding:5px;"></div>
```
2. To display the customer offer request button on the customer account page

->> Copy the below-given code into the customer/account. liquid template
```liquid
<div id="wk\_make\_an\_offer\_div" style="clear: both!important; margin:10px 0!important;"><input id="wk\_mao\_cid" type="hidden" value="{{ customer.id }}">
```
3. To hide the "Add to cart" button on your store's product description page

>> Copy the below-given code into the product. liquid template
```liquid
<{% unless product.tags contains 'wk\_rfq' %}    {% endunless %}
```
### "Make an offer" Configurations

Once you enable the 'Make an Offer' feature in your Multivendor Marketplace for Shopify app, you can configure it on the admin end, seller end, and customer end.

Let us understand this one by one.

### Admin End Configuration

After enabling this feature called "Make an offer", you will get three new menus in the Make an offer configuration section of the app i.e.

General Configuration, Label Configuration, and Liquid File Configuration.

![Make an offer configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Make-An-Offer-Configuration-Admin.png)

**General Configuration**
-------------------------

From the below-specified screenshot, you can have the direct way to configure general details about "Make an offer".

Firstly, you need to allow settings to "Admin", "Seller" or "Both" and select who will manage the offer requests of the customers.

Now, you need to choose where you want to show the details of the offer requests either on each **product page** (individually) or on the **cart page**.

Have a look:

![Screenshot2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/Screenshot2-1200x610.png)

*   **Auto-draft enables:** By enabling this configuration, the system automatically creates the requested product as a draft order after the admin and seller accept the offer.

**NOTE:**

If you disable the automatic draft order functionality, then you have to manually remove the checkout button from the offer accept mail configuration.

*   **Auto-create invoice:** The admin can enable this configuration to create a draft order as soon as the customer accepts the request/offer (offer price + shipping cost).  
    The creation of an automatic invoice includes the offer price and the shipping cost of the product.
*   **Allow extra price:** Enable this configuration to allow customers to pay more than the product's actual price( as per the customer's choice).
*   **Allow counter price:** This tab allows the admin to counter the price at the time of receiving offers from the customer side.  
    Once enabled, the admin or seller can set the status to pending and request another price or negotiate with the buyer.

**For example,** A customer makes an offer for a product at 70$ and the product cost is 100$.

But the seller/admin asks for 90$ for the product by adding a counter price, and the status will be pending.

If customers agree to buy for 90$ then they can accept. And if not, they can deny by clicking on deny.

![tgh](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/05/tgh-1200x513.png)

*   **Allow shipping price:** By default, this configuration is enabled. If the admin wants to disable the shipping rate, then the admin can disable the tab, and shipping will not be applicable in the customer offer.

![General configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/makeanoffer2-1200x572.webp)

*   **Allow a seller to add a minimum percentage for offer price (product-wise)**  
    Admin can enable this configuration to allow sellers to set a minimum offer price percentage for each product separately.  
    For example, if a product costs ₹500 and the minimum is set to 10%, then the lowest offer allowed will be ₹50. So, if a customer enters an offer below ₹50,  it will show that the minimum value should be 50.
*   **Allow seller to add a global minimum percentage**  
    By enabling this configuration admin can allow sellers to set a default global minimum percentage (%) that will automatically apply to all their products.

**NOTE:-  
**If a seller has enabled both global and product-wise minimum offer settings, the product-wise setting will be given priority.

However, if the product-wise minimum offer price is not configured, then the global minimum offer price will be applied.

*   **Commission Calculation on Offer Price**: If the admin enables this configuration, the system calculates the commission based on the offer price instead of the original total price.

**Form Configuration**
----------------------

![Make an Offer9](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Screenshotc.png)

NOTE:- Here, you have two fields i.e. "visible" and "required" to check or uncheck as per your need.

But if you want to uncheck any of the two fields, just remove the field variables manually from the mail configuration.

Also Note:- If you make any changes in the "**Form Configuration**" then you **need to regenerate the liquid file** in the app. Otherwise, no changes will appear on the front end.

**Label Configuration**
-----------------------

Here, you can configure label details about the "Make an offer" feature of the Multivendor Marketplace app. You have a screenshot below to understand it well.

![Make an Offer10](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Screenshote.png)

**Liquid File Configuration**
-----------------------------

In order to display "Make an offer" form and button on the front end, all you need to do is to copy the below-given code and paste it to the product.liquid (or product-template,if exist) template.

{% capture rfq\_snippet\_content %}{% include "rfq-form" %}{% endcapture %} {% unless rfq\_snippet\_content contains "Liquid error" %} {{ rfq\_snippet\_content }} {% endunless %}

Before this, you first need to generate a liquid file just by clicking the "Generate Liquid File" button.

![Make an Offer11](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Screenshotd.png)

This is the complete procedure that will help the admin to configure the details about the "Make an offer" feature.

Now, once the customer submits the make an offer request, admin can view the request in the "Make An Offer Request" menu in the Multivendor app(if you set the configuration like this).

Now, admin can view all the requests from here and view the offer details just by clicking on the open button.  
Admin can also export the details by simply clicking on export details button.

![ankit](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/05/ankit-1200x506.png)

Once you click the open button, "Make an offer Request Description" page appears. Admin can either accept or reject the customer's request by selecting the status.

![ak1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/05/ak1-1200x577.png)

If admin enable the

![ak65](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/05/ak65-1200x572.png)

*   Once the admin accepts the request, then the customer will receive a notification to make the payment.
*   If the admin rejects the request, then the customer can again request for the offer.  
*   If the admin enables the tab (for counter price yes/no) admin can negotiate with the customer and mark the status as pending.

### Seller End Configuration

After logging into the account on the app, the seller can view the customer's request from the "Make an Offer" request menu in the product section of the app.

![Make an Offer15](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Screenshotm.png)

There you will get an "Open" button which helps the seller to view the details of the requests made from the customer.

Just click on it and view the received requests or click on three dots in action as shown below:

![sdsds](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/01/sdsds-1200x464.png)

Request details are shown like this (as shown in the screenshot below)

![y56](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/05/y56-1200x526.png)

Here, the seller can manage the status of the request offered by the customers. He/she can either accept or reject the "Make an offer" request.

Also a new option of "Shipping cost" is also provided to you from where the seller can add the shipping cost to the requested price.

If the seller checks the shipping cost option. And adds some shipping amount and changes the status to accept the customer's request then,

Once the client saves the changes, the system notifies the customer about the offer.

![yu567](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/05/yu567-1200x205.png)

But if you don't want the seller to add any shipping fee and accept or reject the offer from the client, then the seller can simply leave the shipping cost checkbox unchecked.

![yu7](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/05/yu7-1200x584.png)

If the seller enables the tab (for counter price yes/no) admin can negotiate with the customer and mark the status as pending.

**Important Note:-** If the "auto draft enable" button is enabled at admin end then draft order is created once the admin/seller accepts the request and

Then the customer requests the invoice from his end.

But if the shipping cost option is not checked, then the draft order is created once the customer "requests the invoice".

### **Convert Normal products to Make an Offer product in bulk** 

If a seller wants to convert their "normal products" into "Make an Offer" products in bulk, they can do so from their panel.

Navigate to **Products > Products Listing**, select the products to be converted, click the **Bulk Action** button, and choose **Convert to Make an Offer Product** from the dropdown menu.

![Normal to Make an offer product.](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/01/makeanofferup-1200x745.webp)

### Customer End

 Simply by clicking the "Make an Offer" button of any product on the product page, the customer can make a request for that particular product.

![make an offer product](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Men-s-Shirt-–-multivendor-makeanoffer.png)

Once the customer taps this "Make an offer" button, an offer detail form will appear.

The customer just needs to fill the required details in that form and offer a request by clicking the submit button.

![submit request](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Men-s-Shirt-–-multivendor-makeanoffer-1.png)

Both the admin and the seller can access the request through the 'Make an Offer Request' menu in the product section of the app.

![Make an Offer125](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Screenshot1-3.png)

![Make an Offer127](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Make-An-Offer-Request_-Admin-2-1.jpg)

The seller can either accept or reject the request as mentioned above.

The customer can also view the request made by him/her in the "My Account" section of the store.

If the seller/admin rejects the request made by the customer, the whole process ends here.

But if the seller/admin accepts the request, the same will be visible to the customer's account on the store. The customer will also receive the mail regarding the same.

**REQUEST ACCEPTED**
--------------------

![Make-An-Offer-Request-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Make-An-Offer-Request-Admin-1200x627.png)

The same will reflect to the customers at their respective "My Account" section.

**NOTE:- As soon as the customer submits the form, the customer will get his account on the store.**

**The customer will also receive a mail regarding the same if not registered on the store.**

**MY ACCOUNT**
--------------

Now, there will be two options for the customer. He/she can either deny the request or can request an invoice. For this, the seller needs to send an invoice.

Once the customer request for invoice, "invoice created" will be the status. Now, the customer can checkout and purchase any product.

![Screenshot-88](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Screenshot-88.png)

Clicking the Make an Offer button, the customers can view the offer request details.

**Before the offer gets accepted**
----------------------------------

![Screenshot-91](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Screenshot-91-1200x440.png)

**After the offer gets accepted**
---------------------------------

The customer can deny the request or request for an invoice.

![Screenshot-92](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Screenshot-92-1200x458.png)

After that, the customer can directly proceed to checkout from the "My Account" section.

![Screenshot-94](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Screenshot-94-1200x493.png)

Now, when the customer clicks the checkout button, the customer will be straightaway redirected to enter the information before payment & checkout.

### Offer Requests on Cart Page

Selecting the "**Cart Page**" type from the "**Make an Offer Configuration**". You can allow the buyers to add "make an offer" products (of multiple sellers) to the cart page.

So they can request quotes to each seller (whose products are added to the cart) in a go.

Now, a request will go out to sellers that this buyer wants more information on their "Make an offer" products.

The sellers will be receiving the request quotes from different buyers and will contact them outside the app.

![Screenshot2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/Screenshot2-1200x610.png)

**POINTS TO BE NOTED:-**

*   The buyer **must log-in** to the admin's store.
*   No product prices will be shown on the cart page.
*   In this case, all the products added to the cart page will be treated as "Make an offer" products.
*   "**Contact Seller" button** will appear on the cart page instead of the "Checkout" button.

![Screenshot-70](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/Screenshot-70-1200x507.png)

Clicking the "Contact Seller" button. So the sellers will receive the quote (via email) requested by the buyer for the cart products.

Now, the seller will contact the buyer through email outside the app.

And the buyer will see a confirmation message that the seller will contact him/her once the quote request is received.

That's all about this feature of the Multivendor Marketplace app for Shopify. Now, the store owner can get the customer's requests which help him to offer the desired product to the customers.

Check the Demo
--------------

Check the Demo of Make an Offer App:  
[https://multivendor-makeanoffer.myshopify.com/products/travel-bags-1](https://multivendor-makeanoffer.myshopify.com/products/travel-bags-1)
