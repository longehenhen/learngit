//period:���ڲ�Ʒ��һ����������
//rate:���ڲ�Ʒ���껯���棬�ٷ�֮����
//day:�����������ʵ���껯����
//2018/11/02
//������
function profit(period,rate,day){
	var income=3000;
	var i=day/period;
	//console.log(i);
	if(i<1){
	return rate*100;
}
	else{
	for(let j=1;j<=i;j++){
	income+=income*(rate/100/365)*period;
	//console.log(income-3000);
}
	income+=income*(rate/100/365)*(day%period);
	//console.log(income-3000);
	return ((income-3000)/3000*100*365/day);
    }

}