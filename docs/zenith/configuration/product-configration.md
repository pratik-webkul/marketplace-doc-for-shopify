---
title: Multivendor Marketplace:Product configuration
description: Learn about product configuration.
date: 2025-06-25
author: Chirag Tyagi
---

In this section of the blog, you’ll find everything related to product configurations. Manage all your product settings seamlessly from this dedicated menu section

Here, you can provide an option to add/edit/delete the products to your sellers, you can enable the option to auto-approve your products, auto-enable the added products and much more.

![product configuration Multivendor Marketplace for Shopify by Webkul](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/pproduct-scaled.webp)

Here are some new product configurations you might want to check out . 
<!-- ### Add Video to Product

You can now add video while editing products. For this, you need to visit Multi-vendor admin panel>>Configuration>>Product Configuration and enable the tab are given below:

![screenshot-sp-seller.webkul.com-2021.07.09-15_19_27](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/screenshot-sp-seller.webkul.com-2021.07.09-15_19_27-1200x549.png)

Upload videos:

![screenshot-sp-seller.webkul.com-2021.07.09-15_36_31](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/screenshot-sp-seller.webkul.com-2021.07.09-15_36_31-1200x549.png) -->

### Add Product Origin Country/HSN code to the Product Description

The admin can allow sellers to add the country of their product origin to the description page. Visit **Multivendor Admin Panel** > **Configuration** > **Product Configuration**:

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/countryoforigin.webp)

After enabling this, visit **Multivendor Admin Panel** \> **Configuration** > **Instruction for Marketplace**:

Copy the following code into the product.liquid (or product-template, if exist) template inside form tag to display the "Product Origin Country".

![image-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/countryoforigincode.webp)

So, when an admin and seller are adding/ editing any product then they have the option to choose the country of origin and fill the HSN code accordingly.

![country](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/countryoforiginproductpage.webp   )

This is how it will look on the storefront:

![image-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/image-2.png)

**Note**: For existing products, you need to once save them to display this information on the frontend. Also, note that once the product is added, this can't be updated.

### ALLOW SELLER TO ADD COST PRICE

Now, the admin can allow the seller to add the cost price which is the original product price.

The seller can enter the cost price while adding products from his respective seller panel.

The cost price will not be shown on the storefront and generally, it is used to calculate the profit margin.

Go to Admin panel >> Configurations >> product configuration >> Enable " ALLOW SELLER TO ADD COST PRICE" and click SAVE CHANGES button below.  

![cost-price](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/costprice.webp)

Now, when the seller will add products from his panel then he will have an option to add the cost price which should be less than the sales price.

![Add-Product-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/costpriceseller.webp)

### Hide Product Tag Field

You can now hide the "Product Tag" field from the "Add/Edit Product" form.

For this, You need to visit the multi-vendor admin panel>>Configurations>>**Product Configuration**\>>Enable the Tab.

![Configuration-Admin-5](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/producttag.webp)
![Configuration-Admin-5](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/producttag.webp)

Once you enable this tab, you/sellers won't get the product tag field while adding a product.

![Add-Product-Seller-•-Multivendor-MarketPlace-ssssssssssss](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/productfielddisabled.webp)

Note:- In case you add/edit products by CSV, make sure that the "Restrict Product Tags" is disable.

### Product Form Help Text

Add help text to product form labels for both admin & seller end.

Visit **Multivendor Admin Panel** > **Configuration** > **Product Configuration**. Enable this tab:

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/productform.webp)

Now, to add the help text, visit Multivendor Admin Panel > Products > Product Form Customization. Add the help text and save:

![image-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/formhelptext.webp)

**Note these points:**

*   Product form customization is valid only for normal and digital product and it does not include Global Products.
*   It will not affect product CSV format.

This is how they will look on the add product page (both admin & seller end):

![image-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/formhelptextaddproduct.webp)


<!-- ### Add Video to Product

You can now add video while editing products. For this, you need to visit Multi-vendor admin panel>>Configuration>>Product Configuration and enable the tab are given below:

![screenshot-sp-seller.webkul.com-2021.07.09-15_19_27](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/screenshot-sp-seller.webkul.com-2021.07.09-15_19_27-1200x549.png)

Upload videos:

