---
title: SHIPMONDO SHIPPING
description: SHIPMONDO SHIPPING
date: 2025-07-18
author: Chirag Tyagi
---
[Multi-Vendor Marketplace for Shopify](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/) is here with another marketplace shipping feature add-on, i.e., **Shipmondo**.

**[Shipmondo](https://shipmondo.com/)**: They help you ship goods worldwide across carriers from one platform.

Making it possible for you to offer different shipping options to your customers. Note that currently, we only support Postnord Shipping within Shipmondo.

Using this featured app, merchants can allow vendors to ship their goods via multiple carrier shipping methods and then print the shipping label.

**Charges:** This feature will have an additional charge of **USD 10 per month** over & above your current multivendor marketplace plan.

**Before You Install**: It is mandatory to have **[real-time carrier calculated shipping](https://help.shopify.com/en/manual/shipping/setting-up-and-managing-your-shipping/enabling-shipping-carriers)** within your Shopify store.

This is a requirement defined by Shopify for your store to retrieve shipping rates from third-party sources, such as this shipping app.

This feature app is available only with the Multivendor **Pro** **Plan** ($60/month). Moreover, you need to enable the [**Shipping**](https://webkul.com/blog/shopify-multivendor-marketplace-shipping/) add-on (free) from the ‘featured apps’ section of the app.

### Installation

Enable the following app by visiting:

*   Multi-Vendor **Admin Panel**
*   From the Dashboard, hover over the **three dots** on the top-right of the page
*   Click on **Feature Apps**
*   Search for ‘**Shipmondo**‘ & click on ‘**Enable**‘
*   After accepting the charges, you’ll be good to configure the app!

![Feature-Apps-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Feature-Apps-Admin-1200x597.png)

### Configuration: Admin End

Firstly, the admin needs to enable this shipping method from the shipping configuration. So, for this, visit:

**Multivendor Marketplace Admin Panel** > **Configuration** > **Shipping Configuration**. 

Click on the **three dots** under the **Action** menu & further, click on **enable**.

![Configuration-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Configuration-Admin-1200x560.png)

Moving on, the admin needs to configure the Shipmondo. So, for this, click on **Configure Shipping** as shown in the image above,

or visit **Multivendor Marketplace Admin Panel** > **Configuration** > **Shipmondo Configuration**. Refer:

![Shipmondo-Configuration-Admin-1-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Shipmondo-Configuration-Admin-1-2-1200x597.png)

### Shipmondo Configuration

On the following page, configure the following details:

*   Shipmondo API Username
*   Shipmonde API Key
*   Choose shipping service that you want to allow for shipping:
    *   MyPack Home
    *   MyPack Collect  
        With this, you can also configure the frontend labels.
*   **Sandbox Mode**: If you want to test the functionality of this shipping method, keep the sandbox mode enabled. Remember, shipping labels won’t be generated in testing mode.

![Shipmondo-Configuration-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipmondo-Configuration-Admin-1200x948.png)

*   **Automatic shipping label generation**: By enabling this, the shipping label will be automatically generated at the tie of order fulfillment.
*   **Automatic Fulfilment**: By enabling this configuration, the order will be fulfilled automatically.
*   **Shipping label cost is borne by**: Choose who will bear the shipping label charges, the admin, or the seller. (This is an extra cost apart from what the customer has paid.)
*   **Customer Cut-off amount**: Enter the amount below which if an order is placed then we'll deduct a fixed amount for the shipping from the customer. Use 0 to disable this option.
*   If the seller is bearing the shipping charges, the admin needs to fill in the following details:
    *   **Cut off amount**: If the order amount for the particular seller gets over this value then admin can deduct a fixed amount for the label from seller earnings.
    *   **Amount deduct for the label**: The amount to be deducted from the seller earning when the cut-off amount is reached.
*   Select country
*   Select the shipping method

![Shipmondo-Configuration-Admin-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipmondo-Configuration-Admin-2-1200x789.png)

### Set Shipping Method For Sellers

The admin can further set the shipping methods for his sellers. Go to **Multi vendor marketplace admin panel** > **Sellers** > **Seller Listing** > **Edit** (under **Action**). 

On the edit seller page, the admin will have the following block from where he can enable/disable/set as default:

![Edit-Seller-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Edit-Seller-Admin-1200x597.png)

Further, the admin can view all the sellers which are using this shipping method by going to **Multi vendor marketplace admin panel** > **Configuration** > **Shipping** **Configuration**:

![Configuration-Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Configuration-Admin-1-1200x597.png)

The redirected page:

![Shipping-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Shipping-Admin-1200x821.png)

Here, clicking on the ‘Edit’ button for a particular seller will redirect you to the ‘Edit Seller’ page

from where you can disable the following shipping method for that seller (as shown previously in this blog).

### Make **Shipping** **Address Phone Number** Mandatory

To use this feature add-on, the admin needs to make the **shipping** **address phone number mandatory** at the time of **checkout**.

So, to do this, go to **Shopify Backend** > **Settings** > **Checkout** > Under **Form Options**, make **Shipping** **address phone number** as **Required**:

![133](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/09/demo-store-Checkout-Shopify-1200x597.png)

### Configuration: Seller End

Further, the seller can configuration Shipmondo from his panel.

Go to **Multi-Vendor Marketplace Seller Panel** > **Configuration** > **Shipping Configuration**\> **Enable**/**Disable** the shipping:

![Shipping-Configuration-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Shipping-Configuration-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)

Furthermore, the seller can set the shipping method as **by-default** so that every single product created by him will have **Shipmondo** as the **by-default shipping method**.

Clicking on ‘**Set As Default**‘ will give you the following dialogue box:

![Shipping-Configuration-Seller-•-Multivendor-MarketPlace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Shipping-Configuration-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x597.png)

Set Default Shipping Method For Products:

*   For all products (old and new)
*   Only for new products
*   For products that don’t have any shipping method on

If not this, the seller can set the shipping method on individual products while adding/editing them.

So, go to **Multi-vendor marketplace seller panel** > **Products** >**Product Listing** \> **Add**/**Edit** the Product:

![Edit-Product-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Edit-Product-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)

### **Global Configuration**

Further, click on the **Global Configuration** menu on the **Shipping Configuration** page. From here, the seller can do the **SHIPPING PACKET CONFIGURATION**:

![Shipping-Configuration-Seller-•-Multivendor-MarketPlace-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Shipping-Configuration-Seller-%E2%80%A2-Multivendor-MarketPlace-2-1200x597.png)

### Shopify Store Frontend

The customer will have an option to select the shipping method as per configured from the backend after entering the information:

![Shipping-abhishek-store2-Checkout](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Shipping-abhishek-store2-Checkout-1200x597.png)

### Shipping Label Generation

If the order fulfillment is set to automatic, the seller will receive an email. The email will have a link to download the label. Demo email:

![Screenshot-from-2020-09-03-19-59-03](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Screenshot-from-2020-09-03-19-59-03-1200x461.png)

If the orders are not set to auto-fulfillment, sellers can fulfill them manually.

Seller will have an option to generate the shipping label from their seller panel. Also, shipping labels can only be generated for **fulfilled orders**.

**Fulfilling order via Shipmondo**:

Go to **Multi-vendor marketplace seller panel** > **Orders** > **Order Listing** > **View** (under **Action**). Select the method of order fulfillment as **Shipmondo** and fulfill the order.

![Order-Details-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/Order-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)

Furthermore, this is how the shipping label will be downloaded in pdf form:

![pdk](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/09/pdk.png)
