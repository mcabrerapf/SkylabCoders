//randomLargest()
function randomLargestOfThree(){
	var nums = []	
	nums[0] = Math.floor(Math.random() * (100 - 1)) + 1;
	nums[1] = Math.floor(Math.random() * (100 - 1)) + 1;
	nums[2] = Math.floor(Math.random() * (100 - 1)) + 1;
	var biggesNum = 0;
	console.log("The numbers are: " + nums)
	for(i=0; i<nums.length; i++){
		if(nums[i]>biggesNum){
			biggesNum=nums[i]
		}
	}console.log("The largest number is: " + biggesNum)
}