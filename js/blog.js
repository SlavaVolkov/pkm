/**
 * Created by Slavik on 25.10.15.
 */
$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("lyJgiJfTlTrUFXERtFkZy6iqwJUyhaRMrH5ZslZZ", "pXRMxe4A0nmXdZeYRBORL45rmto7jPwEX9AnqCZg");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
        alert("yay! it worked");
    });

});