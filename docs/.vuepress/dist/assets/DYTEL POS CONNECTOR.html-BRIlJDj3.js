import{_ as o,c as e,b as n,o as u}from"./app-BRWvUhL_.js";const a={};function i(p,t){return u(),e("div",null,t[0]||(t[0]=[n(`<p>DYTEL POS offers a seamless, centralized system for managing orders, payments, and inventory in one place.</p><p>If you have a restaurant marketplace and use DYTEL POS, you can streamline operations by integrating it with <a href="https://apps.shopify.com/multi-vendor-marketplace" target="_blank" rel="noopener noreferrer">Shopify Multivendor Marketplace</a> for efficient vendor and transaction management .</p><p>DYTEL POS integrates with the <a href="https://apps.shopify.com/multi-vendor-marketplace" target="_blank" rel="noopener noreferrer">Multivendor Marketplace</a>, syncing Marketplace store orders directly into the seller&#39;s POS system .</p><p>This Integration allows you to sync the seller orders to the DYTEL POS in real time .</p><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>INSTALLATION</span></a></h3><p>To make this app work, first of all, you need to visit the “Feature Apps” section of the multivendor app. There you will get the “DYTEL POS CONNECTOR” feature app.</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-install-1200x683.webp" alt="dytel-pos-integration-feature-app"></p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-enable-1200x943.webp" alt="dytel-pos-integration-enable"></p><p>After that you have to approve the payments of this feature app to use this on your store.</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-payment-2-1200x943.webp" alt="dytel-payment "></p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytem-pos-payment-approve-1-1200x943.webp" alt="dytel-pos-integration-payment-approve "></p><p>And as soon as you agree with this condition and approve the payment you will get the DYTEL POS CONNECTOR installed on your store.Thus, this DYTEL POS CONNECTOR gets enabled on your marketplace.</p><h3 id="admin-configuration" tabindex="-1"><a class="header-anchor" href="#admin-configuration"><span>Admin Configuration</span></a></h3><p>To configure the admin settings, navigate to <strong>Configuration</strong> and select <strong>DYTEL POS Configuration</strong> .</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-admin-config-1200x505.webp" alt="dytel-pos-integration-admin-configuration"></p><p>To proceed, please enter the required DYTEL POS details, including the <strong>Source ID</strong> and <strong>Source Password</strong>. You can obtain these credentials from your DYTEL POS Support .</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-admin-confi-1200x445.webp" alt="DYTEL-POS-INTEGRATION-admin-details"></p><p>After entering the DYTEL POS details click on <strong>save changes</strong> .</p><h3 id="seller-configuration" tabindex="-1"><a class="header-anchor" href="#seller-configuration"><span>Seller Configuration</span></a></h3><p>To configure the seller settings, navigate to <strong>Configuration</strong> and select <strong>DYTEL POS Configuration</strong> .</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-seller-config-1200x551.webp" alt="DYTEL POS INTEGRATION-configuration "></p><p>After clicking on &quot;DYTEL POS Configuration,&quot; you&#39;ll need to enter the outlet code and password, which can be obtained from the admin .</p><p>Once you save these details, a unique token will be generated for you.</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-seller-cofig-details-1200x547.webp" alt="DYTEL POS INTEGRATION - unique token "></p><p>The token is provided because fulfilment syncing is managed outside the app.</p><p>You can either create your own program using our public fulfilment APIs or use a third-party fulfilment service like <a href="https://apps.shopify.com/tookan" target="_blank" rel="noopener noreferrer">Tookan</a>.<br> Fulfilment APIs:<br> Pass the key and Token in &quot;Params&quot;</p><p>key; token<br> value ; enter your access token here</p><p><strong>GET: https://mvmapi.webkul.com/v2/public/shop/orders/{orderId}/line-items.json(Get)</strong></p><pre><code>Example response:
{
  &quot;line_items&quot;: [
    {
      &quot;id&quot;: &quot;101&quot;,
      &quot;main_id_shop&quot;: &quot;101&quot;,
      &quot;seller_id&quot;: &quot;101&quot;,
      &quot;order_id&quot;: &quot;101&quot;,
      &quot;shopify_order_id&quot;: &quot;&quot;,
      &quot;order_product_id&quot;: &quot;101&quot;,
      &quot;product_id&quot;: &quot;101&quot;,
      &quot;shopify_product_id&quot;: &quot;101&quot;,
      &quot;shopify_variant_id&quot;: &quot;101&quot;,
      &quot;product_name&quot;: &quot;Test&quot;,
      &quot;variant_title&quot;: &quot;Test / variant&quot;,
      &quot;product_price&quot;: &quot;101.00&quot;,
      &quot;sku&quot;: &quot;TESTSKU&quot;,
      &quot;note_attribute&quot;: &quot;[]&quot;,
      &quot;line_discount&quot;: &quot;0.00&quot;,
      &quot;total_quantity&quot;: &quot;1&quot;,
      &quot;line_item_id&quot;: &quot;101&quot;,
      &quot;tax_type&quot;: &quot;IGST&quot;,
      &quot;tax_rate&quot;: &quot;0.0000&quot;,
      &quot;tax_type2&quot;: &quot;event&quot;,
      &quot;tax_rate2&quot;: &quot;0.0000&quot;,
      &quot;actual_shipping&quot;: &quot;0.000&quot;,
      &quot;actual_tax&quot;: &quot;0.000&quot;,
      &quot;unit_commission&quot;: &quot;0.000&quot;,
      &quot;shipping_commission&quot;: &quot;0.000&quot;,
      &quot;tax_commission&quot;: &quot;0.000&quot;,
      &quot;total_commission&quot;: &quot;0.000&quot;,
      &quot;id_commission_basis&quot;: &quot;4&quot;,
      &quot;id_commission_type&quot;: &quot;1&quot;,
      &quot;commission_values&quot;: &quot;10.00,0.00&quot;,
      &quot;status&quot;: &quot;0&quot;,
      &quot;cancel_reason_id&quot;: &quot;&quot;,
      &quot;ndr_awb_number&quot;: &quot;&quot;,
      &quot;is_returned&quot;: &quot;0&quot;,
      &quot;penalty_type&quot;: &quot;0&quot;,
      &quot;penalty_value&quot;: &quot;0.0000&quot;,
      &quot;shipping_type&quot;: &quot;4&quot;,
      &quot;shipping_label_link&quot;: &quot;&quot;,
      &quot;awb_created_as&quot;: &quot;&quot;,
      &quot;shipping_tax&quot;: &quot;101.000&quot;,
      &quot;fulfilled_shipping_method&quot;: &quot;0&quot;,
      &quot;is_store_pickup&quot;: &quot;0&quot;,
      &quot;fulfillment_location_id&quot;: &quot;101&quot;,
      &quot;date_add&quot;: &quot;2050-07-19T22:05:32+00:00&quot;,
      &quot;date_upd&quot;: &quot;2050-07-19T22:05:32+00:00&quot;,
      &quot;refund_commission&quot;: &quot;0.000&quot;,
      &quot;vat_type&quot;: &quot;0&quot;,
      &quot;vat&quot;: &quot;0.00&quot;,
      &quot;tracking_url&quot;: &quot;https://tracking.example.com/&quot;,
      &quot;total_actual_shipping&quot;: &quot;101&quot;
    }
  ]
}
</code></pre><p><strong>GET: https://mvmapi.webkul.com/v2/public/shop/orders/{orderId}/fulfillments.json(Get)</strong></p><pre><code>Example response: 
{
  &quot;fulfillments&quot;: [
    {
      &quot;id&quot;: &quot;101&quot;,
      &quot;sp_id_order&quot;: &quot;101&quot;,
      &quot;id_shop&quot;: &quot;101&quot;,
      &quot;main_fulfillment_id&quot;: &quot;101&quot;,
      &quot;tracking_id&quot;: &quot;101&quot;,
      &quot;shipping_method_name&quot;: &quot;Test shipping method&quot;,
      &quot;tracking_url&quot;: &quot;https://tracking.example.com/&quot;,
      &quot;date_add&quot;: &quot;2050-07-27 14:41:41&quot;,
      &quot;delivery_date&quot;: &quot;2050-07-27&quot;,
      &quot;is_deliver&quot;: &quot;0&quot;,
      &quot;fulfillment_from&quot;: &quot;3&quot;,
      &quot;shipping_method_id&quot;: &quot;4&quot;,
      &quot;is_manifest_create&quot;: &quot;0&quot;,
      &quot;shipment_status&quot;: &quot;1&quot;,
      &quot;items_fulfill&quot;: [
        {
          &quot;line_item_id&quot;: &quot;101&quot;,
          &quot;sp_id_product&quot;: &quot;101&quot;,
          &quot;main_id_variant&quot;: &quot;101&quot;,
          &quot;product_name&quot;: &quot;Test product&quot;,
          &quot;variant_title&quot;: &quot;test/variant&quot;,
          &quot;product_price&quot;: &quot;101.101&quot;,
          &quot;sku&quot;: &quot;SKU101&quot;,
          &quot;quantity_fulfilled&quot;: &quot;1&quot;,
          &quot;line_discount&quot;: &quot;0.00&quot;,
          &quot;status&quot;: &quot;2&quot;
        }
      ]
    }
  ]
}
</code></pre><p><strong>POST: https://mvmapi.webkul.com/v2/public/shop/orders/{orderId}/fulfillments.json(POST)</strong></p><pre><code>Example Value 
{
  &quot;line_item_ids&quot;: [
    {
      &quot;line_item_id&quot;: &quot;101&quot;,
      &quot;quantity&quot;: &quot;1&quot;
    }
  ],
  &quot;fulfillment_method&quot;: &quot;other&quot;,
  &quot;tracking_number&quot;: &quot;101&quot;,
  &quot;shipping_method&quot;: &quot;Test Method&quot;,
  &quot;tracking_url&quot;: &quot;www.example.com/tracking_url&quot;
}
</code></pre><h2 id="creating-dytel-pos-products" tabindex="-1"><a class="header-anchor" href="#creating-dytel-pos-products"><span>Creating DYTEL POS Products</span></a></h2><h3 id="add-dytel-pos-product-via-product-form" tabindex="-1"><a class="header-anchor" href="#add-dytel-pos-product-via-product-form"><span>Add DYTEL POS Product Via Product Form</span></a></h3><p>You can create DYTEL POS products from the seller&#39;s end by navigating to <strong>Products</strong> -&gt; <strong>Products Listing</strong> .</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-product-listing-1200x556.webp" alt="dytel-pos-product-listing"></p><p>On the product listing page, you have two options: you can either add a new DYTEL POS product and you can edit an existing one.</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-add-product-1-1200x645.webp" alt="dytel-pos-add-product"></p><p>To add a new product click on add product from product listing navigation .</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-crop-1200x895.webp" alt="dytel-pos-add-product"></p><p>After adding all the details of the products make sure to enable the <strong>want to send it to dytel</strong> option and then click on <strong>Save Changes</strong> .</p><p>To make an existing product a DYTEL POS product, click on the three dots on the product listing page, then select the &quot;Edit&quot; button to modify the product.</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-editt-product-1200x645.webp" alt="dytel-pos-editt-product"></p><p>After that you have to enable the &quot; Want to Send It To Dytel&quot; option and then click on <strong>save changes</strong> .</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/crop-dytel-1200x836.webp" alt="edit-product"></p><p>Once you have created a DYTEL POS Product or edited the existing product you have to click on these three dots and then edit to add the DYTEL POS ITEM CODE manually one by one .</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-product-item-code-1200x636.webp" alt="TEM CODE"></p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-item-code-715x1024.webp" alt="item-code"></p><p>After adding the DYTEL POS ITEM CODE to the product click on save changes .</p><h3 id="add-dytel-pos-product-via-csv-in-bulk" tabindex="-1"><a class="header-anchor" href="#add-dytel-pos-product-via-csv-in-bulk"><span>Add DYTEL POS Product Via CSV in Bulk</span></a></h3><p>If you want to add DYTEL POS item codes to multiple products at once, simply export the products within a chosen date range into a CSV</p><p>make the changes as add the item code and enter yes to mark the product as DYTEL POS Product in the CSV File and upload the updated CSV .</p><p>For that you have to click on Add DYTEL POS Products .</p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-csv-1200x547.webp" alt="add-products"></p><p><img src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/dytel-pos-export-product-1200x928.webp" alt="export-product"></p>`,56)]))}const s=o(a,[["render",i]]),l=JSON.parse('{"path":"/classic/Featured-App/Connector/DYTEL%20POS%20CONNECTOR.html","title":"DYTEL POS CONNECTOR","lang":"en-US","frontmatter":{"title":"DYTEL POS CONNECTOR","description":"DYTEL POS CONNECTOR","date":"2025-07-25T00:00:00.000Z","author":"Chirag Tyagi"},"headers":[{"level":3,"title":"INSTALLATION","slug":"installation","link":"#installation","children":[]},{"level":3,"title":"Admin Configuration","slug":"admin-configuration","link":"#admin-configuration","children":[]},{"level":3,"title":"Seller Configuration","slug":"seller-configuration","link":"#seller-configuration","children":[]},{"level":2,"title":"Creating DYTEL POS Products","slug":"creating-dytel-pos-products","link":"#creating-dytel-pos-products","children":[{"level":3,"title":"Add DYTEL POS Product Via Product Form","slug":"add-dytel-pos-product-via-product-form","link":"#add-dytel-pos-product-via-product-form","children":[]},{"level":3,"title":"Add DYTEL POS Product Via CSV in Bulk","slug":"add-dytel-pos-product-via-csv-in-bulk","link":"#add-dytel-pos-product-via-csv-in-bulk","children":[]}]}],"git":{"updatedTime":1753692029000,"contributors":[{"name":"pratik","username":"pratik","email":"pratik@webkul.com","commits":1,"url":"https://github.com/pratik"}],"changelog":[{"hash":"52c8b1d26d49bc54550dc3b20ce6d442bb390c03","time":1753692029000,"email":"pratik@webkul.com","author":"pratik","message":"fix conflcit"}]},"filePathRelative":"classic/Featured-App/Connector/DYTEL POS CONNECTOR.md"}');export{s as comp,l as data};
