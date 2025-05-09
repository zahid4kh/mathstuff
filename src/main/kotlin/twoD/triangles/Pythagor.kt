package math.twoD.triangles

import kotlin.math.pow
import kotlin.math.sqrt


fun pythagor(sideA: Float, sideB: Float): Float {
    val hypotenuse = sideA.pow(2) + sideB.pow(2)

    return sqrt(hypotenuse)
}

fun pythagorCathetus(sideA: Float, hypotenuse: Float): Float{
    val sideB = hypotenuse.pow(2) - sideA.pow(2)

    return sqrt(sideB)
}