![screenshot-sp-seller.webkul.com-2021.07.09-15_36_31](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/screenshot-sp-seller.webkul.com-2021.07.09-15_36_31-1200x549.png)

### Add Product Origin Country/HSN code to the Product Description

The admin can allow sellers to add the country of their product origin to the description page. Visit **Multivendor Admin Panel** > **Configuration** > **Product Configuration**:

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/image-1200x597.png)

After enabling this, visit **Multivendor Admin Panel** \> **Configuration** > **Instruction for Marketplace**:

Copy the following code into the product.liquid (or product-template, if exist) template inside form tag to display the "Product Origin Country".

![image-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/image-1-1200x597.png)

So, when an admin and seller are adding/ editing any product then they have the option to choose the country of origin and fill the HSN code accordingly.

![country](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/country-1200x627.png)

This is how it will look on the storefront:

![image-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/image-2.png)

**Note**: For existing products, you need to once save them to display this information on the frontend. Also, note that once the product is added, this can't be updated. -->

<!-- ### ALLOW SELLER TO ADD COST PRICE

Now, the admin can allow the seller to add the cost price which is the original product price.

The seller can enter the cost price while adding products from his respective seller panel.

The cost price will not be shown on the storefront and generally, it is used to calculate the profit margin.

Go to Admin panel >> Configurations >> product configuration >> Enable " ALLOW SELLER TO ADD COST PRICE" and click SAVE CHANGES button below.  

![cost-price](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/cost-price-1200x627.png)

Now, when the seller will add products from his panel then he will have an option to add the cost price which should be less than the sales price.

![Add-Product-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/Add-Product-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x619.png)

### Hide Product Tag Field

You can now hide the "Product Tag" field from the "Add/Edit Product" form.

For this, You need to visit the multi-vendor admin panel>>Confi

Add help text to product form labels for both admin & seller end.

Visit **Multivendor Admin Panel** > **Configuration** > **Product Configuration**. Enable this tab:

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/productform.webp)

Now, to add the help text, visit Multivendor Admin Panel > Products > Product Form Customization. Add the help text and save:

![image-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/image-1-1200x597.png)

**Note these points:**

*   Product form customization is valid only for normal and digital product and it does not include Global Products.
*   It will not affect product CSV format.

This is how they will look on the add product page (both admin & seller end):

![image-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/image-2-1200x584.png)

### Add Video to Product

You can now add video while editing products. For this, you need to visit Multi-vendor admin panel>>Configuration>>Product Configuration and enable the tab are given below:

![screenshot-sp-seller.webkul.com-2021.07.09-15_19_27](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/screenshot-sp-seller.webkul.com-2021.07.09-15_19_27-1200x549.png)

Upload videos:

![screenshot-sp-seller.webkul.com-2021.07.09-15_36_31](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/screenshot-sp-seller.webkul.com-2021.07.09-15_36_31-1200x549.png)

### Add Product Origin Country/HSN code to the Product Description

The admin can allow sellers to add the country of their product origin to the description page. Visit **Multivendor Admin Panel** > **Configuration** > **Product Configuration**:

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/image-1200x597.png)

After enabling this, visit **Multivendor Admin Panel** \> **Configuration** > **Instruction for Marketplace**:

Copy the following code into the product.liquid (or product-template, if exist) template inside form tag to display the "Product Origin Country".

![image-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/image-1-1200x597.png)

So, when an admin and seller are adding/ editing any product then they have the option to choose the country of origin and fill the HSN code accordingly.

![country](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/country-1200x627.png)

This is how it will look on the storefront:

![image-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/11/image-2.png)

**Note**: For existing products, you need to once save them to display this information on the frontend. Also, note that once the product is added, this can't be updated.

### ALLOW SELLER TO ADD COST PRICE

Now, the admin can allow the seller to add the cost price which is the original product price.

The seller can enter the cost price while adding products from his respective seller panel.

The cost price will not be shown on the storefront and generally, it is used to calculate the profit margin.

Go to Admin panel >> Configurations >> product configuration >> Enable " ALLOW SELLER TO ADD COST PRICE" and click SAVE CHANGES button below.  

![cost-price](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/cost-price-1200x627.png)

