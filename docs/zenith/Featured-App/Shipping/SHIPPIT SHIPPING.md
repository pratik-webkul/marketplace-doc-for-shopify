---
title: SHIPPIT SHIPPING
description: SHIPPIT SHIPPING
date: 2025-07-18
author: Chirag Tyagi
---
[Multi-Vendor Marketplace for Shopify](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/) is now Integrated with another shipping add-on: **Shippit**

What is Shippit Shipping?
-------------------------

[Shippit](https://www.shippit.com/) is a web-based, multi-carrier shipping solution for e-commerce retailers. Designed to streamline the fulfillment process.

This feature will allow you to ship your goods via multiple carrier shipping methods. Moreover, you can automatically generate shipping labels.

**NOTE**:

The **Shippit** feature app is available only with the Multivendor **Pro** **Plan** ($60/month). Moreover, you need to enable the [**Shipping**](https://webkul.com/blog/shopify-multivendor-marketplace-shipping/) add-on (free) from the ‘feature apps’ section of the app.

Above all, access to Shipping requires your Shopify store to be on the plan that supports **Real-Time Carrier-Calculated Shipping**.

Also, you can enable only one shipping method within Shippit to calculate the shipping rates.

**CHARGES**:

This feature will have an additional charge of **USD 10 per month** over & above your current Multivendor Marketplace plan.

SHIPPIT SHIPPING FEATURE APP IS AVAILABLE **BOTH FOR RATE CALCULATION & FULFILLMENT**.

Installation
------------

The admin needs to visit the **Multi-vendor Marketplace Admin panel** > click on the **three dots** > and click on the **feature apps**. Further, **enable** the **Shippit** feature app.

![Enable Shipping](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/tesss.webp)

Furthermore, agree & approve the charges:

![Shippit  Shipping payment](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/testttt-2.webp)

Configuration: Admin End
------------------------

Firstly, the Admin needs to enable this shipping method from the shipping configuration. So, for this, visit:

**Multivendor Marketplace admin panel** > **Configuration** > **Shipping Methods configuration**. 

Click on the **three dots** under the **Action** menu & further, click on **Enable**.

**Note**: Kindly choose only those shipping services that you need. Don’t keep all the services selected otherwise it creates a delay in retrieving shipping rates at the storefront.

![Shipping method configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/testaa-1200x485.webp)

Moving on, the admin needs to configure the Shippit shipping method.

So, for this, either click on **Configure Shipping** or go to **Multi vendor marketplace admin panel** > **configuration** > **Shippit Configuration**

![Shippit Shipping](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/test2.webp)

Configure Shippit
-----------------

On the following page, configure the following details:

*   **Sandbox Mode:** If you want to test the functionality of this shipping method, keep the sandbox mode enabled. Remember, shipping labels won’t be generated in testing mode.

*   **Extra Shipping Charge Enable:** If you want to charge an additional shipping amount from the customer, you can configure it as either a percentage or a fixed amount.
    *   **Extra Shipping Charge Type:** Here you can select the percentage or a fixed amount from the dropdown.
    *   **Extra Shipping Charge:** You can now enter the as either a percentage or a fixed amount.

*   **Allow Seller to configure their own Shippit account:** In case, if you want your seller to configure their own Shippit account then, you can let sellers add their details & fulfill them instead of yourself adding the details.

*   **Shippit Access Token:** If the above config is disabled then Admin can enter their Shippit Access Token provided by the Shippit and configure their account.

*   **Shipping label cost is borne by:** Choose who will bear the shipping label charges, the admin, or the seller. (This is an extra cost apart from what the customer has paid.)

![Shippit Configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/testab-1200x665.webp)

![Shippit Configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/testabc-1.webp)

Configuration: Seller End
-------------------------

Further, the Seller can configure Shippit from his/her panel.

Go to **Multi vendor Marketplace Seller panel** > **Configuration** > **Shipping Methods configuration**\> **Enable** the Shippit shipping:

![Seller shipping method config](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/testabcd-1200x657.webp)

Furthermore, the seller can set the shipping method as **by-default**, so that every single product created by him will have **Shippit** as the **default shipping method**.

![Set as Default Shipping](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/testtabc-1200x657.webp)

### In case the Admin has allowed the sellers to add their details:

For this Admin will have to enable the "Allow Seller to Configure their own Shippit Account" from the Shippit configuration on the Admin Panel.

![Seller Shippit config](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/testttab-1200x613.webp)

Once enabled the seller will have the Shippit Configuration option under the Configuration Menu on the Seller panel.

Here, the seller can set up their Shippit account by entering the Shippit Api Key provided By Shippit.

![Shipping API Key](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/tesas-1200x613.webp)

### Set Default Shipping Method For Products

*   For all products (old and new)

*   Only for new products

*   For products that don’t have any shipping method on

If not this, the seller can set the shipping method on individual products while adding/editing them.

So, go to Multi-vendor Marketplace Seller panel > Products >Product Listing > Add/Edit the Product:

![Shipping method on product edit page](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/testacb-1200x613.webp)

**Important Points to Note:**

Configuring the global settings is crucial, as the system automatically uses the global configuration if a product's dimensions are not provided.

So, for this click on the Global Configuration menu:

![Global config](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/testth.webp)

So, from here, the seller can do the Global configuration:

![Global config](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/testtr.webp)

**NOTE**: It is mandatory to add product weight while creating one.

Additionally, kindly mark the Required Shipping mandatory for all the products, if not marked for any product then the shipping will not the applied to that specific product.

![Required Shipping](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/tets-1200x559.webp)

Shopify Store Frontend
----------------------

The customers will have the option to choose a shipping method based on the configurations set in the backend after providing their information.

![Checkout page](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/checkout-4.webp)

#### Admin End Order detail page:

The admin can also check his or her shipping charges commission applied above the shipping charge as per the configuration done by the Admin in the Shippit configuration.

For this, Go to Admin Panel > Orders > Order Listing > Now view the order.

![Admin shipping comission](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/ysb.webp)

Order Fulfillment:
------------------

Once the order is placed, the seller will be fulfilling the order on the seller panel, and selecting the Shippit shipping as the fulfillment method.

Go to **Seller panel** > **Orders** > **Order Listing** > **View** (under **Action**). Select the method of order fulfillment as **Shippit** and fulfill the order.

![Order Fulfillment by SHippit](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/ytes.webp)

_Note: The rates shown during order fulfillment changes and appear differently in the Shippit dashboard after the order is placed._

### Shipping Label Generation and Manifest Print

Once the order is fulfilled the seller will be able to see the Tracking URL and Tracking number on the order detail page.

Also, Sellers will have the option to generate the shipping label from their seller panel. Also, shipping labels can only be generated for **fulfilled orders**.

![Order detail page](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/rtest.webp)

Now, If the seller wants to download the Shipping label then click on Actions > Print Shipping Label:

![Shipping label](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/oihf-1.webp)

Additionally, It is the same for the print Manifest, click on Actions > Print Manifest:

![Manifest report](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/jkl-3.webp)