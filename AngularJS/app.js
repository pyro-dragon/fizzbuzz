angular.module("fbApp", []);

angular.module("fbApp").controller("fbController", ["$scope", function($scope){

    $scope.results = [];

    $scope.calculateFizzBuzz = function()
    {
        if(validate($scope.val1) && validate($scope.val2))
        {
            // Work out the highest
    		if(($scope.val1 - $scope.val2) > 0)
    		{
    			highest = $scope.val1;
    		}
    		else
    		{
    			highest = $scope.val2;	// In the case of them being the same size it doesn't matter which is assigned highest
    		}

    		for(var i = 0; i < highest; i++)
    		{
                $scope.results[i] = {};

                $scope.results[i].fizz = calculateFizz(i + 1);
                $scope.results[i].buzz = calculateBuzz(i + 1);
    		}

            return true;
        }

        return false;
    };

    // Validate the form
    function validate(value)
    {
        if(Number.isInteger(value))
        {
            if(value >1 && value <= 100)
            {
                return true;
            }
        }

        return false;
    }

    // If divisible by 3, print fizz
    function calculateFizz(value)
    {
        return doesItDivide(value, 3);
    }

    // If divisible by 5, print buzz
    function calculateBuzz(value)
    {
        return doesItDivide(value, 5);
    }

    // Generic division checking function
    function doesItDivide(value, divider)
    {
        if(value % divider)
        {
            return false;
        }

        return true
    }
}]);