Now, when the seller will add products from his panel then he will have an option to add the cost price which should be less than the sales price.

![Add-Product-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/Add-Product-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x619.png)

### Hide Product Tag Field

You can now hide the "Product Tag" field from the "Add/Edit Product" form.

For this, You need to visit the multi-vendor admin panel>>Confi

Add help text to product form labels for both admin & seller end.

Visit **Multivendor Admin Panel** > **Configuration** > **Product Configuration**. Enable this tab:

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/image-1200x597.png)

Now, to add the help text, visit Multivendor Admin Panel > Products > Product Form Customization. Add the help text and save:

![image-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/image-1-1200x597.png)

**Note these points:**

*   Product form customization is valid only for normal and digital product and it does not include Global Products.
*   It will not affect product CSV format.

This is how they will look on the add product page (both admin & seller end):

![image-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/image-2-1200x584.png) -->

### Product Re-Approve feature

Now, once a seller edits a product, the admin can approve/disapprove the updates before they become live on the storefront.

Configure this by visiting **Multivendor Admin Panel** > **Configuration** > **Product Configuration**:

![image-169](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/reapprove.webp)

Now, whenever a seller updates a product, the admin will receive an email to approve it. If the admin disapproves, he need to mention the reason for disapproval.

Note that on disapproving, only the product updates will disapprove and not the whole product. Also, the admin needs to manually check what all updates the seller has done.

This will be the status of the product on both admin and seller end:

![image-170](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/reapproveadmin.webp)

If the admin disapproves, he need to mention a reason for the same:

![image-171](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/07/image-171-1200x597.png)

Once approved, the product updates will become live on the storefront.

**NOTE**: In case the admin saves the product after going on the edit product page, the product will get approved.

### Product Update by CSV

Now, the admin/sellers can edit products in bulk. All you have to do is visit **Multivendor Admin Panel** > **Products** > **Product Listing** > **More Actions** \> **Add product via CSV**

![image-167](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/addcsv.webp)

In **method 1**, you just need to upload the updated/edited CSV file.

Make sure in the CSV file that you are uploading, the **Product IDs** are the same as that of the **existing products** you are trying to update.

If the product IDs don't match, the existing products will not be updated and new products will be created.

![image-168](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/07/image-168-1200x597.png)

### ALLOW SELLERS TO SET THE PRODUCT PRICE TO ZERO

The admin can allow his/her sellers to create products with product price being zero.

In that case, the product will become a free product. You can configure it by visiting: **Multivendor admin panel** > **Configuration** > **Products Configuration**:

![download](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/zero.webp)

**Note**: No commission will be calculated on free product and if you have set fixed commission, this feature won't work with Display Sales Price.

Also, this feature will only work if you have set fixed commission and not % or anything else.

### ALLOW SELLER TO SET MINIMUM PURCHASE QUANTITY PER PRODUCT

From this option, you can allow the seller to set a minimum purchase quantity for products.

This way, the customers will get restricted to buy the set number of quantity for the respective products.

To configure this, visit:

**Multivendor admin panel** > **Configuration** > **Products Configuration**:

![Configuration-Admin-4](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/min.webp)

Now, while adding products to the marketplace (admin panel or seller panel), you'll get the option to set quantity. Refer:

![Add-Product-Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/12/Add-Product-Admin-1-1200x627.png)

Know in-depth: [https://webkul.com/blog/minimum-purchase-quantity-multi-vendor-marketplace-for-shopify/](https://webkul.com/blog/minimum-purchase-quantity-multi-vendor-marketplace-for-shopify/)

### SHOPIFY-MULTIVENDOR PRODUCT SYNC

If you make any changes to your products from Shopify end, you need to sync the products each time with the app to reflect the updates made at the multivendor end too.

_**It is advisable to make any changes in the products at the multivendor end because this way the products get auto-updated at Shopify too. But not vice-versa.**_

Let's see the syncing process.

To sync a single product, go to **multivendor admin panel** > **products** > **product listing** > **edit** the product like so:

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/edit.webp)

Now, on the redirected page, click on **more actions** \> **sync product**. Refer:

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/productsync.webp)

**Bulk Sync Process:**

