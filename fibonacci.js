let i , a , b , x , n;

a = 0;
b = 1;
n = 10;

for(i = 0; i<=n; i++){
    x = a + b;
    a = b;
    b = x;
    console.log(x);
}