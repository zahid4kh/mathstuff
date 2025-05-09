package math.twoD.circle

import kotlin.math.PI
import kotlin.math.pow


fun circleArea(radius: Float): Float{
    return PI.toFloat() * (radius.pow(2))
}

fun circleLengthR(radius: Float): Float{
    return 2 * PI.toFloat() * radius
}

fun circleLengthD(diameter: Float): Float{
    return PI.toFloat() * diameter
}