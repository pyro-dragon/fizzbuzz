describe("Fizz Buzz unit tests", function()
{
    beforeEach(module("fbApp"));

    var $controller;

    beforeEach(inject(function(_$controller_)
    {
        $controller = _$controller_;
    }));

    describe("Tests for the Fizz Buzz controller", function()
    {
        it("should reject if both values are not specified", function()
        {
            var $scope = {val1: 3};
            var controller = $controller("fbController", {$scope:$scope});

            expect($scope.calculateFizzBuzz()).toBe(false);
        });

        it("should reject if a value is not an integer", function()
        {
            var $scope = {val1: 3, val2: "5"};
            var controller = $controller("fbController", {$scope:$scope});

            expect($scope.calculateFizzBuzz()).toBe(false);
        });

        it("should reject if a value is not within the specified bounds", function()
        {
            var $scope = {val1: 3, val2: 500};
            var controller = $controller("fbController", {$scope:$scope});

            expect($scope.calculateFizzBuzz()).toBe(false);
        });

        it("should accept if both values are provided, of an integer type and within the specified bounds", function()
        {
            var $scope = {val1: 3, val2: 5};
            var controller = $controller("fbController", {$scope:$scope});

            expect($scope.calculateFizzBuzz()).toBe(true);

            expect($scope.results).toEqual([
                {fizz: false, buzz: false},
                {fizz: false, buzz: false},
                {fizz: true, buzz: false},
                {fizz: false, buzz: false},
                {fizz: false, buzz: true}
            ]);
        });
    });
});
