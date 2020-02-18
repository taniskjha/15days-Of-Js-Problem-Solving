// Write a program to classify the triangle as equilateral, isosceles and scalene to the given sides of triangle.



function check_triangle(angle1,angle2,angle3) {
        if(angle1 == angle2 && angle2 == angle3) {
            return 'equilateral'
        } else if(angle1 == angle2 || angle2 == angle3 || angle1 == angle3 ) {
            return 'isosceles'
        } else if(angle1 !== angle2 && angle2 !== angle3) {
            return 'scalene'
        }
}

check_triangle(65,65,50)

