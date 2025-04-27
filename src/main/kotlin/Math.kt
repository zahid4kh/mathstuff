package math

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
}