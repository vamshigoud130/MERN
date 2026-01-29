 const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
/*
🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged
*/
orderCopy = JSON.parse(JSON.stringify(order));
console.log("orginal oreder:"+order);
console.log("deep copied oreder:"+orderCopy);
orderCopy.customer.address.city = "nalgonda";
orderCopy.items[0].price =50000;
console.log("After Modification:");
console.log("Original Order City:", order.customer.address.city);
console.log("Copied Order City:", orderCopy.customer.address.city);
console.log("Original Order Item Price:", order.items[0].price);
console.log("Copied Order Item Price:", orderCopy.items[0].price);

/// Additional check to see what happens when we change primitive  and non premitive property in original object
order.orderId="ORD2002";
order.customer.address.pincode=600001;  
console.log("After changing original orderId and customer.address.pincode:");
console.log("Original Order ID:", order.orderId);
console.log("Copied Order ID:", orderCopy.orderId);
console.log("Original Order Pincode:", order.customer.address.pincode);
console.log("Copied Order Pincode:", orderCopy.customer.address.pincode);


