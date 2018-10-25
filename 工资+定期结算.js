function profit(month,payment){
	var income=payment;
	var count=0;
	for(let i=0;i<month-1;i++)
    {
		income+=payment+income*(5.1e-2)*30/365;
		count++;
	}
	console.log(count);
	return income;
}
console.log(profit(40*12,3400));