---
title: E-SIGNATURE
description: E-SIGNATURE
author: Chirag Tyagi
---

In today's fast-paced e-commerce landscape, staying ahead of the curve is essential for success.

That's why our E-Signature Feature app in the [Multivendor Marketplace App](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/) for Shopify is a game-changer for your online business.

Unlock the potential of e-signatures, empowering you to streamline transactions, foster trust among customers, and elevate the overall shopping experience.

### Introduction

Using our E-Signature Feature app in the [Multivendor Marketplace App for Shopify, admins,](https://apps.shopify.com/multi-vendor-marketplace) and sellers can effortlessly create E-Signature documents.

These documents can be connected to seller products, allowing customers to sign them before adding items to their cart, streamlining the shopping experience.

**CHARGES**

The E-Signature feature app will have an additional charge of **USD 20 per month** over & above your current Multivendor Marketplace app plan.

### Installation

Enable the E-Signature feature app by following the below steps:

*   Go to Multivendor **Admin Panel**
*   From the Dashboard, hover over the **three dots** on the top-right of the page
*   Click on **Feature Apps**
*   Search for **‘E-Signature‘** & click on ‘**Enable**‘
*   After accepting the charges, you’ll be good to configure the app.

![screenshot_1698238037016](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698238037016-1200x619.png)

### Need to add code to allow customers to e-sign on pdf on the product page

Copy the following code and add it into **product.json >> sections/main-product.liquid** template
```liquid
    {% if product.tags contains 'wk_esign_document' %}  
    <div class="wk_esignate_document_active " data-productid ="  
    {{ product.id }}" data-variantid ="  
    {{ product.selected_or_first_available_variant.id }} 
    " style="display:none; ">
    </div>
    {% render "wk-esignature-document" %}
    {%- endif -%}       
```
![screenshot_1698411765895-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698411765895-2-1200x521.jpeg)

Copy the below code and add it into **templates >> customer/order.liquid** template
```liquid
    {% if property.first == 'wk-esgin-document-id'%}  <span id="wk-esign-product-  {{ product.id }}" ">
    </span>
    {%- endif -%}                      
```
![screenshot_1698411841444-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698411841444-2-1200x524.jpeg)

Select and copy the below-given code and add it into **Checkout Settings>> Additional scripts**
```liquid
    <div  class="section wk-cus-esign-document" ">
    </div>                  
```
![screenshot_1698411874068](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698411874068-1200x530.jpeg)

Add class to your quantity selector. Copy the code and add it into **product.json >> sections/main-product.liquid** template
```
    wk_qty_selector         
```
![screenshot_1698411729982](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698411729982-1200x541.jpeg)

Add class to your add to cart button. Copy the code below and add it into **product.json >> sections/buy-buttons.liquid** template
```
    wk_esignature_cart                 
```
![screenshot_1698411813711](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698411813711-1200x535.jpeg)

**NOTE:** These codes are also accessible in the Multivendor Marketplace Admin Panel under Configuration >> Instructions For Marketplace in the E-Signature Document section.

**If the admin wants to enable sellers to add documents to their products for E-Signature, they can do so by following these steps:**

1.  Go to Multivendor Admin Panel.
2.  Navigate to Configuration.
3.  Select Product Configuration from the dropdown options.
4.  Locate/search for **"ALLOW SELLER TO ADD E-SIGNATURE DOCUMENTS"** and Enable it.
5.  Save the changes.

![screenshot_1698242819211](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698242819211-1200x619.png)

### Add Document for E-Signature: Admin End

*   Go to Multi-Vendor **Admin Panel**
*   Navigate to Products
*   Click on E-Signature from the dropdown options.

![screenshot_1698238252666](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698238252666-1200x619.png)

*   On the E-Signature page, you'll find a '+ Add Document' button on the right-hand side. Click it to upload the document on which you'd like to take e-signatures.

![screenshot_1698238327736](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698238327736-1200x619.png)

On the Add E-Signature Page, you'll find these options:

**1) CHOOSE SELLER**

*   **Choose Specific Seller:** This choice allows you to pick an individual seller for whom you want to create or associate an E-Signature document. To do this, you need to enter the seller's email address, and the document will be linked to that particular seller.

