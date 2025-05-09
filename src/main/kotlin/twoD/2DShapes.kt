package math.twoD

import kotlin.math.PI
import kotlin.math.pow
import kotlin.math.tan


fun arcLength(radius: Float, angleRadians: Float): Float {
    return radius * angleRadians
}

fun sectorArea(radius: Float, angleRadians: Float): Float {
    return (0.5 * radius.pow(2) * angleRadians).toFloat()
}

fun trapezoidArea(top: Float, bottom: Float, height: Float): Float {
    return (0.5 * (top + bottom) * height).toFloat()
}

fun regularPolygonArea(numberOfSides: Int, sideLength: Float): Float {
    val apothem = sideLength / (2 * tan(PI / numberOfSides))
    return ((numberOfSides * sideLength * apothem) / 2).toFloat()
}

fun parallelogramArea(base: Float, height: Float): Float {
    return base * height
}

fun rhombusArea(diagonal1: Float, diagonal2: Float): Float {
    return (diagonal1 * diagonal2) / 2
}

fun ellipsArea(semiMajorAxis: Float, semiMinorAxis: Float): Float {
    return (PI * semiMajorAxis * semiMinorAxis).toFloat()
}