---
title: HYPERLOCAL MARKETPLACE
description: HYPERLOCAL MARKETPLACE
date: 2025-07-25
author: Chirag Tyagi
---

[Multi-Vendor Marketplace for Shopify](https://marketplace-doc.webkul.com/classic/Introduction/) is here with another feature app called **Hyperlocal Marketplace.**

Defining Hyperlocal Marketplace:
--------------------------------

In a hyperlocal marketplace, the merchant can restrict their service area to a particular geographical region.

Since the hyperlocal ecosystem is based on the ‘near me’ concept, this makes the delivery of services/goods in a very short span of time.

The hyperlocal marketplace uses the geographical location detector for detecting the current location of the customer.

It further scans the nearest registered service providers (vendors). Therefore, making the services a faster solution in terms of delivery! [Know More](https://webkul.com/blog/shopify-hyperlocal-marketplace/).

![hyperlocalmarketplace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/07/hyperlocalmarketplace-1200x597.png)

### Installation

Enable the following app by visiting:

*   Multi-Vendor **Admin Panel**
*   From the Dashboard, hover over the **three dots** on the top-right of the page
*   Click on **Feature Apps**
*   Search for '**Hyperlocal Marketplace**' & click on '**Enable**'
*   After accepting the charges, you'll be good to configure the app!

![HYPERLOCAL MARKETPLACE ADD-ON](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Feature-Apps-Admin-3.png)

The video tutorials is available now please check below:

FZ\_yLTvmAyg

### Configuration: Admin Panel

The admin needs to configure the app by visiting:

*   Multi-Vendor **Admin Panel**
*   From the dashboard, go to **Configuration**
*   Click on **Hyperlocal Configuration** from the drop-down menus.

On the following page, you'll find these options:

![HYPERLOCAL MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Customize-Configuration-Pages-Admin-3.png)

You can change the following details as per your need:

*   Tagline 1
*   Tagline 2
*   Search Placeholder Text
*   Button Text for 'Searching Results'

(_Refer to the frontend image given above to get a reference for the following taglines._)

Furthermore, add the **Google Map Access Token**.

You'll find instructions for this on the same page.  
**Important Note:** The API key must be activated before using it on the app.

Once the Hyperlocal feature app is enabled, a "Hyperlocal" column will be visible on the Sellers >> Locations page.

![screenshot_1696414718494](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1696414718494.png)

Instruction to get Google Map Access Token:
-------------------------------------------

To get an API key:

To get step-by-step instructions with images, visit: [How to get Google API Key](https://webkul.com/blog/how-to-get-google-api-key/)

1.  Go to the [Google Cloud Platform Console](https://cloud.google.com/console/google/maps-apis/overview).
2.  Click the project drop-down and select or create the project for which you want to add an API key.
3.  Click the menu button and select **APIs & Services > Credentials**.
4.  On the **Credentials** page, click **Create credentials > API key**.  
    The **API key created** dialog displays your newly created API key.
5.  Click **Close.**  
    The new API key is listed on the **Credentials** page under **API keys**.  
    (Remember to [restrict the API key](https://developers.google.com/maps/documentation/javascript/get-api-key#restrict_key) before using it in production.)

Steps to restriction:

*   Visit **the Credentials** page, click on the created API key.
*   Now, under the heading **Application restrictions**, select **HTTP referrers (websites)**.

![Restrict-and-rename…-–-APIs-Services-–-Test-Project-–-Google-API-Console](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Restrict-and-rename%E2%80%A6-%E2%80%93-APIs-Services-%E2%80%93-Test-Project-%E2%80%93-Google-API-Console-1200x597.png)

*   Furthermore, under **Website restrictions**, click on **Add an item** & add the following referrers:
    *   Your 'myshopify' domain. Example: _https://example.myshopify.com/**\***_
    *   Your custom Shopify domain, if any. Example: _https://example.com/**\***_
    *   Lastly, _https://sp-seller.webkul.com/**\***_

**NOTE:** It is mandatory to use a wildcard asterisk (\*) at the end of each URL as shown in the above example URLs.

Next, you'll have the option to upload a **Background Banner**.

(_Refer to the frontend image given above to get a reference for the following Background Banner._)

![HYPERLOCAL MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Customize-Configuration-Pages-Admin-1.png)

Lastly, you can customize the labels of the 'Nearby Service' section page.

![HYPERLOCAL MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Customize-Configuration-Pages-Admin-2.png)

_NOTE: The number of sellers available at your location will be replaced by the #COUNT#._

### Hyperlocal Global Selling

The admin can choose whether he wants his sellers to sell their products without location restriction or not.

For this, enable the following tab under **Hyperlocal Configuration**:

![Customize_Hyperlocal_Configuration_Page_Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Customize_Hyperlocal_Configuration_Page_Admin-1-1200x597.png)

Once enabled, the sellers will get this option under their account configuration. Sellers can enable this and sell globally.

Note that those sellers who have opted this options doesn't need to enter their location or delivery radius.

![screenshot_1696416488331](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1696416488331.png)

**Important** **Point**: The global sellers will appear on every search result on the storefront.

Moreover, they will be listed after the sellers with defined locations.

### Redirect to Seller Listing Page

The admin can choose whether he wants his customers to redirect to the seller listing page after searching results for their location or to the by-default home search result page.

![Customize_Hyperlocal_Configuration_Page_Admin-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Customize_Hyperlocal_Configuration_Page_Admin-1-1-1200x597.png)

### Code-Pasting: Admin Panel

For displaying the app's related widgets on the storefront, the admin needs paste some codes. Find the codes by visiting:

*   Multi-Vendor Admin Panel
*   From the dashboard, go to **Configuration**
*   Click on **Instructions for Marketplace** from the drop-down menus.

On the following page, under the heading HYPERLOCAL MARKETPLACE, you'll have three different codes that need to be pasted in their individual template files.

All the instructions regarding code pasting will be given on the same page.

_You can also check out the following documentation: [Instructions for Hyperlocal Marketplace](https://webkul.com/blog/instructions-for-hyperlocal-marketplace-multi-vendor-marketplace-for-shopify/)_.

![HYPERLOCAL MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Instructions-Admin-2-1200x597.png)

_If you are having trouble while updating the codes, let us know by emailing at_ **_shopify@webkul.com_** _or creating a ticket for the same at_ [_**Webkul UV Desk**_](https://webkul.uvdesk.com/)_. We'll do it for you!_

### Vendor Location

The next important aspect that comes under the Hyperlocal Marketplace concept is the Vendor Location.

Each vendor needs to update his location as well as the range for his delivery service.

Mind that, in Multivendor Marketplace, the admin can also configure/edit the following details from his panel.

Vendor Location Update from Admin Panel:
----------------------------------------

If the admin wants to update the Vendor's Location, he needs to visit:

*   Multi-Vendor **Admin Panel**
*   From the Dashboard, go to **Sellers** > **Seller Listing**
*   Edit the seller whose location you want to modify by click on the **three dots** under **Action** Menu > **Edit**

On this page, under the heading Hyperlocal Configuration, the admin can **Enable** or **Disable** the location.

![screenshot_1696415540110](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1696415540110.png)

To modify the address, click on **View On Map**. A pop-up will open where you can change the **Address**, **Lattitude** & **Longitudes**. Moreover, **Maximum Delivery Distance** can also be updated.

(_Maximum Delivery Distance limit is **200**_ _km_)

![Edit-Seller-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/Edit-Seller-Admin-1200x968.png)

### Vendor Location Update from Seller Panel:

Similarly, the sellers can also update their service location & Maximum delivery Distance by visiting:

*   Multi-Vendor **Seller Panel**
*   From the Dashboard, go to **Profile** > **My Account**

On this page, the seller can change the status of the location as **Enable** or **Disable**.

Likewise, to modify the address, click on **View On Map**. A pop-up will open where you can change the **Address**, **Lattitude** & **Longitudes** + **Maximum Delivery Distance**.

(_Maximum Delivery Distance limit is **200**_ _km_)

![screenshot_1696415221659-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1696415221659-1.png)

This was all regarding the backend settings.

### Frontend: Hyperlocal Marketplace

As soon as the customer visits the storefront, he will be asked to enter the delivery location. He can also continue by using the current location Refer:

![hyperlocalmarketplace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/07/hyperlocalmarketplace-1-1200x597.png)

Once the customer clicks on 'Find Food', all the sellers delivering in that particular location will be listed like so:

![HYPERLOCAL MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/collage-2-1-1.png)

Further, customers can click on any seller they want which will take them to the seller's profile.

All the products they are selling will be listed there & orders can be placed by adding the products to the cart!

![HYPERLOCAL MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Seller-Profile-%E2%80%93-hyperlocalmarketplace.png)

Clicking on the 'Direction' button under the seller profile will give you the distance between your location & the seller's location. Refer:

![HYPERLOCAL MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/download.png)

**NOTE:**

_Your seller profile page will also be filtered according to the location._

In case the customer doesn't enter any location or no seller is available at the location entered by the customer:

The '**Add to Cart**' & '**Buy Now**' button on the product description page will get automatically disabled.

![HYPERLOCAL MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/White-Pasta-Dish-%E2%80%93-hyperlocalmarketplace.png)

The unavailable products will be highlighted in the collection section. Refer:

![Products-–-hyperlocalmarketplace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Products-%E2%80%93-hyperlocalmarketplace-1200x593.png)

### Hyperlocal with Multiple Shipping

In case you are using the [**Multiple Shipping**](https://webkul.com/blog/shopify-multiple-shipping/) feature then you will have the following two options while adding shipping methods:

*   **Radius Restriction**: To restrict the radius for the shipping method.
*   **Datepicker**: If you want your customer to add a date on the product page.

![Shipping-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Shipping-Admin-1200x597.png)

When you restrict the radius & enable the datepicker:

![collage-1-](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/collage-1-.png)

Local Shipping will be displayed in case radius is restricted

If you disable the date picker, it will not display. Also, in case you didn't restrict the radius, it will show global shipping methods:

![collage-2-](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/collage-2-.png)

Global Shipping in case radius is not restricted

Search Bar Compatibility with Hyperlocal Feature using Multiple Shipping
------------------------------------------------------------------------

By default, when a customer lands on your website & enters his/her location, filtered sellers will be listed based on the geolocation.

But if you want to restrict the customer's Shopify search for products based on the same radius, you can use this feature.

To make the Shopify search bar compatible with hyperlocal, you need to use the [**Multiple Shipping**](https://webkul.com/blog/shopify-multiple-shipping/) feature. Further, under **Hyperlocal Configuration**, enable this option:

![Customize-Hyperlocal-Configuration-Page-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/Customize-Hyperlocal-Configuration-Page-Admin-1200x597.png)

Note: You need to add a code which you will get under Instructions for Marketplace section:

![Screenshot-by-Lightshot](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/Screenshot-by-Lightshot-1200x396.png)

In case you are using Shopify **Online Store 2.0**, follow the detailed user guide & follow instructions to add the codes:

**https://webkul.com/blog/code-instruction-to-online-store-2-0/#hyperlocal-marketplace-codes**

Now, when you will add/edit product, you will get the following shipping options to choose from:

![Edit-Product-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/Edit-Product-Admin-1200x597.png)

*   **Hyperlocal- Global Shipping**: In the case of this, when a search is made, products that are available globally will be listed.
*   **Hyperlocal- Local Shipping**: In this case, when a search is made, products with restricted shipping in regards to the location entered by the customer will be displayed. Only products under that range will be displayed.

This is how the frontend product search bar will look like:

![harshit-store1](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/harshit-store1-1200x597.png)

This is how the search results will look like:

![Search-results-3-results-for-image-–-harshit-store1](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/Search-results-3-results-for-image-%E2%80%93-harshit-store1-1200x597.png)

### Want To Filter Products Instead Of Sellers?

As we have been receiving multiple requests from merchants for filtering products instead of sellers on the basis of geolocation of the customer.

So,this most awaited feature is now live in the app.

All you have to do is, Simply Visit the "Hyperlocal Configuration" from Admin portal of Multivendor app & Select "Product Listing" instead of "Seller Listing".

Refer to the below screenshots:

![Dashboard-_-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/12/Dashboard-_-Admin-1200x597.png)

Now, Select "Product Listing" from "Select Listing Type" & Save the configuration:

![Customize-Hyperlocal-Configuration-Page-_-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/12/Customize-Hyperlocal-Configuration-Page-_-Admin-1200x539.png)

After that, On frontend, The products will starts filtering instead of sellers based on customer's location.

Frontend View:
--------------

![allproducts-–-hyperlocalmarketplace](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/12/allproducts-%E2%80%93-hyperlocalmarketplace-1200x597.png)

### Filter products using various filters:

Now, the customers can filter the products using various filters i.e, filter by vendor, category, product type, and product tag.

Also, if you are using the "[store pickup](https://webkul.com/blog/shopify-multivendor-marketplace-store-pickup/)" or "[Seller time-slot management](https://webkul.com/blog/seller-time-slot-management/)" feature app on your marketplace, customers can filter the products as per store pickup availability and open or closed store.

![screenshot-deepak-sharma-store1.myshopify.com-2022.02.11-12_30_07](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/screenshot-deepak-sharma-store1.myshopify.com-2022.02.11-12_30_07-1200x581.png)

### DISTANCE & PRICE SORTING

Even, the customer can now search and sort product on the basis of distance and price.

After the customer has entered his location, a page will appear in which there will be four following sorting options under dropdown named "sort by"  

1\. Nearest first - If the customer selects this option from the dropdown, then the customer will see the products list which is nearest to his location.

2\. Farest first - If the customer selects this option from the dropdown, then the customer will see the products list which is farest to his location.

3\. Price (lower first)- If the customer selects this option from the dropdown,

then the customer will see the products list in which first lower price products will be shown then the higher price product.

4\. Price (higher first) - If the customer selects this option from the dropdown,

then the customer will see the products list in which first higher price products will be shown then the lower priced products.

![sorting](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/sorting-1200x608.png)

### IMPLEMENT CHANGES BY SELECTING A SPECIFIC THEME:

Now, you can implement the changes done in the hyperlocal configuration to the specific theme as earlier all the configurational changes were used to populate to the live theme only.

Please note: You will only be able to see the changes if required hyperlocal codes are pasted in the selected theme.

![screenshot-sp-seller.webkul.com-2022.04.06-12_14_48](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/screenshot-sp-seller.webkul.com-2022.04.06-12_14_48-1200x581.png)

Note :-  
As per our latest update, for [Multivendor API](https://webkul.com/blog/shopify-multivendor-marketplace-app-api/) addon, we have added three new APIs for the hyperlocal marketplace i.e.

**seller-near-me API** \- Get sellers by latitude and longitude witihin their range**, product-near-me API -** Get products by latitude and longitude witihin their range and

**location detail API** \- Get hyperlocal location details by location id .

You can find this API detail in our [Multivendor API listing](https://mvmapi.webkul.com/)