Go to **multivendor admin panel** > **products** > **product listing** > select the products you want to sync > from **bulk action**, click on **sync selected**.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/adminsync.webp)

### Sync Orders Updates

When an item is purchased from your Shopify store, the inventory will only be synced with the app if the item is assigned to any seller registered on your marketplace.

Now, to fetch orders into the app, you need to click the Sync Orders button and sync your Shopify orders with the app.

![Orders-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/ordersync-scaled.webp)

### PRODUCT TYPE, PRODUCT TAG & COLLECTION AT SELLER PANEL

Now, the sellers have the following menus in their multivendor seller panel: Product Type, Product Tag & Collections.

Multivendor Seller Panel > Products:

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/tagcollection-scaled.webp)

Moreover, sellers will also have an option to **export** product tags, types & collections.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/exportcollection.webp)

Example: Multivendor Seller Panel > Products > Collections

### EDIT IMAGE ALT TEXT

In our new updates, while editing products on Multi-Vendor Marketplace, the admin/seller will get an option to add **alt text** to the product images.

ALT text is basically your image description. Google bots examine these descriptions and rank them accordingly. Thus, they help a lot with SEO.

For this, visit **Multi-Vendor Marketplace Admin/Seller Panel** > **Products** > **Product Listing** > **Edit Product**:

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/editalt-scaled.webp)

Click on **Edit Image**:

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/editimg-scaled.webp)

Hover over the image and then click on **ALT**:

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/editalttext.webp)

Now enter the ALT text and save.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/enteralt.webp)

Similarly, you add alt text to multiple images of a product.

### IMPORT PRODUCTS FROM SHOPIFY

By enabling the import product button from the product section of the configuration,

And then visiting the imported product from Shopify from the main menu will enable the user to import the product either by selecting the period

And entering to and from the date or it can be imported by uploading a CSV.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/import-1-scaled.webp)

_Important Note: All of these imported products will be visible on the product section only after the products are assigned by admin to any seller._  

### PRODUCT FORM CUSTOMIZATION

With this section, you can hide/unhide the components of product form.

Click on Product Form Customization from the main menu of the app and select the products you want to remove from the add product page.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/productform-1-scaled.webp)

### HIDE/SHOW PRODUCT IMAGES IN PRODUCT LISTING

You can now hide/show the product images in the product listing section by enabling/disabling the below configuration from the product configuration section.

Multivendor Marketplace App Admin panel>>Configuration>>Product Configuration>> Enable/disable **SHOW PRODUCT IMAGE FIELD UNDER "PRODUCT LISTING"** SECTION>>Save.

![Configuration-_-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/productimgconfig.webp)

Once you enable this tab, Product Images will be visible in the product listing section on both the admin and seller panels.

![Product-_-Admin-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/adminimg-scaled.webp)

![Product-_-Seller-•-Multivendor-MarketPlace-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/sellerimg-scaled.webp)

If you disable the **SHOW PRODUCT IMAGE FIELD UNDER "PRODUCT LISTING"** SECTION configuration, the product images will not be visible in the product listing section on both the admin and seller panels.

![Configuration-_-Admin-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/config-1.webp)

This is how the Admin and Seller Panel will look after the configuration is disable.

![Product-_-Admin-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/admin-scaled.webp)

![Product-_-Seller-•-Multivendor-MarketPlace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/seller-scaled.webp)

### EXPORT PRODUCT DETAILS AT SELLER PANEL

Now, the sellers have the **Export Details** option in the product listing section in their multivendor seller panel.

Multivendor Marketplace App Seller Panel>>Products>>Product listing:

![Product-_-Seller-•-Multivendor-MarketPlace-5](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/export-scaled.webp)

### PRODUCT PRICE ROUND OFF

Product price round-off will help the admin to replace a product price number with an approximate value that has decimal value representation. For example, replacing $23.883 with $23.88.

By enabling the product price round-off, a dropdown will appear to select the decimal for the product price round off and select the "decimal number to be round off" from the dropdown.

Click the SAVE button.

For example, if you have selected "2" from the decimal dropdown then decimal numbers like 22.773 round off to 22.77, 23.889 round off to 23.89, and if you have selected "1" from the decimal dropdown

then decimal numbers like 22.673 round off to 22.7, 23.889 round off to 23.9

