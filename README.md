# Express.js-Displaying-Dynamic-contents-using-PUG-templating-engine-content
Express.js Displaying Dynamic contents using PUG templating engine content

To dynamically send data to the template we need to send a second argument as a dictionary to "res.render()" and the we could use the vairiables by the keys specified in the dictionary in the template as -: #{ key of dictionary goes here }


====================================================================================================================================================================

INDENTAION IS VERY VERY IMPORTANT!!!!!!!!!!!

====================================================================================================================================================================

Loops in pug

suppose products is array vairiable-

var products = ["kjdbc","dsclvh","wclhnw","wcjwh"]

WE LOOP AS -:

each pro in products
  h1 #{pro}
  
====================================================================================================================================================================
  
  
  
Conditional statement  -: 


if products.length > 0

  h1 #{products}
  
else  

  h1 no products found
  
  
  ====================================================================================================================================================================

INDENTAION IS VERY VERY IMPORTANT!!!!!!!!!!!
