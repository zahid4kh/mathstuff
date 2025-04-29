package math

import kotlin.math.PI
import kotlin.math.pow
import kotlin.math.sqrt

class Math {

    fun addInt(a: Int, b: Int): Int{
        return a+b
    }

    fun addFloat(a: Float, b: Float): Float{
        return a + b
    }

    fun addDouble(a: Double, b: Double): Double{
        return a + b
    }

    fun pythagor(sideA: Float, sideB: Float): Float {
        val hypotenuse = sideA.pow(2) + sideB.pow(2)

        return sqrt(hypotenuse)
    }

    fun pythagorCathetus(sideA: Float, hypotenuse: Float): Float{
        val sideB = hypotenuse.pow(2) - sideA.pow(2)

        return sqrt(sideB)
    }

    fun squareArea(side: Float): Float{
        return side.pow(2)
    }

    fun squarePerimeter(side: Float): Float{
        return side * 4
    }

    fun rectArea(sideA: Float, sideB: Float): Float{
        return sideA * sideB
    }

    fun rectPerimeter(sideA: Float, sideB: Float): Float{
        return (sideA + sideB) * 2
    }

    fun triangleArea(height: Float, base: Float): Float{

        val area = (0.5 * height * base).toFloat()

        return area
    }

    fun triangleArea(sideA: Float, sideB: Float, sideC: Float): Float{
        val perimeter = sideA + sideB + sideC
        val semiPerimeter = perimeter/2

        val area = sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC))

        return area
    }

    fun trianglePerimeter(sideA: Float, sideB: Float, sideC: Float): Float{
        return sideA + sideB + sideC
    }

    fun circleArea(radius: Float): Float{
        return PI.toFloat() * (radius.pow(2))
    }

    fun circleLengthR(radius: Float): Float{
        return 2 * PI.toFloat() * radius
    }

    fun circleLengthD(diameter: Float): Float{
        return PI.toFloat() * diameter
    }

    fun Float.toDegrees(): Float {
        return this * 180f / PI.toFloat()
    }

    fun Float.toRadians(): Float {
        return this * PI.toFloat() / 180f
    }
}