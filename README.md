# hw4
1. How many lines are drawn each frame? In other words, how often does the for loop run?
   A line is drawn every 10 units from x=10 to width-10, and the width=400, so there are 39 lines. 

2. What do the first, second, and third appearances of the number 10 do in the code?
   A line is drawn every 10 units from x=10 to width-10

3. How many times does the loop body run each frame, once the x and y arrays are full?
   5

4. What are two ways of increasing the spacing between rings?
   i = i + 20
   ellipse(x[i], y[i], 1 + 2 * (x.length - i));

5. How can you make the ellipse trail longer?
   x = x.slice(-500); // keep the last 500 x values
   y = y.slice(-500); // keep the last 500 y values
