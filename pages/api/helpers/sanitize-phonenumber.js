export default function sanitizePhoneNumber(number) {
    let filtered = number.match(/\d+/g).join("") //extract only numbers
    
    if (filtered.length == 10) {
      // phone number is in the form: 3601231234
      //  add +1 to the number
      filtered = "+1" + filtered
    } else if (filtered.length == 11) {
      // phone number is in the form: 13601231234
      // add + to the number
      filtered = "+" + filtered
    } else {
      // bad phone number, do not include
      filtered = undefined;
    }
    return filtered; //format +13601231234 || undefined
}