var year = eval(prompt("Nhập năm cần kiểm tra:"));
var namnhuan=false;
var yeardiv4 = year%4==0;
if(yeardiv4)
{
    var yeardiv100 = year%100==0;
    if(yeardiv100)
    {
        var yeardiv400 = year%400==0;
        if(yeardiv400)
        {
            namnhuan=true;
        }
    }
    else
    {
        namnhuan=true;
    }
}
if (namnhuan)
{
    alert("Năm nhuận");
}
else
{
    alert("Không phải năm nhuận");
}