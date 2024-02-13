var name = document.querySelector('#exampleInputName')
var gender = document.querySelectorAll('#form-user-create [name=gender]:checked')
var birth = document.querySelector('#exampleInputBirth')
var country = document.querySelector('#exampleInputCountry')
var email = document.querySelector('#exampleInputEmail1')
var password = document.querySelector('#exampleInputPassword1')
var photo = document.querySelector('#exampleInputFile')
var admin = document.querySelector('#admin')

var fields = document.querySelectorAll('#form-user-create [name]')
var user = []

document.getElementById('form-user-create').addEventListener('submit', function(event) {
    event.preventDefault()
    fields.forEach(function(field, index) {
        if (field.name == 'gender') {
            if (field.checked) {
                user.gender
            }
        } else {
            user[field.name] = field.value
        }
    })
    console.log(user)
})