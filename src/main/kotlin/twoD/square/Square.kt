package math.twoD.square

import kotlin.math.pow

fun squareArea(side: Float): Float{
    return side.pow(2)
}

fun squarePerimeter(side: Float): Float{
    return side * 4
}