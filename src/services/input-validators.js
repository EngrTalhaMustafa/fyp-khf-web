export default class Validator {
    nameValidator(name) {
        return /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/.test(name);
    }
    emailValidator(email) {
        
    }
    numberValidator(number) {
        
    }
    genderValidator(gender) {
        
    }
    addressValidator(address) {
        
    }
    cnicValidator(cnic) {
        
    }
    cityValidator(city) {
        
    }
}