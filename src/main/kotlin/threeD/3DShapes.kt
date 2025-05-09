package math.threeD

import kotlin.math.PI
import kotlin.math.pow
import kotlin.math.sqrt


fun cubeVolume(side: Float): Float{
    return side.pow(3)
}

fun cuboidVolume(length: Float, width: Float, height: Float): Float{
    return length * width * height
}

fun cubeSurfaceArea(side: Float): Float {
    return 6 * side.pow(2)
}

fun rectangularPrismVolume(length: Float, width: Float, height: Float): Float {
    return length * width * height
}

fun rectangularPrismSurfaceArea(length: Float, width: Float, height: Float): Float {
    return 2 * (length * width + length * height + width * height)
}

fun sphereVolume(radius: Float): Float {
    return ((4.0 / 3.0) * PI * radius.pow(3)).toFloat()
}

fun sphereSurfaceArea(radius: Float): Float {
    return (4 * PI * radius.pow(2)).toFloat()
}

fun cylinderVolume(radius: Float, height: Float): Float {
    return (PI * height * radius.pow(2)).toFloat()
}

fun cylinderSurfaceArea(radius: Float, height: Float): Float {
    return (2 * PI * radius * (radius + height)).toFloat()
}

fun coneVolume(radius: Float, height: Float): Float {
    return ((1.0 / 3.0) * PI * height * radius.pow(2)).toFloat()
}

fun coneSurfaceArea(radius: Float, height: Float): Float {
    return (PI * radius * (radius + sqrt(height.pow(2) + radius.pow(2)))).toFloat()
}

fun pyramidVolume(baseLength: Float, baseWidth: Float, height: Float): Float {
    return ((1.0 / 3.0) * baseLength * baseWidth * height).toFloat()
}