---
title: PAY WHAT YOU WANT
description: PAY WHAT YOU WANT
author: Chirag Tyagi
---

We have introduced **Pay what you want** feature app within the [Multivendor Marketplace App](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/) for Shopify.

**Pay what you want** (**PWYW**) also known as **Value-for-Value** model is a pricing strategy where buyers pay their desired amount for a given commodity.

A minimum (floor) price is set, and/or a suggested price may be indicated as guidance for the buyer.

**Pricing:** This feature will have an additional charge of **USD 10 per month** over & above your current Multivendor Marketplace plan charges.

Let's move on to the installation & configuration process!

Enable the following app by visiting:

*   Multi-Vendor **Admin Panel**
*   From the Dashboard, hover over the **three dots** on the top-right of the page
*   Click on **Feature Apps**
*   Search for ‘**Pay What You Want**‘ & click on ‘**Enable**‘
*   After accepting the charges, you’ll be good to configure the app!

![Feature_Apps_Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Feature_Apps_Admin-1-1200x597.png)

To make this feature display on the frontend, the admin needs to paste a few codes.

The instructions with the codes will be given on the following page:  
**Multivendor Admin Panel** \> **Configuration** > **Instruction for Marketplace**

Here, you’ll have these codes:

![Instructions_Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Instructions_Admin-1200x597.png)

Show Price input field in the product page: Copy the below-given code & paste it to **product-template.liquid** file.
```liquid
    {% if product.tags contains 'wk_pay_what_you_want' %}
    <div class="wk_error_message" style="visibility:hidden">You have to Pay atleast <span id="wk_var_price"></span></div> 
    <div id="wk_custom_price_div" data-productid="{{ product.id }}" data-productprice="{{product}}">
    <input id="wk_variant_id" type="hidden" name="properties[wk_variant_id]" value="" >
    <input type="hidden" name="properties[wk_pay_what_you_want]" value="true" >
    <p class="wk_pay_what_you_want" style="visibility:visible">
    <label for="wk_custom_price">Enter price you want to pay</label>
    <input id="wk_custom_price" type="number" name="properties[wk_custom_price]" value="" >
    </p>
    </div>
    {% endif %}                                
```
Hide pay what you want product price: Copy the below-given code & also, paste it to **product-template.liquid** theme page.
```liquid
    {% unless product.tags contains 'wk_pay_what_you_want' %}<!--your price object -->{%endunless %}
```
For adding code inside the class attribute of your Add to cart button: Copy the below-given code & paste it to **product-template.liquid** theme page.
```liquid
     {% if product.tags contains 'wk_pay_what_you_want' and current_variant.available %} wk_choice_pay {%endif%}
```
Add code inside attribute of your Add to cart button: Copy the below-given code & also, paste it to **product-template.liquid** theme page.
```liquid
     {% if product.tags contains 'wk_pay_what_you_want' %} disabled {%endif%}
```
For adding class to your quantity selector: Copy the below-given code & paste it to **product-template.liquid** theme page.
```liquid
     wk_qty_selector  
```
Hide pay what you want product price from the search product page: Copy the below-given code & also, paste it to **product-price.liquid** theme page.
```liquid
    {% unless product.tags contains 'wk_pay_what_you_want' %}<!--your price code -->{%endunless %}
```
Calculate price form cart page for pay what you want product: Copy the below-given code & paste it to **cart-template.liquid** theme page. Above cart items loop.
```liquid
    {% assign wk_pay_whatever_extra_price  = 0 %}
```
Copy the below given code & also, paste it to **cart-template.liquid** theme page. Below cart items loop.
```liquid
    {% if item.product.tags contains 'wk_pay_what_you_want' and item.properties['wk_custom_price'] %}<span class='wk_pay_what_you_want_count' style='display:none;'></span>{%endif%}
```
Update price column: Copy the below given code & paste it to **cart-template.liquid** theme page.
```liquid
    {% if item.product.tags contains 'wk_pay_what_you_want' and item.properties['wk_custom_price']%} 
    {{item.properties['wk_custom_price']| times: 100 | money }}
    {% else %}
    <!-- your price object -->
    {% endif %}
```
To update Total price column: Copy the below given code & also, paste it to **cart-template.liquid** theme page.
```liquid
    {% if item.product.tags contains 'wk_pay_what_you_want' and item.properties['wk_custom_price']%}
    {% assign pay_whatever_line_price  = item.properties['wk_custom_price'] | times:  <!-- item quantiy object--> | times: 100%}
    {{ pay_whatever_line_price | money }}
    {% assign wk_pay_whatever_extra_price = pay_whatever_line_price | minus: <!-- product total price object --> | plus: wk_pay_whatever_extra_price %}
    {% else %}
    {{<!-- product total price object --> | money}} 
    {% endif %} 
```
Update Sub Total price: Copy the below given code & paste it to **cart-template.liquid** theme page.
```liquid
    {% if wk_pay_whatever_extra_price != 0%}{{<!-- cart total price object --> | plus: wk_pay_whatever_extra_price | money}} {%else%}{{ <!-- cart total price object --> | money }}{%endif%}
```
To update Sub Total price: Add class to your checkout button on cart page **cart-template.liquid** theme page.
```liquid
     wk_checkout_btn         
```
If you are having trouble while updating the codes, let us know by emailing at **shopify@webkul.com** or creating a ticket for the same at [**Webkul UV Desk**](https://webkul.uvdesk.com/). We’ll do it for you!

To add a product, visit **Multivendor Marketplace Admin/Seller Panel** \> **Products** > **Product Listing** > **Add Product**.

Now, while adding the product, you need mark product as **Pay what you want Product**.

![Mark product as "pay what you want" while adding product ](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/06/image1-1200x575.webp)

Other than this, add a minimum price to the product, enter the rest of the details and save.

![download](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/download-1200x273.png)

The "minimum price" can be added in two ways i.e, fixed and percentage. You can opt this from product configurations:

![Choose which type of minimum price you would like to add on "pay what you want" products](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/06/image2-1.webp)

**Note:**

The normal products can be converted into PWYW products and vice-versa.

Also, on the seller profile page, the prices for PWYW products don't display. If you want to display them, add the following code to the [seller profile theme](https://webkul.com/blog/shopify-multivendor-marktplace-custom-seller-profile-page-new-theme/):
```liquid
    {if $pay_what_you_want_active && $value.type == 7} hidden {/if}
```
Moreover, after adding all the codes, this is how the frontend will look like:

![collage](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/collage.png)

If a customer tries to checkout after entering a price lesser than the minimum amount set from the backend, he will receive a message saying:  
_"You must pay at least \*minimum amount value\*"_

This is all about the Pay What You Want feature app.
