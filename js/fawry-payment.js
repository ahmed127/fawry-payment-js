// var data={
//     merchantCode : '1tSa6uxz2nRbgY+b+cZGyA==',
//     merchantRefNum : '2312465464',
//     customerMobile : '01100547820',
//     customerEmail : 'email@domain.com',
//     customerName : 'Customer Name',
//     customerProfileId : '1212',
//     paymentExpiry : '1631138400000',
//     secure_key : 'a6410a5aaad446fb94e6964530a6917c',
//     chargeItems : [
//                 {
//                     itemId: '6b5fdea340e31b3b0339d4d4ae5',
//                     description: 'Product Description',
//                     price: 50.00,
//                     quantity: 2,
//                     imageUrl: 'https://your-site-link.com/photos/45566.jpg',
//                 },
//                 {
//                     itemId: '97092dd9e9c07888c7eef36',
//                     description: 'Product Description',
//                     price: 75.25,
//                     quantity: 3,
//                     imageUrl: 'https://your-site-link.com/photos/639855.jpg',
//                 },
//         ],
//     returnUrl : 'https://your-site-link.com',
//     authCaptureModePayment : 'false',
//     signature : "2ca4c078ab0d4c50ba90e31b3b0339d4d4ae5b32f97092dd9e9c07888c7eef36"

// };

function buildChargeRequest(data) {

    const chargeRequest = {
        merchantCode: data.merchantCode,
        merchantRefNum: data.merchantRefNum,
        customerMobile: data.customerMobile,
        customerEmail: data.customerEmail,
        customerName: data.customerName,
        customerProfileId: data.customerProfileId,
        paymentExpiry: data.paymentExpiry,
        chargeItems: data.chargeItems,
        returnUrl: data.returnUrl,
        authCaptureModePayment: data.authCaptureModePayment,
        signature: data.signature
    }
    return chargeRequest;
}

function checkout(data) {
    const configuration = {
        locale : "en",  //default en
        mode: DISPLAY_MODE.SIDE_PAGE,  //required, allowed values [POPUP, INSIDE_PAGE, SIDE_PAGE]
        onSuccess : successCallBack(),  //optional and not supported in SEPARATED display mode
        onFailure : failureCallBack(),  //optional and not supported in SEPARATED display mode
    };
    FawryPay.checkout(buildChargeRequest(data), configuration);
}

function successCallBack(data) {
    // document.getElementById("success").innerHTML = "handle successful callback as desired, data " + data;
    console.log('handle successful callback as desired, data', data);
}

function failureCallBack(data) {
    // document.getElementById("fail").innerHTML = "handle failure callback as desired, data " + data;
    console.log('handle failure callback as desired, data', data);

}
