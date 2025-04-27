package math

import java.util.concurrent.Flow
import kotlin.math.pow
import kotlin.math.sqrt

class Math {

    fun addInt(a: Int, b: Int): Int{
        return a+b
    }

    fun pythagor(sideA: Float, sideB: Float): Float {
        val hypotenuse = sideA.pow(2) + sideB.pow(2)

        return sqrt(hypotenuse)
    }

}