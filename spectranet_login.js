casper.test.begin('Spectranet Login Works', 2, function suite(test) {

    var my_username = casper.cli.options['username'];
    var my_password = casper.cli.options['password'];

    casper.start("http://1.254.254.254/", function() {
        this.waitFor(function check() {
            return this.getTitle() == 'New Customer Login Page';
        });
    });

    casper.then(function() {
        test.assertTitle("New Customer Login Page", "login page opens");
        test.assertExists('form', "main form is found");
        this.fill('form', {
            username: my_username,
            password: my_password,
            type: 2
        }, false);
        this.click('input[value="Submit"]');
    });

    casper.wait(5000, function() {
        this.echo("waited for a second");
    });

    casper.then(function() {
        casper.waitFor(function check() {
            return this.getTitle() == 'New Customer Login Page';
        });
    });

    casper.run(function() {
        test.done();
    });
});
