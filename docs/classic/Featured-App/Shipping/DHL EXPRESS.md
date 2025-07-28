---
title: DHL EXPRESS SHIPPING
description: DHL EXPRESS SHIPPING
date: 2025-07-18
author: Chirag Tyagi
---
[Multi-Vendor Marketplace for Shopify](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/) is here with another marketplace shipping feature app, i.e., **DHL Express**.

Using this featured app, the merchants can allow sellers to ship your goods through **DHL** using multiple carrier shipping methods and then print **Shipping Label**.

**CHARGES:**

This feature will have an additional charge of **USD 10 per month** over & above your current multivendor marketplace plan.

**NOTE:**

This feature app is available only with the Multivendor **Pro** **Plan** ($60/month). Moreover, you need to enable the [**Shipping**](https://webkul.com/blog/shopify-multivendor-marketplace-shipping/) add-on (free) from the ‘featured apps’ section of the app.

Above all, access to Shipping requires your Shopify store to be on the plan that supports **Real-Time Carrier-Calculated Shipping**.

### Installation

The admin needs to visit the **multi-vendor marketplace admin panel** > click on the **three dots** > click on the **feature apps**. Further, **enable** the **DHL Express** feature app.

![Feature_Apps_Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Feature_Apps_Admin-1200x597.png)

Furthermore, **agree** & **approve** the charges to complete the installation process.

### Configuration: Admin End

Firstly, the admin needs to enable this shipping method from the shipping configuration. So, for this, visit:

**Multivendor Marketplace Admin Panel** > **Configuration** >**Shipping Configuration**. 

Click on the **three dots** under the **Action** menu & further, click on **enable**.

![Configuration_Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Configuration_Admin-1200x597.png)

Moving on, the admin needs to configure the DHL Express method. So, for this, click on **Configure Shipping**. Refer:

![Configuration_Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Configuration_Admin-1-1200x597.png)

### DHL Express Configuration

On the following page, configure the following details:

*   Sandbox Mode: If you want to test the functionality of this shipping method, keep the sandbox mode enabled. Remember, shipping labels won’t be generated in testing mode.
*   Automatic shipping label generation: By enabling this, the shipping label will be automatically generated at the tie of order fulfillment.
*   Message Reference Key: Enter Message Reference Value and it should contain a unique reference to the message so that trace of a particular message can easily be carried out. It must be a minimum length of 28 and a maximum of 32.
*   Site ID: Enter SiteID value provided by DHL Express Provider.
*   Password: Enter Password value provided by DHL Express Provider.
*   Shipper Account Number: Enter Shipper Account Number Provided by DHL Express Provider.

![screencapture_shopify_trunk_webkul_shopify_mp_admin_index_php_2020_05_14_17_10_35](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/screencapture_shopify_trunk_webkul_shopify_mp_admin_index_php_2020_05_14_17_10_35-1192x1024.png)

*   Choose Domestic Service:
    *   Same Day
    *   Domestic Express
    *   Express 12:00
    *   Express Worldwide
*   Choose International Service:
    *   Express Worldwide
    *   Medical Express
    *   Express 12:00
    *   Express 10:30
*   Usage as:
    *   Fulfillment
    *   Both Fulfillment and Shipping
*   Choose Weight Unit:
    *   Kilogram (KG)
    *   Pound (LB)
*   Choose Lenght Unit:
    *   Centimeter (CM)
    *   Inch (IN)
*   Shipping label cost is borne by: Choose who will bear the shipping label charges, the admin, or the seller. (This is an extra cost apart from what the customer has paid.)
*   Pickup Days: Enter the minimum number of days within which the pickup can be done.
*   Pickup Time: We update the time slots as per Pacific Time (PT) that is 7 hours lesser than the time you choose.

![screencapture_shopify_trunk_webkul_shopify_mp_admin_index_php_2020_05_14_17_10_35-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/screencapture_shopify_trunk_webkul_shopify_mp_admin_index_php_2020_05_14_17_10_35-1-1200x751.png)

If you want your seller to add there DHL credentials then enable this configuration:

![image-6](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/image-6-1200x597.png)

### Set Shipping Method For Sellers:

The admin can further set the shipping methods for his sellers.  
Go to **multi vendor marketplace admin panel** > **Sellers** > **Seller Listing** > **Edit** (under **Action**). 

On the edit seller page, the admin will have the following block from where he can enable/disable/set as default:

![Edit_Seller_Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Edit_Seller_Admin-1200x597.png)

Further, the admin can view all the sellers which are using this shipping method by going to **multi vendor marketplace admin panel** > **configuration** > **Shipping** **Configuration**:

![Configuration_Admin-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Configuration_Admin-2-1200x597.png)

The redirected page:

![screencapture_shopify_trunk_webkul_shopify_mp_admin_index_php_2020_05_14_17_31_19](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/screencapture_shopify_trunk_webkul_shopify_mp_admin_index_php_2020_05_14_17_31_19-1200x775.png)

Here, clicking on the ‘Edit’ button for a particular seller will redirect you to the ‘Edit Seller’ page

From where you can disable the following shipping method for that seller (as shown previously in this blog).

### Make **Shipping** **Address Phone Number** Mandatory

To use this feature add-on, the admin needs to make the **shipping** **address phone number mandatory** at the time of **checkout**.

So, to do this, go to **Shopify Backend** > **Settings** > **Checkout** > Under **Form Options**, make **Shipping** **address phone number** as **Required**:

![133](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/09/demo-store-Checkout-Shopify-1200x597.png)

### Configuration: Seller End

Further, the seller can configuration DHL Express from his panel.

Go to **Multi-Vendor Marketplace Seller Panel** > **Configuration** > **Shipping Configuration**\> **Enable**/**Disable** the shipping:

![Shipping_Configuration_Seller_•_Multivendor_MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Shipping_Configuration_Seller_%E2%80%A2_Multivendor_MarketPlace-1200x597.png)

Furthermore, the seller can set the shipping method as **by-default** so that every single product created by him will have **DHL** as the **by-default shipping method**.

Clicking on ‘**Set As Default**‘ will give you the following dialogue box:

![Shipping_Configuration_Seller_•_Multivendor_MarketPlace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Shipping_Configuration_Seller_%E2%80%A2_Multivendor_MarketPlace-1-1200x597.png)

Now, the seller needs to visit **Configuration** > **DHL Express Configuration**: Enter the required details. (This section will only appear if the admin has allowed the sellers to enter their credentials.)

![image-7](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/image-7-1185x1024.png)

#### Set Default Shipping Method For Products

*   For all products (old and new)
*   Only for new products
*   For products that don’t have any shipping method on

If not this, the seller can set the shipping method on individual products while adding/editing them.

So, go to **Multi-vendor marketplace seller panel** > **Products** >**Product Listing** \> **Add**/**Edit** the Product:

![Screenshot_from_2020_05_14_17_45_51](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Screenshot_from_2020_05_14_17_45_51-1200x591.png)

### **Global Configuration**

Further, click on the **Global Configuration** menu:

![Shipping_Configuration_Seller_•_Multivendor_MarketPlace-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Shipping_Configuration_Seller_%E2%80%A2_Multivendor_MarketPlace-2-1200x597.png)

So, from here, the seller can do the **SHIPPING PACKET CONFIGURATION**:

![screencapture-shopify-trunk-webkul-shopify-mp-index-php-2020-05-14-17_40_04](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/screencapture-shopify-trunk-webkul-shopify-mp-index-php-2020-05-14-17_40_04-1200x978.png)

Enter the shipping packet configurations & pickup time & days for DHL Express shipping.

**NOTE**: It is mandatory to add product weight while creating one.

### Shopify Store Frontend

Likewise, the customer will have an option to select the shipping method as per configured from the backend after entering the information:

![Shipping_Coco_Cleen_Checkout-1-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Shipping_Coco_Cleen_Checkout-1-3-1200x597.png)

### Shipping Label Generation

Seller will have an option to generate the shipping label from their seller panel. Also, shipping labels can only be generated for **fulfilled orders**.

**Fulfilling order via DHL Express**:

Go to **Multi-vendor marketplace seller panel** > **Orders** > **Order Listing** > **View** (under **Action**). Select the method of order fulfillment as **DHL** and fulfill the order.

![Order_Details_Seller_•_Multivendor_MarketPlace-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Order_Details_Seller_%E2%80%A2_Multivendor_MarketPlace-2-1200x597.png)

As soon as the order will be fulfilled, the shipping label will be automatically downloaded.

![Order_Details_Seller_•_Multivendor_MarketPlace-1-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Order_Details_Seller_%E2%80%A2_Multivendor_MarketPlace-1-3-1200x597.png)

(i)

![screencapture_mansi_store_2_sp_seller_webkul_index_php_2020_05_14_19_23_57](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/screencapture_mansi_store_2_sp_seller_webkul_index_php_2020_05_14_19_23_57-1200x863.png)

(ii)

Moreover, if you again want to download the shipping label, go to ADDITIONAL ORDER DETAILS, click on **Actions** > **Print Shipping Label**:

![Order-Details-Seller-•-Multivendor-MarketPlace-4](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/12/Order-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-4-1200x597.png)

Furthermore, this is how the shipping label will be downloaded in pdf form:

![Screenshot_from_2020_05_14_19_31_41](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Screenshot_from_2020_05_14_19_31_41.png)

![Screenshot_from_2020_05_14_19_31_49](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Screenshot_from_2020_05_14_19_31_49.png)