![ADD-E-SIGNATURE-DOCUMENT-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/ADD-E-SIGNATURE-DOCUMENT-Admin-1197x1024.png)

*   **Choose For All Sellers**: If the admin wants to add an E-Signature document that applies to all the sellers in your marketplace at once, you can select the "Choose All Sellers" option. This means the document will be available for every seller.

![ADD-E-SIGNATURE-DOCUMENT-Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/ADD-E-SIGNATURE-DOCUMENT-Admin-1-1200x939.png)

**2) DOCUMENT NAME**: The admin can name an e-signature document for easy reference.

**3) UPLOAD DOCUMENT**: After the admin has filled in the necessary details and uploaded the document, they'll promptly receive a popup notification, confirming the successful upload.

### NOTE:

You can upload a PDF document for e-signature with a maximum of 5 pages, no more.

After this, a new page labeled 'Edit E-Signature Document' will appear. Here, the admin can make three types of edits:

*   Document Name  
    
*   Custom Fields - We support 6 types of custom fields  
    1) Image Type  
    2) Text Type  
    3) Textarea Type  
    4) Signature Type  
    5)Date Type  
    6) File Type- In the file type custom field, customers can upload a file of 10 Mb or less.  
    
*   Place Custom Field

![ADD-E-SIGNATURE-DOCUMENT-Admin-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/ADD-E-SIGNATURE-DOCUMENT-Admin-2-1200x747.png)

Within the Document name section, you can easily edit or update the name of the E-signature document.

In the Custom Fields section, you have the flexibility to incorporate custom fields into the e-signature document and choose the custom field type that suits your requirements.

_**NOTE:** You can create a maximum of 40 custom fields for the e-signature document._

![screenshot_1698240071342](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698240071342-1200x619.png)

As for the Place Custom Field section, it offers a selection of all the custom fields you've added, allowing you to place them in your uploaded document at your preferred location for e-signatures.

![screenshot_1698241091950](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698241091950-1200x614.png)

![ADD-E-SIGNATURE-DOCUMENT-Admin-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/ADD-E-SIGNATURE-DOCUMENT-Admin-3-940x1024.png)

You have the flexibility to edit, delete, disable, and change the uploaded document.

![screenshot_1698241856955](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698241856955-1200x619.png)

### Assign a document for E-signature in your products

When adding a new product, you'll conveniently find the option to select an existing e-signature document from a dropdown menu.

This streamlined process makes it easy to apply the chosen document to the product.

![screenshot_1698242360514](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698242360514-1200x618.png)

Admins have the ability to review e-signed documents for any specific order by simply editing that order at any time.

![screenshot_1698309173097](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698309173097-1200x531.jpeg)

### Seller End

After the admin enables the 'ALLOW SELLER TO ADD E-SIGNATURE DOCUMENTS', sellers gain the ability to include E-signature documents within the Products section.

This allows sellers to seamlessly integrate E-signature documents into their products according to their specific preferences.

Sellers can also edit, delete, disable, and change the uploaded document for e-signature.

![screenshot_1698243003107](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698243003107-1200x619.jpeg)

![ADD-E-SIGNATURE-DOCUMENT-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/ADD-E-SIGNATURE-DOCUMENT-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x918.png)

![screenshot_1698315804974](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698315804974-1200x619.png)

![screenshot_1698316073116](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698316073116-1200x617.png)

![screenshot_1698316102812](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698316102812-1200x619.png)

![screenshot_1698316238744](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698316238744-1200x618.png)

### Customer End

On the Product page, buyers/customers will find a 'Sign & Add To Cart' button, as illustrated in the image below:

![screenshot_1698302186060](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698302186060-1200x619.png)

When customers click the "Sign & Add To Cart" button, a document will open for them to sign, as depicted in the image below.

Once they've signed it, they can submit the signature and will be provided with the option to 'Add to Cart'.

![screenshot_1698314097454](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698314097454-1200x547.jpeg)

![screenshot_1698302322193](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698302322193-1200x619.png)

![screenshot_1698317335743](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698317335743-1200x538.png)

After placing an order on the checkout page, customers have the option to preview and download the E-signature document.

![screenshot_1698309283055](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698309283055-1200x553.jpeg)

Also, the customers can log in to their account and preview and download the document from the orders.

![screenshot_1698309062337](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1698309062337-1200x537.jpeg)

