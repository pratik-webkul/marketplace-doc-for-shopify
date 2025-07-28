---
title: DYTEL POS CONNECTOR
description: DYTEL POS CONNECTOR
date: 2025-07-25
author: Chirag Tyagi
---
DYTEL POS offers a seamless, centralized system for managing orders, payments, and inventory in one place.

If you have a restaurant marketplace and use DYTEL POS, you can streamline operations by integrating it with [Shopify Multivendor Marketplace](https://apps.shopify.com/multi-vendor-marketplace) for efficient vendor and transaction management .

DYTEL POS integrates with the [Multivendor Marketplace](https://apps.shopify.com/multi-vendor-marketplace), syncing Marketplace store orders directly into the seller's POS system .

This Integration allows you to sync the seller orders to the DYTEL POS in real time .

### INSTALLATION

To make this app work, first of all, you need to visit the “Feature Apps” section of the multivendor app. There you will get the “DYTEL POS CONNECTOR” feature app.

![dytel-pos-integration-feature-app](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-install-1200x683.webp)

![dytel-pos-integration-enable](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-enable-1200x943.webp)

After that you have to approve the payments of this feature app to use this on your store.

![dytel-payment ](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-payment-2-1200x943.webp)

![dytel-pos-integration-payment-approve ](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytem-pos-payment-approve-1-1200x943.webp)

And as soon as you agree with this condition and approve the payment you will get the DYTEL POS CONNECTOR installed on your store.Thus, this DYTEL POS CONNECTOR gets enabled on your marketplace.

### Admin Configuration

To configure the admin settings, navigate to **Configuration** and select **DYTEL POS Configuration** .

![dytel-pos-integration-admin-configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-admin-config-1200x505.webp)

To proceed, please enter the required DYTEL POS details, including the **Source ID** and **Source Password**. You can obtain these credentials from your DYTEL POS Support .

![DYTEL-POS-INTEGRATION-admin-details](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-admin-confi-1200x445.webp)

After entering the DYTEL POS details click on **save changes** .

### Seller Configuration

To configure the seller settings, navigate to **Configuration** and select **DYTEL POS Configuration** .

![DYTEL POS INTEGRATION-configuration ](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-seller-config-1200x551.webp)

After clicking on "DYTEL POS Configuration," you'll need to enter the outlet code and password, which can be obtained from the admin .

Once you save these details, a unique token will be generated for you.

![DYTEL POS INTEGRATION - unique token ](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-seller-cofig-details-1200x547.webp)

The token is provided because fulfilment syncing is managed outside the app.

You can either create your own program using our public fulfilment APIs or use a third-party fulfilment service like [Tookan](https://apps.shopify.com/tookan).  
Fulfilment APIs:  
Pass the key and Token in "Params"

key; token  
value ; enter your access token here

**GET: https://mvmapi.webkul.com/v2/public/shop/orders/{orderId}/line-items.json(Get)**

    Example response:
    {
      "line_items": [
        {
          "id": "101",
          "main_id_shop": "101",
          "seller_id": "101",
          "order_id": "101",
          "shopify_order_id": "",
          "order_product_id": "101",
          "product_id": "101",
          "shopify_product_id": "101",
          "shopify_variant_id": "101",
          "product_name": "Test",
          "variant_title": "Test / variant",
          "product_price": "101.00",
          "sku": "TESTSKU",
          "note_attribute": "[]",
          "line_discount": "0.00",
          "total_quantity": "1",
          "line_item_id": "101",
          "tax_type": "IGST",
          "tax_rate": "0.0000",
          "tax_type2": "event",
          "tax_rate2": "0.0000",
          "actual_shipping": "0.000",
          "actual_tax": "0.000",
          "unit_commission": "0.000",
          "shipping_commission": "0.000",
          "tax_commission": "0.000",
          "total_commission": "0.000",
          "id_commission_basis": "4",
          "id_commission_type": "1",
          "commission_values": "10.00,0.00",
          "status": "0",
          "cancel_reason_id": "",
          "ndr_awb_number": "",
          "is_returned": "0",
          "penalty_type": "0",
          "penalty_value": "0.0000",
          "shipping_type": "4",
          "shipping_label_link": "",
          "awb_created_as": "",
          "shipping_tax": "101.000",
          "fulfilled_shipping_method": "0",
          "is_store_pickup": "0",
          "fulfillment_location_id": "101",
          "date_add": "2050-07-19T22:05:32+00:00",
          "date_upd": "2050-07-19T22:05:32+00:00",
          "refund_commission": "0.000",
          "vat_type": "0",
          "vat": "0.00",
          "tracking_url": "https://tracking.example.com/",
          "total_actual_shipping": "101"
        }
      ]
    }

**GET: https://mvmapi.webkul.com/v2/public/shop/orders/{orderId}/fulfillments.json(Get)**

    Example response: 
    {
      "fulfillments": [
        {
          "id": "101",
          "sp_id_order": "101",
          "id_shop": "101",
          "main_fulfillment_id": "101",
          "tracking_id": "101",
          "shipping_method_name": "Test shipping method",
          "tracking_url": "https://tracking.example.com/",
          "date_add": "2050-07-27 14:41:41",
          "delivery_date": "2050-07-27",
          "is_deliver": "0",
          "fulfillment_from": "3",
          "shipping_method_id": "4",
          "is_manifest_create": "0",
          "shipment_status": "1",
          "items_fulfill": [
            {
              "line_item_id": "101",
              "sp_id_product": "101",
              "main_id_variant": "101",
              "product_name": "Test product",
              "variant_title": "test/variant",
              "product_price": "101.101",
              "sku": "SKU101",
              "quantity_fulfilled": "1",
              "line_discount": "0.00",
              "status": "2"
            }
          ]
        }
      ]
    }

**POST: https://mvmapi.webkul.com/v2/public/shop/orders/{orderId}/fulfillments.json(POST)**

    Example Value 
    {
      "line_item_ids": [
        {
          "line_item_id": "101",
          "quantity": "1"
        }
      ],
      "fulfillment_method": "other",
      "tracking_number": "101",
      "shipping_method": "Test Method",
      "tracking_url": "www.example.com/tracking_url"
    }
    

Creating DYTEL POS Products
---------------------------

### Add DYTEL POS Product Via Product Form

You can create DYTEL POS products from the seller's end by navigating to **Products** -> **Products Listing** .

![dytel-pos-product-listing](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-product-listing-1200x556.webp)

On the product listing page, you have two options: you can either add a new DYTEL POS product and you can edit an existing one.

![dytel-pos-add-product](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-add-product-1-1200x645.webp)

To add a new product click on add product from product listing navigation .

![dytel-pos-add-product](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-crop-1200x895.webp)

After adding all the details of the products make sure to enable the **want to send it to dytel** option and then click on **Save Changes** .

To make an existing product a DYTEL POS product, click on the three dots on the product listing page, then select the "Edit" button to modify the product.

![dytel-pos-editt-product](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-editt-product-1200x645.webp)

After that you have to enable the " Want to Send It To Dytel" option and then click on **save changes** .

![edit-product](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/crop-dytel-1200x836.webp)

Once you have created a DYTEL POS Product or edited the existing product you have to click on these three dots and then edit to add the DYTEL POS ITEM CODE manually one by one .

![TEM CODE](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-product-item-code-1200x636.webp)

![item-code](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-item-code-715x1024.webp)

After adding the DYTEL POS ITEM CODE to the product click on save changes .

### Add DYTEL POS Product Via CSV in Bulk

If you want to add DYTEL POS item codes to multiple products at once, simply export the products within a chosen date range into a CSV

make the changes as add the item code and enter yes to mark the product as DYTEL POS Product in the CSV File and upload the updated CSV .

For that you have to click on Add DYTEL POS Products .

![add-products](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-csv-1200x547.webp)

![export-product](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-export-product-1200x928.webp)