![round-off-](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/priceroundoff-scaled.webp)

NOTE:  
Product price round-off will be applied on product price, its compare at price, variant price, and its compare at price.

### Product Variant Inventory Listings

When a customer purchases a product variant, the sold variant is listed in the Variant Inventory section of both the Admin and Seller panels.

They can view all variant orders by navigating to **Products > Variant Inventory** in their panel. Additionally, they can check the remaining variant inventory by location.

Admin Panel:

![Variant Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/adminvar-scaled.webp)

Admins can easily manage inventory by filtering the product variant inventory list using **"Out of Stock",** **"Inventory Tracked"** and **"Inventory Not Tracked"** options. 

![Filter](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/adminvar-scaled.webp)

Seller Panel:

![Variant Seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/sellervar-scaled.webp)

### Manage products as Draft Product

**Introducing the Draft Feature for Sellers!**  
  
Sellers now have the flexibility to save their products as drafts before making them live.

To enable this feature, the Admin needs to activate the **" Save Product as a Draft"** option.

This setting can be easily configured in the **Product Configuration** section, giving sellers better control over their product listings.

![Product configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/draftconfig-scaled.webp)

Once the Admin enables this option, sellers will see the **"Save as Draft"** feature while adding products. This allows them to save incomplete listings and publish them later when ready.

![save draft](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/draftproductpage-scaled.webp)

When you click on **Edit Product**, you can view the current status of the product. Sellers can then update the status from **"Draft"** to **"Ready for Approval"**.

![status](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/draft5-1200x858.webp)

Once updated, the **"Approval Pending"** status will be visible in the **Product Details** section.

We’ve made the workflow even smoother! If the **"Auto Approve Product"** setting is enabled by the Admin,

sellers can now **directly approve their own draft products** without waiting for manual approval.

![draft-product](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/draftenable-scaled.webp)

### MVM Admin & Seller Draft product Reflected in Shopify's draft product List

![draft1](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/draftshopify.webp)

On admin panel ->Configuration-> Product Configuration then turn on '**CREATE PRODUCT AS DRAFT ON SHOPIFY**' configuration.

By allowing this configuration, When a product is created as a draft by the admin or seller in MVM, it will automatically appear in your Shopify product list for further editing or publishing.

### Product Preview button for Draft Items (Admin & Seller)

![draft2
](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/draftpreview-scaled.webp)

Both MVM admin and seller panels now include a **Preview** **button** for draft products, enabling users to see the product detail page layout prior to making it live on thier Stores.

**Draft Status for CSV-Added Products**


![draft3](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/draftcsv-scaled.webp)

Now, Products uploaded via CSV by both sellers and admins have option to select product status either as **Draft** status or Active Status.

**Shopify Taxonomy category added to the product form**

We've added a new option to the Product form: Shopify Taxonomy Category, making product categorization easier and more accurate.

To display this field in the product form, the Admin can enable the Product taxonomy category config.

To enable, go to Multivendor Admin Panel > Configuration > Product Configuration, and enable the **Product Taxonomy Category** config.

![Product configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/producttaxconfig.webp)

Then, go to the **Product Form Customization** section and make sure the **Product Taxonomy Category** field is marked as visible.

![Product form Customisation](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/productformtax.webp)

Once these steps are completed, the field will appear in the product form.

![Product category](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/productlistingtax-scaled.webp)

Additionally, this option has been added to **Dual Sync**.

If the admin wants to sync product categories from **Shopify to Multivendor**, they can go to the **Dual Sync** section and select **Product Taxonomy Category** for syncing.

![Dual sync](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/dualsyncproducttax.webp)

**Separate filters "Filter By" & "Search By" at Product Listing**

We’ve enhanced the product listing page by adding more specific filter options for admins and sellers. These new filters make it easier to manage and organize products efficiently.

Admins and sellers can now filter products by status, such as Global Product, Approved, Approval Pending, and more, using the available filters.

Additionally, they can perform a specific search using the 'Search by' option simultaneously.

Both the filter and search functionalities also work independently.

![filter by](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/productlistingfilter-scaled.webp)

![search by](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/productlistingfiltertwo-scaled.webp)

However, admins and sellers can conveniently search using the “Search by” option.
